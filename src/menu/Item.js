import { Lightning } from "wpe-lightning-sdk";

export default class Item extends Lightning.Component{

    static _template(){
        return {
            color: 0xffA8A6A2,
            text:{
                text:''
                // @todo: add correct fontSize and fontFace
                // https://webplatformforembedded.github.io/Lightning/docs/textures/text
            }
        }
    }

    set label(v){
        // @todo: update the text
    }

    set action(v){
        this._action = v;
    }

    get action(){
        return this._action;
    }

    _focus() {
        // @todo: change the text color
    }

    _unfocus() {
        // @todo: change the text color
    }
}