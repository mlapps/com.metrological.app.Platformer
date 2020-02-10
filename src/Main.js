import { Lightning } from "wpe-lightning-sdk";
import Menu from "./menu/Menu.js";

export default class Main extends Lightning.Component {

    static _template(){
        return {
            Menu:{
                x: 1510, y: 680,
                type: Menu, items:[
                    {label:'Start',action:'start'},
                    {label:'Level select',action:'levels'},
                    {label:'About',action:'about'},
                    {label:'Exit', action:'exit'}
                ]
            }
        }
    }

    /**
     * @todo:
     *  - implement _getFocused() and change focusPath to our Menu Item
     *  - implement _handleEnter() and signal an action
     */
}