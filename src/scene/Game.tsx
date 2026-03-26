import { LabelComp, SceneComponent } from '@safe-engine/webgl'
import BackButton from '../components/BackButton'
import RotateForever from '../components/norender/RotateForever'

export default class Game extends SceneComponent {
  render() {
    <SceneComponent>
      <LabelComp node={{ xy: [540, 540] }} string="Game">
        <RotateForever />
      </LabelComp>
      <BackButton />
    </SceneComponent>
  }
}
