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

export default class Lives extends Lightning.Component {
    static _template(){
        return {
            Hearts: {}
        }
    }

    set(v){
        this._lives = v;

        this.tag("Hearts").children = [];
        for (let i = 0; i < this._lives; i++) {
            this.tag("Hearts").childList.a({
                src: Utils.asset('assets/ui/heart.png'),
                x: 43 * i
            });
        }
    }

}