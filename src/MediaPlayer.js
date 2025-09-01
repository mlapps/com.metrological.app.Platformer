/*
 * Copyright 2020 Metrological
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {Lightning, MediaPlayer, Utils} from "@lightningjs/sdk";

export default class Player extends Lightning.Component {
    static _template() {
        return {
            MediaPlayer: {
                type: MediaPlayer
            },
            Overlay:{
                w:1920, rect:true, h:300, mountY:1, y:1080, colorTop:0x00000000, colorBottom: 0xff000000
            },
            Controls:{ alpha: 0, x:100, y:1000,
                PlayPause:{
                    src: Utils.asset("mediaplayer/play.png")
                },
                Skip:{ x: 50,
                    src: Utils.asset("mediaplayer/skip.png")
                },
                Current:{
                    type: Current, x: 150, y:7
                }
            }
        };
    }

    _init() {
        /**
         * We tell the mediaplayer which Component is consuming the events
         */
        this.tag("MediaPlayer").updateSettings({
            consumer: this
        });
    }

    _focus(){
        this.tag("Controls").alpha = 1;
    }

    _unfocus(){
        this.tag("Controls").alpha = 0;
    }

    play(src, loop) {
        this.tag("MediaPlayer").open(src);
        this.tag("MediaPlayer").videoEl.loop = loop;
    }

    stop() {
        this.tag("MediaPlayer").close();
    }

    /**
     * This will be automatically called on video end
     * @param currentTime
     * @param duration
     */
    $mediaplayerEnded() {
        this.signal("videoEnded");
        // clear source
        this.tag("MediaPlayer").close();
    }

    _handleEnter(){
        this.tag("MediaPlayer").doPause();
    }

    $mediaplayerPause() {
        this._setState("Paused")
    }

    /**
     * This will be automatically called on video end
     * @param currentTime
     * @param duration
     */
    $mediaplayerPlay() {
        this._setState("Playing");
    }

    static _states(){
        return [
            class Loading extends this{

            },
            class Playing extends this{
                $enter(){
                    this.tag("PlayPause").src = Utils.asset("mediaplayer/pause.png");
                }
                /**
                 * This will be automatically called on timeupdate
                 * @param currentTime
                 * @param duration
                 */
                $mediaplayerProgress({currentTime, duration}) {
                    this.tag("Current").setProgress(currentTime, duration);
                }
            },
            class Paused extends this{
                $enter(){
                    this.tag("PlayPause").src = Utils.asset("mediaplayer/play.png");
                }
                _handleEnter(){
                    this.tag("MediaPlayer").doPlay();
                }
            }
        ]
    }
}

class Current extends Lightning.Component{
    static _template(){
        return{
            Bar:{
                rect: true, color:0x20ffffff, h:10, w:1500
            },
            Duration:{
                rect: true, color:0xffffffff, h:10,
            }
        }
    }

    setProgress(currentTime, duration) {
        this._currentTime = currentTime;
        this._duration = duration;

        const p = currentTime / Math.max(duration, 1);
        this.tag("Duration").setSmooth("w", p*1500 ,{timingFunction:'linear'});
    }
}