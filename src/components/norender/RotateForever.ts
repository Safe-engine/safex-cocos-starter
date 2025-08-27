import { ComponentX } from '@safe-engine/cocos'

export default class RotateForever extends ComponentX {
  update(dt: Float) {
    this.node.rotation += dt * 100
  }
}
