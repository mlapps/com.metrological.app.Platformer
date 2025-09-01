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

export default class Carrot extends Lightning.Component {

    static _template() {
        return {
            src: Utils.asset("assets/level/carrot.png"),
            w: 2, h: 2,
            transitions: {
                alpha: {duration: .6, timingFunction: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'},
                scale: {duration: .6, timingFunction: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}
            }
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
        let wobbleDist = 0.1;
        this.wobble += dt * wobbleSpeed;
        let wobblePos = Math.sin(this.wobble) * wobbleDist;
        this.pos = this.basePos.plus(new Vector(0, wobblePos));

        this.x = (this.pos.x) * 75;
        this.y = (this.pos.y - 0.8) * 75;
    }

    onTouch(player) {
        // @todo: infect player
        this.patch({
            smooth: {
                scale: [0,{duration:0.4,delay:0}],
                alpha:[0, {duration:0.2, delay:0.3}]
            }
        });
    }
}