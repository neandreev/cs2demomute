import { SquareArrowLeft } from 'lucide-react'

import PlayersInput from './components/PlayersInput'
import PlayersSelect from './components/PlayersSelect'
import Result from './components/Result'
import { Button } from './components/ui/button'
import { AppState, useStore } from './store'
import i18next from 'i18next'

const componentByAppState = {
  [AppState.Input]: <PlayersInput />,
  [AppState.Select]: <PlayersSelect />,
  [AppState.Result]: <Result />
}

function App(): JSX.Element {
  const { appState, goToInputPage } = useStore()

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col justify-start gap-4">
        {appState !== AppState.Input ? (
          <Button variant="outline" className="w-fit" onClick={() => goToInputPage()}>
            <SquareArrowLeft />
            {i18next.t('again')}
          </Button>
        ) : null}
        <div className="rounded-xl bg-muted/50 p-4 flex items-center justify-center">
          {componentByAppState[appState]}
        </div>
      </div>
    </div>
  )
}

export default App
