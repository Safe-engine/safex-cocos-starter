import { initWorld, loadScene, startGame } from '@safe-engine/cocos'

import { defaultFont } from './assets'
import { Loading } from './scene/Loading'
import { designedResolution } from './settings'

startGame(
  {
    debugMode: 1,
    showFPS: false,
    frameRate: 60,
    id: 'gameCanvas',
    renderMode: 1,
  },
  designedResolution,
  () => {
    initWorld(defaultFont)
    loadScene(Loading)
  },
)
