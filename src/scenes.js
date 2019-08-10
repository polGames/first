'use strict'

import Phaser from 'phaser'

export class Scene extends Phaser.Scene {
    constructor(config) {
        super(config)
        this.sceneKey = config.key
    }
}

//* this would be a persistant scene that is always running parallel to any other scene loaded. for persistant objects and perhaps UI (idk) but you get the idea its just important to know this is possible (or so ive heard it be hinted at)
export class GlobalScene extends Scene {

}

export class LoginScene extends Scene {
    constructor() {
        let config = {
            key: 'LoginScene'
        }
        super(config)
    }

    init() {
    }

    preload() {
        this.load.image('img1', 'assets/test.png')
    }

    create() {
        let img1 = this.add.sprite(50, 50, 'img1')
        this.img1 = img1
    }

    update(time, dt) {
        this.img1.x += 0.01 * dt * 1.7
        this.img1.y += 0.01 * dt
    }

    shutdown() {
        console.log('shutdown')
    }

    destroy() {
        console.log('destroy')
    }
}

export class TestScene extends Scene {
    constructor() {
        let config = {
            key: 'TestScene'
        }
        super(config)
    }
}