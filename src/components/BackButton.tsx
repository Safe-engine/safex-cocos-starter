import { ButtonComp, ComponentX, instantiate, LabelComp, SpriteRender } from '@safe-engine/cocos'

import { sf_button } from '../assets'
import { ORANGE } from '../helper/constant'
import { Home } from '../scene/Home'

export class BackButton extends ComponentX {
  onPress() {
    instantiate(Home)
  }
  render() {
    return (
      <SpriteRender node={{ xy: [850, 240] }} spriteFrame={sf_button}>
        <LabelComp node={{ xy: [80, 30], color: ORANGE }} string="Back" size={48} />
        <ButtonComp onPress={this.onPress}></ButtonComp>
      </SpriteRender>
    )
  }
}
