import {Lightning, Utils} from "wpe-lightning-sdk";
import Splash from "./Splash.js";
import Main from "./Main.js";
import Game from "./Game.js";
import Player from "./Player.js";

export default class App extends Lightning.Component {

    static getFonts() {
        return [
            {family: 'pixel', url: Utils.asset('fonts/pixel.ttf'), descriptor: {}}
        ];
    }

    static _template() {
        return {
            Logo: {
                x: 100, y: 100, text: {text: 'TicTacToe', fontFace: 'pixel'}, alpha: 0
            },
            rect: true, color: 0xff000000,
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

    _setup() {
        this._setState("Main");
    }

    static _states() {
        return [
            class Splash extends this {
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
                }

                $exit() {
                    this.tag("Main").patch({
                        smooth: {alpha: 0, y: 100}
                    });
                }

                menuSelect({item}) {
                    if (this._hasMethod(item.action)) {
                        return this[item.action]();
                    }
                }

                start() {
                    this._setState("Video");
                }

                // change focus path to main
                // component which handles the remotecontrol
                _getFocused() {
                    return this.tag("Main");
                }
            },
            class Video extends this {
                $enter() {
                    this.tag("Player").setSmooth("alpha", 1);
                    this.tag("Player").play("http://video.metrological.com/sea.mp4");
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