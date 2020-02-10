import {Lightning, MediaPlayer} from "wpe-lightning-sdk";

export default class Player extends Lightning.Component{
    static _template(){
        return {
           MediaPlayer:{
               type: MediaPlayer
           }
        }
    }

    _init(){
        /**
         * We tell the mediaplayer which Component is consuming the events
         */
        this.tag("MediaPlayer").updateSettings({
            consumer: this
        })
    }


    play(src, loop){
        this.tag("MediaPlayer").open(src);
        this.tag("MediaPlayer").videoEl.loop = loop;
    }

    stop() {
        this.tag("MediaPlayer").close();
    }

    /**
     * This will be automatically called on timeupdate
     * @param currentTime
     * @param duration
     */
    $mediaplayerProgress({currentTime, duration}){
        console.log(currentTime, duration)
    }

    /**
     * This will be automatically called on video end
     * @param currentTime
     * @param duration
     */
    $mediaplayerEnded(){
        this.signal("videoEnded");
        // clear source
        this.tag("MediaPlayer").close();
    }
    /**
     * This will be automatically called on video end
     * @param currentTime
     * @param duration
     */
    $mediaplayerPlay(){
        this.tag("MediaPlayer").seek(17, true)
    }

    $mediaplayerPause(){

    }
}