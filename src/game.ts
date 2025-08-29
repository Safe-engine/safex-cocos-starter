import { loadScene, startGame } from '@safe-engine/cocos'

import { defaultFont } from './assets'
import { Loading } from './scene/Loading'
import { designedResolution } from './settings'

startGame(defaultFont, designedResolution).then(() => {
  loadScene(Loading)
})
