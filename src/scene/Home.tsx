import { ButtonComp, ComponentX, ExtraDataComp, LabelComp, loadScene, SceneComponent, SpriteRender } from '@safe-engine/pixi'

import { sf_button } from '../assets'
import { CYAN, ORANGE } from '../helper/constant'
import { Game } from './Game'

export class Home extends ComponentX {
  onPress() {
    loadScene(Game)
  }

  render() {
    return (
      <SceneComponent>
        <LabelComp node={{ xy: [406, 140], color: CYAN }} string="hello safex" />
        <SpriteRender node={{ xy: [200, 120 + 150] }} spriteFrame={sf_button}>
          <ButtonComp onPress={this.onPress} />
          <LabelComp node={{ color: ORANGE }} string={'Game'} size={48} />
          <ExtraDataComp key="id" value={1} />
        </SpriteRender>
      </SceneComponent>
    )
  }
}
