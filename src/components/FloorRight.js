import {Lightning, Utils} from "wpe-lightning-sdk";
import Vector from "../lib/Vector";

export default class FloorRight extends Lightning.Component {
    static _template() {
        return {};
    }

    _init() {
        this.src = Utils.asset(`assets/level/floor-right-${1}.png`);
    }

    set pos(v) {
        this.pos = v;
    }

    get pos() {
        return this.pos;
    }

    static get size() {
        return FloorRight.prototype.size;
    }
}

FloorRight.prototype.size = new Vector(1, 1);