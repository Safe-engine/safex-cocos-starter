import { loadAll, loadScene, startGame } from '@safe-engine/cocos'

import { lilita_one_regularFont, sf_progress_bar, sf_progress_bg } from './assets'
import Loading from './scene/Loading'
import { designedResolution } from './settings'

startGame(lilita_one_regularFont, designedResolution).then(async () => {
  await loadAll([sf_progress_bar, sf_progress_bg])
  loadScene(Loading)
})
