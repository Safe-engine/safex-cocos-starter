import { loadAll } from '@safe-engine/pixi'

import * as allAssets from '../assets'

export async function loadAssets(cb: (progress: number) => void, onCompleted: () => void) {
  await loadAll(allAssets, cb)
  onCompleted()
}
