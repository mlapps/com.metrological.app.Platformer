import { Lightning } from "wpe-lightning-sdk";

export default class About extends Lightning.Component {

    static _template(){
        return {
            Background: {
                rect: true, w: 1920, h: 1080, colorTop: 0xff38769f, colorBottom: 0xff363358
            },
            Content: {
                /**
                 * @todo:
                 *  - add Title component
                 *  - Add Description component
                 *  - Align text
                 *  - Try out wordWrapWidth
                 *  - Try maxLines
                 *  - etc.
                 */
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