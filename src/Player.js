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
        // tell the player which component consumes
        // the player events
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

    $mediaplayerProgress({currentTime, duration}){
        console.log(currentTime, duration)
    }

    $mediaplayerEnded(){
        this.signal("videoEnded");
        // clear source
        this.tag("MediaPlayer").close();
    }

    $mediaplayerPlay(){
        // this.tag("MediaPlayer").seek(15, true)
    }

    $mediaplayerPause(){

    }
}