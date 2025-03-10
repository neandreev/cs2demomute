import { useStore } from "@renderer/store";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function PlayersSelect() {
  const {players, goToResultPage, selectedValues, toggleSelectedValue} = useStore()

  return <div className="flex">
    <div className="flex">
    {Object.entries(players).map(([playerName, playerValue]) => {
      console.log('playerValue', playerValue)
      console.log('playerName', playerName)
      const isButtonSelected = selectedValues.has(playerValue)

      console.log('isButtonSelected', isButtonSelected)

      return (
        <Button
          key={playerValue}
          variant={isButtonSelected ? 'secondary' : 'default'}
          onClick={() => toggleSelectedValue(playerValue)}
        >
          {playerName}
        </Button>
      )
    })}
    </div>
    <button
      className="w-16"
      onClick={() => goToResultPage()}
    >
      Результат
    </button>
  </div>
}
