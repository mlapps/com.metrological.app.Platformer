import { Lightning } from "wpe-lightning-sdk";
import Menu from "./menu/Menu.js";

export default class Main extends Lightning.Component {

    static _template(){
        return {
            Logo:{

            },
            Menu:{
                x: 1510, y: 610,
                type: Menu, items:[
                    {label:'Start',action:'start'},
                    {label:'Continue',action:'continue'},
                    {label:'Level select',action:'levels'},
                    {label:'About',action:'about'},
                    {label:'Exit', action:'exit'}
                ]
            }
        }
    }

    _getFocused(){
        return this.tag("Menu");
    }

    _handleEnter(){
        this.signal("select", {item: this.tag("Menu").activeItem});
    }
}