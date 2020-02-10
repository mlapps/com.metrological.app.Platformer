/**
 * We import Lightning and Utils from our SDK:
 * https://github.com/WebPlatformForEmbedded/Lightning-SDK
 *
 */
import {Lightning, Utils} from "wpe-lightning-sdk";

/**
 * Import all the Components that we need in our App
 */


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
        return [];
    }

    /**
     * @todo: add the Splash Component to the rendertree
     * Define the root tree of your App
     */
    static _template() {
        return {
            Splash:{

            }
        };
    }

    /**
     * Setup lifecycle event:
     * https://webplatformforembedded.github.io/Lightning/docs/components/overview#component-events
     * @private
     */
    _setup() {

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

            },
            class Main extends this {

            }
        ];
    }
}