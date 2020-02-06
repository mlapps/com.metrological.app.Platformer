import Vector from "../lib/Vector";
import {Lightning} from "wpe-lightning-sdk";


export default class Lava extends Lightning.Component {

    static _template() {
        return {
            rect: true, w: 40, h: 40, color: 0xffe14d19,
            Particles: {}
        };
    }

    _construct() {
        this.size = new Vector(1, 1);
        this.type = "lava";
        this.speed = new Vector(2, 0);
    }

    set pos(v) {
        this._pos = v;
    }

    get pos() {
        return this._pos;
    }

    act(step, level) {

    }
}