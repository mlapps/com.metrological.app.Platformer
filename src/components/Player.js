import Vector from "../lib/Vector";
import {Lightning, Utils} from "wpe-lightning-sdk";

export default class Player extends Lightning.Component {

    static _template() {
        return {
            Bunny: {
                y: 70, w: 75, h: 150, pivotY: .5,
                Legs: {
                    LegLeft: {
                        src: Utils.asset("bunny_sprite.png"),
                        texture: {x: 5, y: 89, w: 11, h: 29},
                        x: 15, y: 50
                    },
                    LegRight: {
                        src: Utils.asset("bunny_sprite.png"),
                        texture: {x: 5, y: 89, w: 11, h: 29},
                        x: 47, y: 50
                    }
                },
                Body: {
                    src: Utils.asset("bunny_sprite.png"),
                    texture: {w: 75, h: 67, x: 5, y: 5},
                    color: this.playerColor
                },
                Head: {
                    src: Utils.asset("bunny_sprite.png"),
                    texture: {x: 140, y: 5, w: 61, h: 74},
                    color: this.playerColor, mountY: .8, mountX: .5, x: 37, pivotY: .8, pivotX: .5, y: 30,
                    Ears: {
                        EarLeft: {
                            src: Utils.asset("bunny_sprite.png"),
                            texture: {x: 89, y: 5, w: 16, h: 55},
                            scaleX: -1, color: this.playerColor, mountY: .7, mountX: .5, pivotY: .8, pivotX: .5, x: 15,
                            EarInner: {
                                src: Utils.asset("bunny_sprite.png"),
                                texture: {x: 117, y: 25, w: 11, h: 41},
                                x: 2, y: 7
                            }
                        },
                        EarRight: {
                            src: Utils.asset("bunny_sprite.png"),
                            texture: {x: 89, y: 5, w: 16, h: 55},
                            color: this.playerColor, mountY: .7, mountX: .5, pivotY: .8, pivotX: .5, x: 47,
                            EarInner: {
                                src: Utils.asset("bunny_sprite.png"),
                                texture: {x: 117, y: 25, w: 11, h: 41},
                                x: 2, y: 7
                            }
                        }
                    },
                    Eye: {
                        EyeLeft: {
                            y: 15, w: 24, rtt: true, h: 24,
                            EyeOuter: {
                                src: Utils.asset("bunny_sprite.png"),
                                texture: {x: 89, y: 71, w: 24, h: 24},
                                color: this.playerColor
                            },
                            EyeInner: {
                                src: Utils.asset("bunny_sprite.png"),
                                texture: {x: 115, y: 5, w: 15, h: 15},
                                mount: .5, x: 12, y: 12,
                                Pupil: {
                                    src: Utils.asset("bunny_sprite.png"),
                                    texture: {x: 168, y: 89, w: 5, h: 5},
                                    mount: .5, x: 8, y: 8
                                },
                                Eyelid: {
                                    TopClipper: {
                                        clipping: true, w: 24, h: 0, x: -5, y: -5,
                                        Top: {
                                            src: Utils.asset("bunny_sprite.png"),
                                            texture: {x: 26, y: 89, w: 24, h: 12},
                                            color: this.playerColor
                                        }
                                    },
                                    BottomClipper: {
                                        clipping: true, w: 24, h: 0, x: -5, y: 7,
                                        Bottom: {
                                            src: Utils.asset("bunny_sprite.png"),
                                            texture: {x: 26, y: 89, w: 24, h: 12},
                                            color: this.playerColor, rotation: Math.PI, y: 12
                                        }
                                    }
                                }
                            }
                        },
                        EyeRight: {
                            y: 15, x: 25, rtt: true, w: 24, h: 24,
                            EyeOuter: {
                                src: Utils.asset("bunny_sprite.png"),
                                texture: {x: 89, y: 71, w: 24, h: 24},
                                color: this.playerColor
                            },
                            EyeInner: {
                                src: Utils.asset("bunny_sprite.png"),
                                texture: {x: 115, y: 5, w: 15, h: 15},
                                mount: .5, x: 12, y: 12,
                                Pupil: {
                                    src: Utils.asset("bunny_sprite.png"),
                                    texture: {x: 168, y: 89, w: 5, h: 5},
                                    mount: .5, x: 8, y: 8
                                },
                                Eyelid: {
                                    TopClipper: {
                                        clipping: true, w: 24, h: 0, x: -5, y: -5,
                                        Top: {
                                            src: Utils.asset("bunny_sprite.png"),
                                            texture: {x: 26, y: 89, w: 24, h: 12},
                                            color: this.playerColor
                                        }
                                    },
                                    BottomClipper: {
                                        clipping: true, w: 24, h: 0, x: -5, y: 7,
                                        Bottom: {
                                            src: Utils.asset("bunny_sprite.png"),
                                            texture: {x: 26, y: 89, w: 24, h: 12},
                                            color: this.playerColor, rotation: Math.PI, y: 12
                                        }
                                    }
                                }
                            }
                        }
                    },
                    Mouth: {
                        y: 44, x: 5,
                        Gap: {
                            rect: true, color: 0xff1A2933, w: 10, h: 10, mountX: .5, x: 17, y: 10,
                            texture: lng.Tools.getRoundRect(100, 100, 50, 0, 0x00ffffff, true, 0xffffffff),
                        },
                        Teeth: {
                            src: Utils.asset("bunny_sprite.png"),
                            texture: {x: 183, y: 89, w: 18, h: 15},
                            mountX: .5, x: 17, y: 5
                        },
                        Lips: {
                            src: Utils.asset("bunny_sprite.png"),
                            texture: {x: 123, y: 89, w: 34, h: 12}
                        },
                        Nose: {
                            src: Utils.asset("bunny_sprite.png"),
                            texture: {x: 60, y: 89, w: 11, h: 8},
                            mountX: .5, x: 17, y: -2
                        }
                    }
                }
            }
        };
    }

