import Vector from "../lib/Vector";
import {Lightning, Utils} from "wpe-lightning-sdk";

export default class Mole extends Lightning.Component {

    static _template() {
        return {
            Mole: {
                x: 20,
                src: Utils.asset("assets/level/mole-b.png"),
                ArmLeft: {
                    src: Utils.asset("assets/level/mole-c.png"),
                    rotation: Math.PI * -.5, y: 15,
                    mountY: .9, pivotY: .9, scaleX: -1
                },
                ArmRight: {
                    src: Utils.asset("assets/level/mole-c.png"),
                    rotation: Math.PI * .5, x: 30, y: 15,
                    mountY: .9, pivotY: .9
                },
                LegLeft: {
                    y: 43, x: -5,
                    src: Utils.asset("assets/level/mole-d.png"),
                },
                LegRight: {
                    y: 43, x: 30, scaleX: -1,
                    src: Utils.asset("assets/level/mole-d.png"),
                }
            },
            Overlay: {
                y: 60, x: 5,
                src: Utils.asset("assets/level/mole-a.png")
            }
        };
    }

    _construct() {
        this._size = new Vector(0.4, 0.4);
    }

    _init() {
        this._range = 0;
        this._direction = 2;

        this._moleAnimation = this.animation({
            duration: .2, repeat: -1, stopMethod: 'immediate', actions: [
                {t: 'ArmLeft', p: 'rotation', v: {0: {v: Math.PI * -.2}, .5: {v: Math.PI * -.7}, 1: {v: Math.PI * -.2}}},
                {t: 'ArmRight', p: 'rotation', v: {0: {v: Math.PI * .2}, .5: {v: Math.PI * .7}, 1: {v: Math.PI * .2}}}
            ]
        });
    }

    _active() {
        this._moleAnimation.start();
    }

    _inactive() {
        this._moleAnimation.stop();
    }

    // plus 0, -0.5
    set pos(v) {
        this._pos = v;
    }

    get pos() {
        return this._pos;
    }

    get atype() {
        return "mole";
    };

    act(dt) {
        if (this._range === -160) {
            this._direction = 4;
        }

        if (this._range === 76) {
            this._direction = -4;
        }

        console.log(this._range)

        this._range += this._direction;
        this._pos.y += (this._direction / 75);

        this.tag("Mole").y = this._range;
    }

    onTouch(player) {

    }
}