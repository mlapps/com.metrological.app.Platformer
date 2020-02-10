import {Level, Assets, Player, Lives, CarrotsLeft} from "./components";
import {Lightning, Settings, Utils} from "wpe-lightning-sdk";
import levels from "./lib/gameLevels";


export default class Game extends Lightning.Component {
    static _template() {
        return {
            Background: {
                rect: true, w: 1920, h: 1080, colorTop: 0xff38769f, colorBottom: 0xff363358
            },
            Level: {},
            Player: {}
        };
    }

    _construct() {
        /**
         * Tilesize
         * @type {number}
         */
        this.levelScale = 75;

        /**
         * Our visible viewport
         * @type {{w: number, x: number, h: number, y: number}}
         */
        this.viewport = {
            x: 0,
            y: 0,
            w: 1920 / this.levelScale,
            h: 1080 / this.levelScale,
        };

        /**
         * Key state
         * @type {{left: boolean, right: boolean, up: boolean, down: boolean}}
         */
        this.keys = {
            left: false,
            right: false,
            up: false,
            down: false
        };

        this.updateListener = () => {
            this.loop();
        };

        this.lives = 10;
    }

    _init() {
        this.createNewRound();
    }

    _active() {
        this._setState("Playing");
    }

    createNewRound() {
        this._setState("Setup");
        // create and hold level reference
        const level = this.stage.c({
            type: Level, plan: levels[0/*~~(Math.random() * levels.length)*/], lives: 5, signals: {
                playerDied: true, playerFinished: true, carrotGrab: true
            }
        });

        // it's should not be neccesary for something like
        // a level controller to populate a position in the rendertree
        // but for now we do it to showcase Lightnings capabilities
        // and not having to use event emitters for communication
        this.tag("Level").children = [level];

        this.renderLevel(level, true);
        this.renderActors(level);

        // reset keys
        this.keys = {
            left: false,
            right: false,
            up: false,
            down: false
        };
    }

    renderLevel(level, override = false) {
        if (override) {
            this.level = level;
        }

        let children = [];
        let view = this.level.grid;
        let xStart = 0;
        let xEnd = view[0].length;
        let yStart = 0;
        let yEnd = view.length;

        for (let y = yStart; y < yEnd; y++) {
            for (let x = xStart; x < xEnd; x++) {
                const tile = this.level.grid[y][x];
                if (tile === null) {
                    continue;
                } else {
                    const construct = Assets.get(tile);
                    const screenX = x * this.levelScale;
                    const screenY = y * this.levelScale;
                    const w = construct.size.x * this.levelScale;
                    const h = construct.size.y * this.levelScale;

                    // create and hold reference
                    const child = this.stage.c({
                        type: construct, x: screenX, y: screenY, w, h
                    });

                    children.push(child);
                }
            }
        }

        this.level.fill("Assets", children);
    }

    renderActors(level) {
        const children = level.actors.map((actor) => {
            actor.x = actor.pos.x * this.levelScale;
            actor.y = actor.pos.y * this.levelScale;
            actor.w = this.levelScale;
            actor.h = this.levelScale;

            if (actor.constructor === Player) {
                actor.h = 75 * 1.5;
                this.player = actor;
                return false;
            }
            return actor;
        }).filter(Boolean);

        // add player to rendertree
        this.tag("Player").children = [this.player];

        // populate actores
        this.level.fill("Actors", children);
    }

    updateViewport() {
        let view = this.viewport;
        let xMargin = view.w / 3;
        let yMargin = view.h / 3;
        let player = this.player;
        let center = player.pos.plus(player.size.times(0.5));

        if (center.x < view.x + xMargin) {
            view.x = Math.max(center.x - xMargin, 0);
        } else if (center.x > view.x + view.w - xMargin) {
            view.x = Math.min(center.x + xMargin - view.w,
                this.level.width - view.w);
        }
        if (center.y < view.y + yMargin) {
            view.y = Math.max(center.y - yMargin, 0);
        } else if (center.y > view.y + view.h - yMargin) {
            view.y = Math.min(center.y + yMargin - view.h,
                this.level.height - view.h);
        }

        this.level.x = -this.viewport.x * this.levelScale;
        this.level.y = -this.viewport.y * this.levelScale;
    }

    static _states() {
        return [
            class Setup extends this {

            },
            class Playing extends this {
                $enter() {
                    this.stage.on("frameStart", this.updateListener);
                }

                $exit() {
                    this.stage.off("frameStart", this.updateListener);
                }

                /**
                 * @todo:
                 * Please inspect components/Player.js and inspect lines 43 / 47 / 73
                 * it's checks the properties left / right / up and down of the keys object.
                 *
                 * - add _handleUp() / _handleDown() / _handleUpRelease() methods
                 * - change object properties
                 */


            }
        ];
    }

    loop() {
        // update level
        this.level.step(this.stage.dt, this.viewport);

        /**
         * @todo:
         * - uncomment player.act() after previous todo is finished:
         */

        // this.player.act(this.stage.dt, this.level, this.keys, this.viewport);

        // update viewport
        this.updateViewport();
    }
}
