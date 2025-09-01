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

import {Lightning} from "@lightningjs/sdk";
import ItemWrapper from "./ItemWrapper.js";
import Item from "./Item.js";

export default class List extends Lightning.Component{
    static _template(){
        return{
            Label:{
                text:{text:'', fontFace: 'Magra'}
            },
            Levels:{
                y: 75
            }
        }
    }

    _init(){
        this._index = 0;
    }

    _handleLeft(){
        if(this._index > 0){
            this.setIndex(this._index - 1);
        }
    }

    _handleRight(){
        if(this._index < this.items.length - 1){
            this.setIndex(this._index + 1);
        }
    }

    setIndex(index){
        this._index = index;
        this.tag("Levels").setSmooth("x", index * - 500)
    }

    set label(v){
        this.tag("Label").text.text = v;
    }

    set items(v){
        this.tag("Levels").children = v.map((el, idx)=>{
            return {
                type: ItemWrapper, construct: Item, item: el, x: idx * 500
            };
        });
    }

    get items(){
        return this.tag("Levels").children;
    }

    get activeItem(){
        return this.items[this._index];
    }

    _getFocused(){
        return this.activeItem;
    }

}