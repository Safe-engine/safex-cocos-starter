import { Button, Label, loadScene, Scene, Sprite } from '@safe-engine/sdl'

import { sf_button } from '../assets'
import { CYAN, ORANGE } from '../helper/constant'
import Game from './Game'

export default class Home extends Scene {
  onPress() {
    loadScene(Game)
  }

  __view() {
    <Scene>
    <Label node={{ x: 406, y: 140, color: CYAN }} string="hello safex" />
    <Sprite spriteFrame={sf_button} >
      <Button node={{ x: 200, y: 270 }} onPress={this.onPress}>
        <Label node={{ color: ORANGE }} string="Game" size={48} />
      </Button>
    </Sprite>
    </Scene>
  }
}
