import { Assets, loadScene, startGame, Texture } from '@safe-engine/pixi'

import { defaultFont, sf_progress_bar, sf_progress_bg } from './assets'
import Loading from './scene/Loading'
import { designedResolution } from './settings'

async function start() {
  await startGame(defaultFont, designedResolution, Assets)
  await Assets.load<Texture>([sf_progress_bar, sf_progress_bg])
  loadScene(Loading)
}
start()
