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

import List from "./List.js";

export default class LevelSelection extends Lightning.Component {

    static _template(){
        return {
            Background: {
                rect: true, w: 1920, h: 1080, color: 0xff000000
            },
            Lists:{
                x: 70, y: 70
            }
        }
    }

    async _init(){
        const response = await fetch(Utils.asset("levels.json"));
        const {categories} = await response.json();

        // create lists
        const children = categories.map((el, idx)=>{
            return {
                type: List, label: el.name, items: el.levels, y: idx*500
            }
        });

        // set current position
        this._index = 0;

        // add children
        this.tag("Lists").children = children;
    }

    _handleUp(){
        if(this._index > 0){
            this.setIndex(this._index - 1);
        }
    }

    _handleDown(){
        if(this._index < this.lists.length - 1){
            this.setIndex(this._index + 1);
        }
    }

    setIndex(index){
        this._index = index;
    }

    _getFocused(){
        return this.activeList;
    }

    get lists(){
        return this.tag("Lists").children;
    }

    get activeList(){
        return this.lists[this._index];
    }
}