/*
 * Copyright 2020 Metrological
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import Vector from "../lib/Vector";
import {Lightning, Utils} from "@lightningjs/sdk";


export default class Lava extends Lightning.Component {

    static _template() {
        return {
            Lava: {
                rect: true, w: 75, h: 75, colorTop: 0xffFFC42A, colorBottom: 0xffFF2F2A, mountY: 1, pivotY: 1, y: 75
            },
            Ground: {
                y: 49,
                src: Utils.asset("assets/level/lava.png")
            }
        };
    }

    _construct() {
        this._size = new Vector(1, 1);
    }

    _init() {
        this._lavaAnimation = this.animation({
            duration: 5, repeat: -1, stopMethod: 'immediate', actions: [
                {t: 'Lava', p: 'colorTop', rv: 0, v: {0: {v: 0xffFFC42A}, .5: {v: 0xffFF2F2A}, 1: {v: 0xffFFC42A}}},
                {t: 'Lava', p: 'colorBottom', rv: 0, v: {0: {v: 0xffFF2F2A}, .5: {v: 0xffFFC42A}, 1: {v: 0xffFF2F2A}}},
                {t: 'Lava', p: 'scaleY', rv: 0, v: {0: {v: 1}, .5: {v: .6}, 1: {v: 1}}}
            ]
        });
        this._lavaAnimation.start();
    }

    set pos(v) {
        this._pos = v;
    }

    get pos() {
        return this._pos;
    }

    get atype() {
        return "lava";
    };

    act(step, level) {

    }

    onTouch(player) {

    }

    static get size() {
        return Lava.prototype.size;
    }
}

Lava.prototype.size = new Vector(1, 1);