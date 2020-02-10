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
            {family: 'Magra', url: Utils.asset('fonts/Magra-Bold.ttf'), descriptor: {}}
        ];
    }

    /**
     * Define the root tree of your App
     */
    static _template() {
        return {
            Splash: {
                type: Splash,
                /**
                 * Define which signals you accept from the splash page
                 */
                signals: {loaded: true}, alpha: 0
            },
            MediaPlayer: {
                // @todo: import and add MediaPlayer
                // @todo: set alpha to 0
            },
            Main: {
                type: Main, alpha: 0, signals: {select: "menuSelect"}
            }
        };
    }

    /**
     * Setup lifecycle event:
     * https://webplatformforembedded.github.io/Lightning/docs/components/overview#component-events
     * @private
     */
    _setup() {
        this._setState("Splash");
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

                    /**
                     * @todo:
                     * - show mediaPlayer component (transition alpha)
                     * - play video: http://video.metrological.com/loop.mp4
                     */
                }
                /**
                 * get's called when someone selects a menu item
                 * we first test if we have an attached method
                 * with that action
                 * @param item
                 * @returns {*}
                 */
                menuSelect({item}) {
                    if (this._hasMethod(item.action)) {
                        return this[item.action]();
                    }
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
            }
        ];
    }
}