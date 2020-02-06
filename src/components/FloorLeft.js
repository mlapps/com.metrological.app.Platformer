import {Lightning, Utils} from "wpe-lightning-sdk";
import Vector from "../lib/Vector";

export default class FloorLeft extends Lightning.Component {
    static _template() {
        return {};
    }

    _init() {
        this.src = Utils.asset(`assets/level/floor-left-${1}.png`);
    }

    set pos(v) {
        this.pos = v;
    }

    get pos() {
        return this.pos;
    }

    static get size() {
        return FloorLeft.prototype.size;
    }
}

FloorLeft.prototype.size = new Vector(1, 1);