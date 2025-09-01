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

import { Lightning, Utils } from "@lightningjs/sdk";

export default class Splash extends Lightning.Component {

    static _template(){
        return {
            Background: {
                rect: true, w: 1920, h: 1080, colorTop: 0xff38769f, colorBottom: 0xff363358
            },
            Logo: {
                mount: .5, x: 960, y: 540, alpha: 0,
                transitions: {alpha: {duration: 1}, scale: {duration: 1}},
                src: Utils.asset("logo.png")
            },
            Carrot: {
                mount: 1, x: 1840, y: 1000,
                src: Utils.asset("assets/carrot.png")
            }
        }
    }

    _init(){
        this._pulse = this.animation({
            duration: 1, repeat: 3, actions:[
                {t: 'Carrot', p:'rotation', v:{0: 0, 1: Math.PI * 2}}
            ]
        });
        this._pulse.start();

        this._pulse.on("finish",()=>{
            this.signal("loaded");
        });
    }

    _active() {
        this.patch({
            Logo: {
                smooth: {alpha: 1, scale: 1.2}
            }
        });
    }
}