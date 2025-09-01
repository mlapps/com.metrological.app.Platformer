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

export default class Plant extends Lightning.Component {
    static _template() {
        return {
        };
    }

    _init() {
        const index = Math.floor((Math.random() * 3) + 1);
        this.src = Utils.asset(`assets/level/plant-${index}.png`);
    }

    set pos(v) {
        this._pos = v;
    }

    get pos() {
        return this._pos;
    }

    static get size() {
        return Plant.prototype.size;
    }
}

Plant.prototype.size = new Vector(1, 1);