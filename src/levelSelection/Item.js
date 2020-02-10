import {Lightning, Utils} from "wpe-lightning-sdk";

export default class Level extends Lightning.Component{
    static _template(){
        return {
            w: 300, h: 150, alpha: 0.5
        }
    }

    _focus(){
        this.setSmooth("alpha", 1);
    }

    _unfocus(){
        this.setSmooth("alpha", 0.5);
    }

    set image(v){
        this.src = Utils.asset(`assets/level/${v}`);
    }
}