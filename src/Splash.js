import { Lightning, Utils } from "wpe-lightning-sdk";

export default class Splash extends Lightning.Component {

    static _template(){
        return {
            Background: {
                rect: true, w: 1920, h: 1080, colorTop: 0xff38769f, colorBottom: 0xff363358
            },
            Logo: {
                // @todo: add and position logo.png from static folder ( Utils.asset() )
            },
            Carrot: {
                // @todo: add and position carrot.png
            }
        }
    }

    /**
     * This will fire when the component is initialized
     * https://webplatformforembedded.github.io/Lightning/docs/components/overview#component-events
     */
    _init(){
        /**
         * https://webplatformforembedded.github.io/Lightning/docs/animations/overview
         *
         * @todo:
         *  - create a carrot animation that changes the rotation property
         *  - start the animation
         *  - listen to animation finish and signal: ready.
         */
    }

    _active() {
        /**
         * https://webplatformforembedded.github.io/Lightning/docs/transitions/overview
         *
         * @todo:
         *  - do a transition on the logo's alpha and scale property
         */
    }
}