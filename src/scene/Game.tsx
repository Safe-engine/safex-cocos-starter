import { ComponentX, LabelComp, SceneComponent, Vec2 } from '@safe-engine/pixi'

import { BackButton } from '../components/BackButton'
import RotateForever from '../components/norender/RotateForever'

export class Game extends ComponentX {
  render() {
    return (
      <SceneComponent>
        <LabelComp node={{ position: Vec2(540, 540) }} string="Game">
          <RotateForever />
        </LabelComp>
        <BackButton />
      </SceneComponent>
    )
  }
}
