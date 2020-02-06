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
                    color: this.playerColor,
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
        return 0xff19AAA7;
    }

    _construct() {
        this._size = new Vector(0.9, 1);
    }

    _init() {
        this._pos = this._resetPos = this._pos.plus(new Vector(0, -0.5));

        this.speed = new Vector(0, 0);

        this.createAnimations();

        this._isWalking = false;
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
        }
        if (keys.right) {
            this.speed.x += playerXSpeed;
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
        this.x = (this.pos.x - distance) * 75;

    }

    moveY(step, level, keys) {
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

        // @todo: remove magic number
        this.y = (this.pos.y - 0.85) * 75;
    }

    act(step, level, keys, viewport) {
        this.moveX(step, level, keys, viewport.x);
        this.moveY(step, level, keys);

        let otherActor = level.actorAt(this);
        if (otherActor) {
            level.playerTouched(otherActor.atype, otherActor, this);
        }
        // Losing animation
        if (level.status === "lost") {
            this.pos.y += step;
            this.size.y -= step;
        }

        if (keys.left || keys.right || keys.up) {
            if (!this._isWalking) {
                console.log("start");
                this._isWalking = true;
                this._walkAnimation.start();

            }
        } else {
            if (this._isWalking) {
                console.log("stop");
                this._walkAnimation.stop();
                this._isWalking = false;
            }
        }
    }

    die() {
        this.pos = this._resetPos;
    }

    win() {

    }

    static _states(){
        return [
            class Jump extends this{

            },
            class RunLeft extends this{

            },
            class RunRight extends this{

            },
            class Idle extends this{

            },
            class Die extends this{

            }
        ]
    }

    createAnimations(){
        this._idleAnimation = this.animation({
            duration: 1, repeat: -1, actions: [
                {t: 'Head', p: 'y', v: {0: {v: 30}, .5: {v: 34}, 1: {v: 30}}},
                {t: 'Body', p: 'y', v: {0: {v: 0}, .5: {v: 2}, 1: {v: 0}}},
                {t: 'EarLeft', p: 'rotation', v: {0: {v: 0}, .5: {v: Math.PI * -.1}, 1: {v: 0}}},
                {t: 'EarRight', p: 'rotation', v: {0: {v: 0}, .5: {v: Math.PI * .1}, 1: {v: 0}}}
            ]
        });

        this._walkAnimation = this.animation({
            duration: .4, repeat: -1, actions: [
                {t: 'Head', p: 'y', v: {0: {v: 30}, .5: {v: 34}, 1: {v: 30}}},
                {t: 'Head', p: 'rotation', v: {0: {v: Math.PI * .1}, .5: {v: Math.PI * .15}, 1: {v: Math.PI * .1}}},
                {t: 'Body', p: 'y', v: {0: {v: 0}, .5: {v: 5}, 1: {v: 0}}},
                {t: 'Body', p: 'rotation', v: {0: {v: 0}, .5: {v: Math.PI * .05}, 1: {v: 0}}},
                {t: 'EarLeft', p: 'rotation', v: {0: {v: Math.PI * .1}, .5: {v: Math.PI * .2}, 1: {v: Math.PI * .1}}},
                {t: 'EarRight', p: 'rotation', v: {0: {v: Math.PI * .3}, .5: {v: Math.PI * .4}, 1: {v: Math.PI * .3}}},
                {t: 'Mouth', p: 'x', v: {0: {v: 5}, .5: {v: 3}, 1: {v: 5}}},
                {t: 'Gap', p: 'w', v: {0: {v: 10}, .5: {v: 20}, 1: {v: 10}}},
                {t: 'Gap', p: 'h', v: {0: {v: 10}, .5: {v: 20}, 1: {v: 10}}}
            ]
        });

        this._blinkLeftAnimation = this.tag("EyeLeft").animation({
            duration: .4, delay: 1, repeat: -1, actions: [
                {t: 'TopClipper', p: 'h', v: {0: {v: 0}, .5: {v: 12}, 1: {v: 0}}},
                {t: 'BottomClipper', p: 'h', v: {0: {v: 0}, .5: {v: 12}, 1: {v: 0}}},
                {t: 'Bottom', p: 'y', v: {0: {v: 12}, .5: {v: 0}, 1: {v: 12}}}
            ]
        });

        this._blinkRightAnimation = this.tag("EyeRight").animation({
            duration: .6, delay: 1.2, repeat: -1, actions: [
                {t: 'TopClipper', p: 'h', v: {0: {v: 0}, .5: {v: 12}, 1: {v: 0}}},
                {t: 'BottomClipper', p: 'h', v: {0: {v: 0}, .5: {v: 12}, 1: {v: 0}}},
                {t: 'Bottom', p: 'y', v: {0: {v: 12}, .5: {v: 0}, 1: {v: 12}}}
            ]
        });


        this._dieAnimation = this.animation({
            duration: 3, repeat: -1, actions: [
                {t: 'Bunny', p: 'rotation', v: {0: {v: 0}, .2: {v: Math.PI * .5}}},
                {t: 'EarLeft', p: 'rotation', v: {0: {v: 0}, .2: {v: Math.PI * -.4}}},
                {t: 'EarRight', p: 'rotation', v: {0: {v: 0}, .2: {v: Math.PI * .1}}},
                {t: 'Pupil', p: 'alpha', v: {0: {v: 1}, .2: {v: 0}}},
                {t: 'LegLeft', p: 'rotation', v: {0: {v: 0}, .2: {v: Math.PI * .4}}},
                {t: 'LegRight', p: 'rotation', v: {0: {v: 0}, .2: {v: Math.PI * -.4}}}
            ]
        });
    }
}