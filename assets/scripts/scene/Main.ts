import { _decorator, Component } from 'cc';
import { initGM } from '../gm';
const { ccclass } = _decorator;

@ccclass('Main')
export class Main extends Component {
    start() {
        initGM({
            data: {
                defaults: {
                    currentLevel: 1,
                    unlockedLevel: 1,
                    bgm: true,
                    sfx: true,
                },
            },
            audio: {},
        });
    }
}
