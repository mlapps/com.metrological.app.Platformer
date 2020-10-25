import { Utils} from "@lightningjs/sdk";
import {Floor} from "./";

export default class FloorLeft extends Floor {
    _init() {
        this.src = Utils.asset(`assets/level/floor-left-1.png`);
    }
}
