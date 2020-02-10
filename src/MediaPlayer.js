import {Lightning} from "wpe-lightning-sdk";

export default class Player extends Lightning.Component {
    static _template() {
        return {
            MediaPlayer: {
                // @todo: import mediaPlayer from SDK
                // add it to the render tree
            }
        };
    }

    _init() {
        // @todo: set consumer
    }
}
