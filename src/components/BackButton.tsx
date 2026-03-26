import { ButtonComp, ComponentX, LabelComp, loadScene, WidgetComp } from '@safe-engine/webgl'

import { sf_button } from '../assets'
import { ORANGE } from '../helper/constant'
import Home from '../scene/Home'

export default class BackButton extends ComponentX {
  onPress() {
    loadScene(Home)
  }

  render() {
    <ButtonComp node={{ xy: [850, 240] }} spriteFrame={sf_button} onPress={this.onPress}>
      <LabelComp node={{ xy: [80, 30], color: ORANGE }} string="Back" size={48} />
      <WidgetComp top={1} left={0} />
    </ButtonComp>
  }
}
