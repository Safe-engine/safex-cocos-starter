import { Button, ComponentX, Label, loadScene, Widget } from '@safe-engine/sdl'

import { sf_button } from '../assets'
import { ORANGE } from '../helper/constant'
import Home from '../scene/Home'

export default class BackButton extends ComponentX {
  onPress() {
    loadScene(Home)
  }

  __view() {
    <Button node={{ x: 850, y: 240 }} spriteFrame={sf_button} onPress={this.onPress}>
      <Label node={{ color: ORANGE }} string="Back" size={48} />
      <Widget top={1} left={0} />
    </Button>
  }
}
