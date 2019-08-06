'use strict'

import Phaser from 'phaser'
import { LoginScene, TestScene } from './scenes.mjs';

//* the official config with all possible options is seen here: https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.GameConfig
//* configuration examples can be seen here: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/game/#configuration
let config = {
    type: Phaser.AUTO,
    title: "game title 123",
    version: '0.01',
    backgroundColor: "rgb(120,0,0)",
    autoFocus: false, //automatically call window.focus() when the game boots
    disableContextMenu: true,
    scene: [LoginScene, TestScene],
    input: {
        gamepad: false, //default is false
        smoothFactor: 0, //mouse smoothing
    },
    render: {
        antialias: true,
        pixelArt: false, //it says this sets antialias and roundPixels to 'true', is that it? could do that manually
        roundPixels: false,
        powerPreference: 'high-performance',
    },
    scale: {
        width: 1920,
        height: 1080,
        zoom: 1,
        parent: 'phaserParent',
        expandParent: true,
        mode: Phaser.Scale.FIT, //FIT, RESIZE, NONE, ENVELOP, HEIGHT_CONTROLS_WIDTH, WIDTH_CONTROLS_HEIGHT
        autoCenter: Phaser.Scale.CENTER_BOTH, //CENTER_BOTH, CENTER_HORIZONTALLY, CENTER_VERTICALLY, NO_CENTER
        resizeInterval: 500,
        autoRound: true, //supposedly keeping this on 'true' is a possible performance boost, it says so here: https://photonstorm.github.io/phaser3-docs/Phaser.Core.Config.html
    },
    physics: {
        default: 'arcade',
        arcade: {
            fps: 60, //60 is the phaser default. pretty high
            gravity: { x: 0, y: 0 },
            debug: true,
        }
    },
}

export const game = new Phaser.Game(config)