import {Lightning, Utils} from "wpe-lightning-sdk";
import Vector from "../lib/Vector";

export default class Wall extends Lightning.Component {
    static _template() {
        return {
            src: Utils.asset("test1.png")
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
        return Wall.prototype.size;
    }
}

Wall.prototype.size = new Vector(1, 1);