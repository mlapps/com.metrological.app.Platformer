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

export default class CarrotsLeft extends Lightning.Component {
    static _template(){
        return {
            flex: {},
            Carrot: {
                flexItem: {marginTop: 10, marginBottom: 10, marginLeft: 0, marginRight: 15},
                src: Utils.asset('assets/ui/carrot.png')
            },
            CarrotsCounter: {
                flex: {},
                Grabbed:{
                    text:{text:'', fontFace: "Magra", fontSize: 42}
                },
                Total: {
                    flexItem: {marginLeft: 10, marginTop: 14},
                    text:{text:'', fontFace: "Magra", fontSize: 24}
                }
            }
        }
    }

    set(v) {
        this.carrots = v;
        this.tag("Grabbed").text.text = `${this.carrots.total - this.carrots.left}`;
        this.tag("Total").text.text = `/ ${this.carrots.total}`;
    }

}