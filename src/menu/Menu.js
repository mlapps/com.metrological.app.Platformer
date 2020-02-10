import { Lightning, Utils } from "wpe-lightning-sdk";
import Item from "./Item.js";

export default class Menu extends Lightning.Component{

    static _template(){
        return {
            Items:{

            },
            FocusIndicator:{
                // @todo: add carrot image
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
        // @todo: iterate over the v (array), and foreach element
        // https://webplatformforembedded.github.io/Lightning/docs/renderEngine/elements/children
        // a new child to the Items component
    }

    get items(){
        //@todo: return the children of the menu
    }

    get activeItem(){
        // @todo: return the active item of the menu (by index)
    }

    _handleUp(){
        // @todo: decrease index and call setIndex()
    }

    _handleDown(){
        // @todo: decrease index and call setIndex()
    }

    _setIndex(){
        // @todo: store index and do a transition of the
        // focusIndicator to the selected menu item
    }

    _getFocused(){
        // return activeItem
    }
}