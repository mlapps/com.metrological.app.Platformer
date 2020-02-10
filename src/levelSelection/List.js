import {Lightning} from "wpe-lightning-sdk";
import Item from "./Item.js";

export default class List extends Lightning.Component{
    static _template(){
        return{
            scale:0.7,
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

    _focus(){
        this.setSmooth("scale",1);
    }

    _unfocus(){
        this.setSmooth("scale",0.7);
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
        this.tag("Levels").setSmooth("x", index * - 320)
    }

    set label(v){
        this.tag("Label").text.text = v;
    }

    set items(v){
        this.tag("Levels").children = v.map((el, idx)=>{
            return {
                type: Item, image: el.thumbnail, x: idx * 320
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