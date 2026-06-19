import { Label, Scene } from '@safe-engine/sdl';
import BackButton from '../components/BackButton';
import RotateForever from '../components/norender/RotateForever';

export default class Game extends Scene {
  __view() {
    <Label node={{ x: 540, y: 540 }} string="Game">
      <RotateForever />
    </Label>;
    <BackButton />
  }
}
