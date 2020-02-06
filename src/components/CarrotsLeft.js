import {Lightning} from "wpe-lightning-sdk";

export default class CarrotsLeft extends Lightning.Component {
    static _template(){
        return {
            Label:{
                text:{text:''}
            }
        }
    }

    set(v){
        this._lives = v;
        this.tag("Label").text.text = `Carrots: ${v}`;
    }

}