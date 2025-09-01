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

import { Lightning } from "@lightningjs/sdk";

export default class Item extends Lightning.Component{

    static _template(){
        return {
            color: 0xffA8A6A2,
            text:{text:'', fontFace:'Magra', fontSize:50}
        }
    }

    set label(v){
        this.text.text = v;
    }

    set action(v){
        this._action = v;
    }

    get action(){
        return this._action;
    }

    _focus() {
        this.patch({
            smooth: {color: 0xffffffff}
        });
    }

    _unfocus() {
        this.patch({
            smooth: {color: 0xffA8A6A2}
        });
    }
}