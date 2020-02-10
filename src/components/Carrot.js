import Vector from "../lib/Vector";
import {Lightning, Utils} from "wpe-lightning-sdk";

export default class Carrot extends Lightning.Component {

    static _template() {
        return {
             w: 75, h: 75, rect: true, color: 0xffff9900
        };
    }

    _construct() {
        this._size = new Vector(0.4, 0.4);
    }

    _init() {
        this.basePos = this.pos = this.pos.plus(new Vector(0.2, 0.1));
        this.wobble = Math.random() * Math.PI * 2;
    }

    // plus 0, -0.5
    set pos(v) {
        this._pos = v;
    }

    get pos() {
        return this._pos;
    }

    get atype() {
        return "carrot";
    };

    act(dt) {
        let wobbleSpeed = 8;
        let wobbleDist = 0.1;
        this.wobble += dt * wobbleSpeed;
        let wobblePos = Math.sin(this.wobble) * wobbleDist;
        this.pos = this.basePos.plus(new Vector(0, wobblePos));

        this.x = (this.pos.x) * 75;
        this.y = (this.pos.y - 0.8) * 75;
    }

    onTouch(player) {
       // @todo: do something with the player or the carrot
    }
}