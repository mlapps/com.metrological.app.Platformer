import { Lightning, Utils } from "wpe-lightning-sdk";

export default class Splash extends Lightning.Component {

    static _template(){
        return {
            Carrot: {
                mount: 1, x: 1840, y: 1000,
                src: Utils.asset("assets/carrot.png")
            }
        }
    }

    _init(){
        this._pulse = this.animation({
            duration: 1, repeat: 3, actions:[
                {t: 'Carrot', p:'rotation', v:{0: 0, 1: Math.PI * 2}}
            ]
        });
        this._pulse.start();

        this._pulse.on("finish",()=>{
            this.signal("loaded");
        });
    }
}