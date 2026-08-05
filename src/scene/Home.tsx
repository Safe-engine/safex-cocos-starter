import { Button, Label, loadScene, Scene } from '@safe-engine/sdl'

import { sf_button } from '../assets'
import { CYAN, ORANGE } from '../helper/colors'
import Game from './Game'

export default class Home extends Scene {
  onPress() {
    loadScene(Game)
  }

  __view() {
    <Scene>
      <Label node={{ x: 529, y: 176, color: CYAN }} string="Hello Safex" />
      <Button spriteFrame={sf_button} onPress={this.onPress} node={{ xy: [507, 609] }}>
        <Label node={{ color: ORANGE }} string="Game" size={48} />
      </Button>
    </Scene>
  }
}
