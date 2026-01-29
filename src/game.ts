import { loadScene, startGame } from '@safe-engine/cocos'

import { lilita_one_regularFont } from './assets'
import Loading from './scene/Loading'
import { designedResolution } from './settings'

startGame(lilita_one_regularFont, designedResolution).then(() => {
  loadScene(Loading)
})
