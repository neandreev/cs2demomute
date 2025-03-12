import { RefreshCcw, ArrowLeft, ArrowRight } from 'lucide-react'

import { ThemeProvider } from '@/themeProvider'
import PlayersInput from '@/components/PlayersInput'
import PlayersSelect from '@/components/PlayersSelect'
import Result from '@/components/Result'
import ModeToggle from '@/components/ModeToggle'
import { Button } from '@/components/ui/button'
import { AppState, useStore } from './store'
import i18next from 'i18next'

const componentByAppState = {
  [AppState.Input]: <PlayersInput />,
  [AppState.Select]: <PlayersSelect />,
  [AppState.Result]: <Result />
}

const App = (): JSX.Element => {
  const { appState, goToInputPage, goToPreviousPage, goToNextPage } = useStore()

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="font-inter h-screen flex items-center justify-center">
        <div className="flex flex-col justify-start gap-4">
          {componentByAppState[appState]}
          <div className="flex justify-between gap-2 w-full">
            <div className="flex gap-2">
              <ModeToggle />
              {appState !== AppState.Input ? (
                <Button variant="outline" className="w-fit" onClick={() => goToPreviousPage()}>
                  <ArrowLeft />
                  {i18next.t('back')}
                </Button>
              ) : null}
              {appState !== AppState.Input ? (
                <Button variant="outline" className="w-fit" onClick={() => goToInputPage()}>
                  <RefreshCcw />
                  {i18next.t('again')}
                </Button>
              ) : null}
            </div>
            {appState !== AppState.Result ? (
              <Button variant="outline" className="w-fit" onClick={() => goToNextPage()}>
                <ArrowRight />
                {i18next.t('next')}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
