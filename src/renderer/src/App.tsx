import PlayersInput from './components/PlayersInput'
import PlayersSelect from './components/PlayersSelect'
import Result from './components/Result'
import { AppState, useStore } from './store'

const componentByAppState = {
  [AppState.Input]: <PlayersInput />,
  [AppState.Select]: <PlayersSelect />,
  [AppState.Result]: <Result />
}

function App(): JSX.Element {
  const { appState } = useStore()

  return (
    <div className="h-screen flex items-center justify-center w-2xl">
      <div className="rounded-xl bg-muted/50 p-4 flex items-center justify-center">{componentByAppState[appState]}</div>
    </div>
  )
}

export default App
