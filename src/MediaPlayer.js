import {Lightning, MediaPlayer, Utils} from "wpe-lightning-sdk";

export default class Player extends Lightning.Component {
    static _template() {
        return {
            MediaPlayer: {
                type: MediaPlayer
            },
            Overlay:{
                w:1920, rect:true, h:300, mountY:1, y:1080, colorTop:0x00000000, colorBottom: 0xff000000
            },
            Controls:{
                /**
                 * @todo:
                 * - add play / pause button
                 * - add skip button
                 */
                Current:{
                    type: Current, x: 150, y:7
                }
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

    _focus(){
        this.tag("Controls").alpha = 1;
    }

    _unfocus(){
        this.tag("Controls").alpha = 0;
    }

    play(src, loop) {
        this.tag("MediaPlayer").open(src);
        this.tag("MediaPlayer").videoEl.loop = loop;
    }

    /**
     * @todo:
     *
     * - Implement $mediaplayerPlay
     * - Force app in Playing state
     */

    stop() {
        this.tag("MediaPlayer").close();
    }

    /**
     * @todo:
     * - implement ended Event
     * - signal videoEnded to parent
     */

    /**
     * @todo:
     * - implement _handleEnter() and make the the video pause
     * - Implement $mediaplayerPause
     * - go to Paused state
     */


    static _states(){
        return [
            class Loading extends this{

            }
            /**
             * @todo:
             *  - Add Playing state ( show static/mediaplayer/pause button on enter
             *  - Add Paused state (show static/mediaplayer/play.png button on enter
             */
        ]
    }
}

class Current extends Lightning.Component{
    static _template(){
        return{
            Bar:{
                rect: true, color:0x20ffffff, h:10, w:1500
            },
            Duration:{
                rect: true, color:0xffffffff, h:10,
            }
        }
    }

    setProgress(currentTime, duration) {
        // @todo: calculate how far de video is progressed
        // @todo: set transition on w property of Duration component
    }
}