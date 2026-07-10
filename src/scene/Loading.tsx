import { Label, loadScene, ProgressBar, Scene, Sprite } from '@safe-engine/sdl'

import { sf_progress_bar, sf_progress_bg } from '../assets'
import { loadAssets } from '../binding/loader'
import { CYAN } from '../helper/constant'
import Home from './Home'

export default class Loading extends Scene {
  loadingSprite: ProgressBar

  onEnter() {
    console.log('start')
    // this.loadingSprite.setValue(0.5)
    loadAssets(this.onProgress.bind(this), () => {
      console.log('loadScene Home')
      loadScene(Home)
    })
  }

  onProgress(p: Float) {
    console.log('onProgress', p)
    this.loadingSprite.setValue(p)
  }

  __view() {
    <Scene>
      <Label node={{ x: 406, y: 140, color: CYAN, width: 400 }} string="Loading" />;
      <Sprite node={{ x: 540, y: 250, width: 362, height: 59 }} spriteFrame={sf_progress_bg} >
        <Sprite spriteFrame={sf_progress_bar} >
          <ProgressBar $ref={this.loadingSprite} fillRange={0.5} />
        </Sprite>
      </Sprite>
    </Scene>
  }
}
