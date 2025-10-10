import { loadAll } from '@safe-engine/cocos'

import * as FontAssets from '../assets/FontAssets'
import * as TextureAssets from '../assets/TextureAssets'

export async function loadAssets(cb: (progress: number) => void, onCompleted: () => void) {
  // load the texture we need
  const assets = [...Object.values(TextureAssets), ...Object.values(FontAssets)]
  await loadAll(assets, cb)
  onCompleted()
}
