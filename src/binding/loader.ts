import { Assets, Texture } from '@safe-engine/pixi'

import * as FontAssets from '../assets/FontAssets'
import * as TextureAssets from '../assets/TextureAssets'

export function loadAssets(cb: (progress: number) => void) {
  const fontBundle = {}
  Object.keys(FontAssets).forEach((key) => {
    const val = FontAssets[key]
    fontBundle[val] = val
  })
  Assets.addBundle('fonts', fontBundle)
  return Promise.all([Assets.loadBundle('fonts')]).then(() => {
    return Assets.load<Texture>(Object.values(TextureAssets), cb)
  })
}
