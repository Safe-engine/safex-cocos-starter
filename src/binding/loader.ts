import { loadAll } from '@safe-engine/cocos'

import * as FontAssets from '../assets/FontAssets'
import * as TextureAssets from '../assets/TextureAssets'

export function loadAssets(cb: (progress: number) => void, onCompleted: () => void) {
  // load the texture we need
  const assets = [...Object.values(TextureAssets), ...Object.values(FontAssets)]
  loadAll(assets, cb, onCompleted)
}
