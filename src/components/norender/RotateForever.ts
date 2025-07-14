import { NoRenderComponentX } from '@safe-engine/cocos'

export default class RotateForever extends NoRenderComponentX {
  update(dt: Float) {
    this.node.rotation += dt * 100
  }
}