    static get playerColor() {
        return 0xffFFC42A;
    }

    _construct() {
        this._size = new Vector(0.9, 1);
    }

    _init() {
        this._pos = this._resetPos = this._pos.plus(new Vector(0, -0.5));

        this.speed = new Vector(0, 0);
    }

    // plus 0, -0.5
    set pos(v) {
        this._pos = v;
    }

    get pos() {
        return this._pos;
    }

    get size() {
        return this._size;
    }

    moveX(step, level, keys, distance) {
        let playerXSpeed = 7;
        this.speed.x = 0;
        if (keys.left) {
            this.speed.x -= playerXSpeed;
            this.tag("Bunny").scaleX = 1;
        }
        if (keys.right) {
            this.speed.x += playerXSpeed;
            this.tag("Bunny").scaleX = -1;
        }
        let motion = new Vector(this.speed.x * step, 0);
        let newPos = this.pos.plus(motion);
        let obstacle = level.obstacleAt(newPos, this.size);
        if (obstacle) {
            level.playerTouched(obstacle);
        } else {
            this.pos = newPos;
        }
        // @todo: remove magic number
        this.x = (this.pos.x - distance - 0.1) * 75;

    }

    moveY(step, level, keys, distance) {
        let gravity = 30;
        let jumpSpeed = 17;
        this.speed.y += step * gravity;
        let motion = new Vector(0, this.speed.y * step);
        let newPos = this.pos.plus(motion);
        let obstacle = level.obstacleAt(newPos, this.size);
        if (obstacle) {
            level.playerTouched(obstacle);
            if (keys.up && this.speed.y > 0) {
                this.speed.y -= jumpSpeed;
            } else {
                this.speed.y = 0;
            }
        } else {
            this.pos = newPos;
        }
        this.y = (this.pos.y - distance - 0.95) * 75;
    }

    act(step, level, keys, viewport) {

        this.moveX(step, level, keys, viewport.x);
        this.moveY(step, level, keys, viewport.y);

        let otherActor = level.actorAt(this);
        if (otherActor) {
            level.playerTouched(otherActor.atype, otherActor, this);
        }

     }

    alive() {
        this.pos = this._resetPos;
        this.speed.x = 0;
        this.speed.y = 0;
        this._setState("Idle");
    }

    died() {
        this._setState("Died");
    }

    win() {

    }

}