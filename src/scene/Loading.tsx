import { Label, loadScene, ProgressBar, Scene, Sprite } from '@safe-engine/sdl'

import { sf_progress_bar, sf_progress_bg } from '../assets'
import { loadAssets } from '../binding/loader'
import { CYAN } from '../helper/constant'
import Home from './Home'

export default class Loading extends Scene {
  loadingSprite: ProgressBar

  start() {
    loadAssets(this.onProgress.bind(this), () => {
      loadScene(Home)
    })
  }

  onProgress(p: Float) {
    console.log('onProgress', p)
    this.loadingSprite.value = p
  }

  __view() {
    <Label node={{ x: 406, y: 140, color: CYAN }} string="Loading" />;
    <Sprite node={{ x: 540, y: 250, opacity: 100 }} spriteFrame={sf_progress_bg}>
      <ProgressBar $ref={this.loadingSprite} node={{ x: 181, y: 30 }} spriteFrame={sf_progress_bar} fillRange={0} />
    </Sprite>
  }
}
