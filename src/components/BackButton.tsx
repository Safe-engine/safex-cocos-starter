import { ButtonComp, ComponentX, instantiate, LabelComp, SpriteRender } from '@safe-engine/pixi'

import { sf_button } from '../assets'
import { ORANGE } from '../helper/constant'
import Home from '../scene/Home'

export default class BackButton extends ComponentX {
  onPress() {
    instantiate(Home)
  }
  render() {
    return (
      <SpriteRender node={{ xy: [850, 240] }} spriteFrame={sf_button}>
        <LabelComp node={{ color: ORANGE }} string="Back" size={48} />
        <ButtonComp onPress={this.onPress}></ButtonComp>
      </SpriteRender>
    )
  }
}
