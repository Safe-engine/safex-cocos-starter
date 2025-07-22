import { loadAll, loadScene, startGame } from '@safe-engine/cocos'

import { defaultFont, sf_progress_bar } from './assets'
import { Loading } from './scene/Loading'
import { designedResolution } from './settings'

startGame(defaultFont, designedResolution).then(() => {
  loadAll([sf_progress_bar], (p) => {
    if (p >= 1) loadScene(Loading)
  })
})
