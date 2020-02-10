import { Lightning } from "wpe-lightning-sdk";

export default class About extends Lightning.Component {

    static _template(){
        return {
            Wrapper:{
                w: 500, h: 1080,
                rect: true, color: 0xbb000000,
                Label:{
                    x: 50, y:100,
                    text:{text:'Bunny Jump', fontFace:'Magra', fontSize:50}
                },
                Description:{
                    x: 50, y:180, color: 0xaaffffff,
                    text:{
                        text:`This game has been build by Metrological to serve as training material and because we like bunnies. It's not that we love bunnies, but some how they keep on popping up in the games we make. We also really like dogs, but don't have any dogs in the office, there is one guy who kind a looks like a dog but that's it.\n v1.0.0`.trim(),
                        fontFace:'Magra', fontSize:30,  lineHeight:55, wordWrapWidth: 400
                    }
                }
            }
        }
    }

    _disable() {

    }

}