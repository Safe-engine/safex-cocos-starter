import { ComponentX, LabelComp, loadScene, ProgressTimerComp, SceneComponent, SpriteRender } from '@safe-engine/cocos'

import { sf_progress_bar, sf_progress_bg } from '../assets'
import { loadAssets } from '../binding/loader'
import { CYAN } from '../helper/constant'
import { Home } from './Home'

export class Loading extends ComponentX {
  loadingSprite: ProgressTimerComp

  start() {
    loadAssets(this.onProgress.bind(this), () => {
      loadScene(Home)
    })
  }

  onProgress(p: Float) {
    // console.log('onProgress', p)
    this.loadingSprite.fillRange = p
  }

  render() {
    return (
      <SceneComponent>
        <LabelComp node={{ xy: [406, 140], color: CYAN }} string="Loading" />
        <SpriteRender node={{ xy: [540, 250], opacity: 100 }} spriteFrame={sf_progress_bg}>
          <ProgressTimerComp $ref={this.loadingSprite} node={{ xy: [181, 30] }} spriteFrame={sf_progress_bar} fillRange={0} />
        </SpriteRender>
      </SceneComponent>
    )
  }
}
