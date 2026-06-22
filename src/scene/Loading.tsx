import { Label, ProgressBar, Scene, Sprite } from '@safe-engine/sdl'

import { sf_progress_bar, sf_progress_bg } from '../assets'
import { loadAssets } from '../binding/loader'
import { CYAN, WHITE } from '../helper/constant'

export default class Loading extends Scene {
  loadingSprite: ProgressBar

  onEnter() {
    console.log('start')
    this.loadingSprite.setSize(325, 20)
    this.loadingSprite.fillColor = WHITE
    this.loadingSprite.backgroundColor = { r: 0, g: 0, b: 0, a: 0 }
    // this.loadingSprite.setValue(0.5)
    loadAssets(this.onProgress.bind(this), () => {
      console.log('loadScene Home')
      // loadScene(Home)
    })
  }

  onProgress(p: Float) {
    console.log('onProgress', p)
    // this.loadingSprite.setValue(p)
  }

  __view() {
    <Label node={{ x: 406, y: 140, color: CYAN, width: 400 }} string="Loading" />;
    <Sprite node={{ x: 540, y: 250, width: 362, height: 59 }} spriteFrame={sf_progress_bg} >
      <ProgressBar $ref={this.loadingSprite} spriteFrame={sf_progress_bar}  fillRange={0.5}/>
    </Sprite>
  }
}
