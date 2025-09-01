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
import Item from "./Item.js";

export default class Menu extends Lightning.Component{

    static _template(){
        return {
            Items:{
                x: 80
            },
            FocusIndicator:{
                y: 10,
                src: Utils.asset("assets/carrot.png"),
            }
        }
    }

    _init(){
        // create animation
        this._blink = this.tag("FocusIndicator").animation({
            duration:0.5, repeat:-1, actions:[
                {p:'x', v:{0:0, 0.5:-40,1:0}}
            ]
        });

        // start the animation
        this._blink.start();

        // current focused menu index
        this._index = 0;


    }

    set items(v){
        // create children by handing over an array of
        // object to the objectList
        this.tag("Items").children = v.map((el, idx)=>{
            return {type: Item, action: el.action, label: el.label, y: idx*80}
        })
    }

    get items(){
        return this.tag("Items").children;
    }

    get activeItem(){
        return this.items[this._index];
    }


    _handleUp(){
        this._setIndex(Math.max(0, --this._index));
    }

    _handleDown(){
        this._setIndex(Math.min(++this._index, this.items.length - 1));
    }

    _setIndex(idx){
        // since it's a one time transition we use smooth
        this.tag("FocusIndicator").setSmooth("y", idx*80 + 10);

        // store new index
        this._index = idx;
    }

    _getFocused(){
        return this.activeItem;
    }
}