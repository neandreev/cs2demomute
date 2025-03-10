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
  const {appState} = useStore()

  return componentByAppState[appState]
}

export default App
