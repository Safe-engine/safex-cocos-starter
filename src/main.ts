import { Engine, Label, loadAll, loadScene } from '@safe-engine/sdl'

import { lilita_one_regularFont, sf_progress_bar, sf_progress_bg } from './assets'
import Loading from './scene/Loading'

(async () => {
  await Engine.start('Safex sdl demo', 1080, 1920)
  Label.defaultFont = lilita_one_regularFont
  await loadAll([sf_progress_bar, sf_progress_bg])
  loadScene(Loading)
})()
