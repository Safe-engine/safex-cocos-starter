import { ButtonComp, ExtraDataComp, LabelComp, loadScene, SceneComponent } from '@safe-engine/cocos'

import { sf_button } from '../assets'
import { CYAN, ORANGE } from '../helper/constant'
import Game from './Game'

export default class Home extends SceneComponent {
  onPress() {
    loadScene(Game)
  }

  render() {
    return (
      <SceneComponent>
        <LabelComp node={{ xy: [406, 140], color: CYAN }} string="hello safex" />
        <ButtonComp node={{ xy: [200, 120 + 150] }} spriteFrame={sf_button} onPress={this.onPress}>
          <LabelComp node={{ xy: [80, 30], color: ORANGE }} string={'Game'} size={48} />
          <ExtraDataComp key="id" value={1} />
        </ButtonComp>
      </SceneComponent>
    )
  }
}
