import Vector from "../lib/Vector";
import {Lightning} from "wpe-lightning-sdk";

export default class Slicer extends Lightning.Component {

    static _template() {
        return {
            rect: true, color: 0xff8f9494
        };
    }

    _construct() {
        this._size = new Vector(0.4, 0.4);
    }

    // plus 0, -0.5
    set pos(v) {
        this._pos = v;
    }

    get pos() {
        return this._pos;
    }

    get atype() {
        return "slicer";
    };

    act(dt) {}

    onTouch(player) {
        player.speed.y = -25;
    }
}