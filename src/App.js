/**
 * We import Lightning and Utils from our SDK:
 * https://github.com/WebPlatformForEmbedded/Lightning-SDK
 *
 */
import {Lightning, Utils} from "wpe-lightning-sdk";

/**
 * Import all the Components that we need in our App
 */
import Splash from "./Splash.js";
import Main from "./Main.js";
import Game from "./Game.js";
import Player from "./Player.js";

/**
 * Every Component will extends a Lightning Component
 * or a class that extends a Lightning Component:
 * https://webplatformforembedded.github.io/Lightning/docs/components/overview
 */
export default class App extends Lightning.Component {

    /**
     * Provide all the needed fonts for your Application. During setup all the fonts will be loaded
     * and after load your app will show.
     *
     * @returns {{descriptor: {}, family: string, url: *}[]}
     */
    static getFonts() {
        return [
            {family: 'Bold', url: Utils.asset('fonts/Magra-Bold.ttf'), descriptor: {}}
        ];
    }

    static _template() {
        return {
            rect: true, color: 0xff000000, w: 1920, h: 1080,
            Logo: {
                x: 100, y: 100, text: {text: 'TicTacToe', fontFace: 'pixel'}, alpha: 0
            },
            Splash: {
                type: Splash, signals: {loaded: true}, alpha: 0
            },
            Main: {
                type: Main, alpha: 0, signals: {select: "menuSelect"}
            },
            Game: {
                type: Game, alpha: 0, signals: {won: true}
            },
            Player: {
                type: Player, alpha: 0, signals: {videoEnded: "ready"}
            }
        };
    }

    /**
     * Setup lifecycle event:
     * https://webplatformforembedded.github.io/Lightning/docs/components/overview#component-events
     * @private
     */
    _setup() {
        this._setState("Main");
    }

    /**
     * The definition of our statemachine:
     * https://webplatformforembedded.github.io/Lightning/docs/components/statemachine/statemachine
     *
     * @returns {*[]}
     * @private
     */
    static _states() {
        return [
            class Splash extends this {
                /**
                 * $enter() will be called when you enter a state,
                 * $exit() when you leave a state, you can do any additional clean up here
                 */
                $enter() {
                    this.tag("Splash").setSmooth("alpha", 1);
                }

                $exit() {
                    this.tag("Splash").setSmooth("alpha", 0);
                }

                loaded() {
                    this._setState("Main");
                }
            },
            class Main extends this {
                $enter() {

                    this.tag("Main").patch({
                        smooth: {alpha: 1, y: 0}
                    });

                    setTimeout(() => {
                        this.tag("Player").setSmooth("alpha", 1);
                        this.tag("Player").play("http://video.metrological.com/loop.mp4", true);
                    }, 500);
                }

                $exit() {
                    this.tag("Main").patch({
                        smooth: {alpha: 0, y: 100}
                    });

                    this.tag("Player").setSmooth("alpha", 0);
                    this.tag("Player").stop();
                }

                menuSelect({item}) {
                    if (this._hasMethod(item.action)) {
                        return this[item.action]();
                    }
                }

                start() {
                    this._setState("Video");
                }

                /**
                 * Tell Lightning which component is the active component
                 * and should handle the remote control events.
                 * @returns {*|never}
                 * @private
                 */
                _getFocused() {
                    return this.tag("Main");
                }
            },
            class Video extends this {
                $enter() {
                    this.tag("Player").setSmooth("alpha", 1);
                    setTimeout(() => {
                        this.tag("Player").play("http://video.metrological.com/epicbunnytale.mp4", false);
                    }, 500);
                }

                $exit() {
                    this.tag("Player").setSmooth("alpha", 0);
                }

                _getFocused() {
                    return this.tag("Player");
                }

                ready() {
                    this._setState("Game");
                }
            },
            class Game extends this {
                $enter() {
                    this.tag("Game").setSmooth("alpha", 1);
                }

                $exit() {
                    this.tag("Game").setSmooth("alpha", 0);
                }

                _getFocused() {
                    return this.tag("Game");
                }

                won() {
                    this._setState("PrepareNewRound");
                }
            },
            class PrepareNewRound extends this {
                $enter() {
                    this.tag("Game").createNewRound();
                    this._setState("Video");
                }
            }
        ];
    }
}