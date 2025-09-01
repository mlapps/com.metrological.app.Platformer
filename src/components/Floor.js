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

import {Lightning, Utils} from "@lightningjs/sdk";
import Vector from "../lib/Vector";

export default class Floor extends Lightning.Component {
    static _template() {
        return {
            zIndex: 2
        };
    }

    _init() {
        const index = Math.floor((Math.random() * 4) + 1);
        this.src = Utils.asset(`assets/level/floor-${index}.png`);
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