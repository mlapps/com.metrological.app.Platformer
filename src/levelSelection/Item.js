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

export default class Level extends Lightning.Component{
    static _template(){
        return {
            alpha: .5,
            Image: {

            },
            Title: {
                y: 310, x: 20,
                text: {fontFace: "Magra", fontSize: 24}
            }
        }
    }

    _focus(){
        this.setSmooth("alpha", 1);
    }

    _unfocus(){
        this.setSmooth("alpha", .5);
    }

    set item(v){
        this.patch({
            Image: {
                src: Utils.asset(`assets/chapters/${v.thumbnail}`)
            },
            Title: {
                text: {text: v.title}
            }
        });
    }
}