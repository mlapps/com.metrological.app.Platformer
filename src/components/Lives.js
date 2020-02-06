import {Lightning} from "wpe-lightning-sdk";

export default class Lives extends Lightning.Component {
    static _template(){
        return {
            Label:{
                text:{text:''}
            }
        }
    }

    set(v){
        this._lives = v;
        this.tag("Label").text.text = `Lives: ${v}`;
    }

}