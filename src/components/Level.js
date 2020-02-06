import {Lightning} from "wpe-lightning-sdk";
import {Player, Carrot, Lava} from './';
import Vector from "../lib/Vector";

export default class Level extends Lightning.Component {

    static _template() {
        return {
            Image: {},
            Assets: {},
            Actors: {}
        };
    }

    set plan(v) {
        this._plan = v;
    }

    set lives(v) {
        this._lives = v;
    }

    get actorCharacters() {
        return {
            "@": Player,
            "c": Carrot,
            "=": Lava,
            "|": Lava,
            "v": Lava
        };
    }

    _setup() {
        this.width = this._plan[0].length;
        this.height = this._plan.length;
        this.grid = [];
        this.actors = [];
    }

    _init() {
        for (let y = 0; y < this.height; y++) {
            let line = this._plan[y], gridLine = [];
            for (let x = 0; x < this.width; x++) {
                let ch = line[x], fieldType = null;
                let Actor = this.actorCharacters[ch];
                if (Actor) {
                    const a = this.stage.c({
                        type: Actor, pos: new Vector(x, y), ch
                    });
                    this.actors.push(a);
                } else if (ch == "x") {
                    fieldType = "wall";
                } else if (ch == "!") {
                    fieldType = "lava";
                }
                gridLine.push(fieldType);
            }
            this.grid.push(gridLine);
        }
    }

    obstacleAt(pos, size) {
        let xStart = Math.floor(pos.x);
        let xEnd = Math.ceil(pos.x + size.x);
        let yStart = Math.floor(pos.y);
        let yEnd = Math.ceil(pos.y + size.y);

        if (xStart < 0 || xEnd > this.width || yStart < 0) {
            return "wall";
        } else if (yEnd > this.height) {
            return "lava";
        }
        for (let y = yStart; y < yEnd; y++) {
            for (let x = xStart; x < xEnd; x++) {
                let fieldType = this.grid[y][x];
                if (fieldType) {
                    return fieldType;
                }
            }
        }
    }

    actorAt(actor) {
        for (let i = 0; i < this.actors.length; i++) {
            let other = this.actors[i];
            if (other !== actor &&
                actor.pos.x + actor._size.x > other.pos.x &&
                actor.pos.x < other.pos.x + other._size.x &&
                actor.pos.y + actor._size.y > other.pos.y &&
                actor.pos.y < other.pos.y + other._size.y) {
                return other;
            }
        }
    }

    playerTouched(type, actor, player) {
        if (type === "lava") {
            this.signal("playerDied");
        } else if (type === "carrot") {
            actor.onTouch(player);
            this.actors = this.actors.filter((other) => {
                return other !== actor;
            });
            if (!this.actors.some((actor) => {
                return actor.atype === "carrot";
            })) {
                this.signal("playerFinished");
            }
        }
    }

    fill(ref, children) {
        this.tag(ref).children = children;
    }

    step(dt, viewport) {
        const actors = this.tag("Actors").children;
        let n = actors.length;
        while (n--) {
            actors[n].act(dt, viewport);
        }
    }

}