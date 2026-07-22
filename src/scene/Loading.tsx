import { Label, loadScene, ProgressBar, Scene, Sprite } from '@safe-engine/sdl'

import { sf_progress_bar, sf_progress_bg } from '../assets'
import { loadAssets } from '../binding/loader'
import { CYAN } from '../helper/constant'
import Home from './Home'

export default class Loading extends Scene {
  loadingSprite: ProgressBar

  onEnter() {
    // this.loadingSprite.setValue(0.5)
    loadAssets(this.onProgress.bind(this), () => {
      loadScene(Home)
    })
  }

  onProgress(p: Float) {
    // console.log('onProgress', p)
    this.loadingSprite.setValue(p)
  }

  __view() {
    <Scene>
      <Label node={{ x: 539, y: 145, color: CYAN, width: 400 }} string="Loading" />
      <Sprite node={{ x: 540, y: 250, width: 362, height: 59 }} spriteFrame={sf_progress_bg}>
        <ProgressBar $ref={this.loadingSprite} fillRange={0.5} spriteFrame={sf_progress_bar} />
      </Sprite>
    </Scene>
  }
}
