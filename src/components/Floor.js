import {Lightning, Utils} from "wpe-lightning-sdk";
import Vector from "../lib/Vector";

export default class Floor extends Lightning.Component {
    static _template() {
        return {
            zIndex: 2, w: 75, h:75, rect: true, color:0xffffffff
        };
    }

    _init() {

    }

    set pos(v) {
        this.pos = v;
    }

    get pos() {
        return this.pos;
    }

    static get size() {
        return Floor.prototype.size;
    }
}

Floor.prototype.size = new Vector(1, 1);