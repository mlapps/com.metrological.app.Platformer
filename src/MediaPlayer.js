import {Lightning, MediaPlayer } from "wpe-lightning-sdk";

export default class Player extends Lightning.Component {
    static _template() {
        return {
            MediaPlayer: {
                type: MediaPlayer
            }
        };
    }

    _init() {
        /**
         * We tell the mediaplayer which Component is consuming the events
         */
        this.tag("MediaPlayer").updateSettings({
            consumer: this
        });
    }


    play(src, loop) {
        this.tag("MediaPlayer").open(src);
        this.tag("MediaPlayer").videoEl.loop = loop;
    }

    stop() {
        this.tag("MediaPlayer").close();
    }
}