import {Lightning, Utils} from "wpe-lightning-sdk";

export default class CarrotsLeft extends Lightning.Component {
    static _template(){
        return {
            flex: {},
            Carrot: {
                src: Utils.asset('assets/ui/carrot.png')
            },
            Left:{x: 20, y: 3,
                text:{text:'', fontFace: "Bold", fontSize: 26}
            }
        }
    }

    set(v) {
        this.carrotsLeft = v;
        this.tag("Left").text.text = `${this.carrotsLeft}`;
    }

}