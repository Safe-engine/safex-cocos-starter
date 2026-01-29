import { ButtonComp, ComponentX, instantiate, LabelComp } from '@safe-engine/cocos'

import { sf_button } from '../assets'
import { ORANGE } from '../helper/constant'
import Home from '../scene/Home'

export default class BackButton extends ComponentX {
  onPress() {
    instantiate(Home)
  }
  render() {
    return (
      <ButtonComp node={{ xy: [850, 240] }} spriteFrame={sf_button} onPress={this.onPress}>
        <LabelComp node={{ xy: [80, 30], color: ORANGE }} string="Back" size={48} />
      </ButtonComp>
    )
  }
}
