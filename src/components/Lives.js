export default class Lives {
    constructor(pos) {
        this.pos = pos;
        this.size = new Vector(1, 1);
        this.type = "lives";
    }

    type() {
        return this.type;
    }

    act() {
    }
}