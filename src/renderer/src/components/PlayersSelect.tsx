import { useStore } from '@renderer/store'
import { Button } from './ui/button'

const PlayersSelect = (): JSX.Element => {
  const { players, goToResultPage, selectedValues, toggleSelectedValue } = useStore()

  return (
    <div className="flex flex-col gap-4">
      <p>Выберите игроков:</p>
      <div className="flex">
        <div className="grid grid-cols-2 w-l gap-2">
          {Object.entries(players).map(([playerName, playerValue]) => {
            const isButtonSelected = selectedValues.has(playerValue)

            return (
              <Button
                key={playerValue}
                variant={isButtonSelected ? 'default' : 'outline'}
                onClick={() => toggleSelectedValue(playerValue)}
                className="w-48"
              >
                <p className="truncate">{playerName}</p>
              </Button>
            )
          })}
        </div>
      </div>
      <div className="flex justify-end">
        <Button variant="outline" className="w-16" onClick={() => goToResultPage()}>
          Далее
        </Button>
      </div>
    </div>
  )
}

export default PlayersSelect
