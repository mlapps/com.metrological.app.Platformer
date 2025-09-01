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

export default class About extends Lightning.Component {

    static _template(){
        return {
            Background: {
                rect: true, w: 1920, h: 1080, colorTop: 0xff38769f, colorBottom: 0xff363358
            },
            Content: {
                y: 340,
                Label:{
                    mountX: .5, x: 960, y: 80,
                    text:{text:'Super Bunny Jump', fontFace:'Magra', fontSize: 64}
                },
                Description:{
                    mountX: .5, x: 960, y:200, color: 0xaaffffff,
                    text:{
                        text:`This game has been build by Metrological to serve as training material and because we like bunnies. It's not that we love bunnies, but some how they keep on popping up in the games we make. We also really like dogs, but don't have any dogs in the office, there is one guy who kind a looks like a dog but that's it.\n\n v1.0.0`.trim(),
                        fontFace:'Roboto', fontSize:32, lineHeight:55, wordWrapWidth: 1080, textAlign: 'center'
                    }
                }
            }
        }
    }

    _active() {
        this.tag("Content").setSmooth("y", 280, {duration: .6});
    }

    _inactive() {
        this.tag("Content").setSmooth("y", 380, {duration: .3});
    }

}