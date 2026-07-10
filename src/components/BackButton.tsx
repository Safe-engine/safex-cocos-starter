import { Button, ComponentX, Label, loadScene, Sprite, Widget } from '@safe-engine/sdl'

import { sf_button } from '../assets'
import { ORANGE } from '../helper/constant'
import Home from '../scene/Home'

export default class BackButton extends ComponentX {
  onPress() {
    loadScene(Home)
  }

  __view() {
    <Sprite node={{ x: 850, y: 240 }} spriteFrame={sf_button} >
      <Button onPress={this.onPress} />
      <Label node={{ x: 80, y: 30, color: ORANGE }} string="Back" size={48} />
      <Widget top={1} left={0} />
    </Sprite>
  }
}
