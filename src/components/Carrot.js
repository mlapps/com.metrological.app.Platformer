import Vector from "../lib/Vector";
import {Lightning} from "wpe-lightning-sdk";

export default class Carrot extends Lightning.Component {

    static _template() {
        return {
            rect: true, w: 40, h: 40, color: 0xffd94d0f
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
        let wobbleDist = 0.07;
        this.wobble += dt * wobbleSpeed;
        let wobblePos = Math.sin(this.wobble) * wobbleDist;
        this.pos = this.basePos.plus(new Vector(0, wobblePos));

        this.x = (this.pos.x) * 75;
        this.y = (this.pos.y) * 75;
    }

    onTouch(player) {
        // @todo: infect player
        this.patch({
            smooth: {
                alpha: 0, scale: 1.2
            }
        });
    }
}