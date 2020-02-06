import Vector from "../lib/Vector";
import {Lightning, Utils} from "wpe-lightning-sdk";

export default class Jumper extends Lightning.Component {

    static _template() {
        return {
            rect: true
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
        return "jumper";
    };

    act(dt) {}

    onTouch(player) {
        player.speed.y = -25;
    }
}