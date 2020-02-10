import { Lightning, Utils } from "wpe-lightning-sdk";

export default class LevelSelection extends Lightning.Component {

    static _template(){
        return {
            Background: {
                rect: true, w: 1920, h: 1080, colorTop: 0xff000000, colorBottom: 0xff363358
            },
            Lists:{
                x: 150, y: 150
            }
        }
    }

    async _init(){
        const response = await fetch(Utils.asset("levels.json"));
        const {categories} = await response.json();

        // create lists
        const children = categories.map((el, idx)=>{
            return {
                type: List, label: el.name, items: el.levels, y: idx*400
            }
        });

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

class List extends Lightning.Component{
    static _template(){
        return{
            alpha:0.5,
            Label:{
                text:{text:'', fontFace: 'Magra'}
            },
            Levels:{
                y: 75
            }
        }
    }

    _focus(){
        this.setSmooth("alpha",1);
    }

    _unfocus(){
        this.setSmooth("alpha",0.5);
    }

    set label(v){
        this.tag("Label").text.text = v;
    }

    set items(v){
        this.tag("Levels").children = v.map((el, idx)=>{
            return {
                type: Level, x: idx * 320
            };
        });
    }
}

class Level extends Lightning.Component{
    static _template(){
        return {
            rect: true, w: 300, h: 150
        }
    }
}