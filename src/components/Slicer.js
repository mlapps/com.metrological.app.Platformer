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

export default class Slicer extends Lightning.Component {

    static _template() {
        return {
            Slicer: {
                src: Utils.asset("assets/level/slicer-a.png")
            },
            Stick: {
                y: 35, mountX: .5, x: 35,
                src: Utils.asset("assets/level/slicer-b.png")
            }
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

    act(dt) {
        let sliceSpeed = Math.PI * 2;

        this.tag("Slicer").rotation += sliceSpeed * dt;
    }

    onTouch(player) {

    }
}