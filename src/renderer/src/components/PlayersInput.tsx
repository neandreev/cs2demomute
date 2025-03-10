import { useStore } from '@renderer/store'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const placeholder = `Player#     Player Name
  -------     ----------------
    3         donk666
    4         MaSvAl
    5         Koriw
    6         -FpSSSSSSSSS
    7         tENZY
    8         Aliot
    9         Sp4rkesss
    10         NoBless
    11         NAPAD
    12         EATyourEGO
  -------     ----------------`

const PlayersInput = (): JSX.Element => {
  const { stringToParse, setStringToParse, goToSelectPage } = useStore()

  return (
    <div className="flex flex-col gap-4">
      <p>Результат выполнения команды &apos;voice_show_mute&apos;:</p>
      <div className="flex gap-4">
        <Textarea
          placeholder={placeholder}
          className="resize-none min-h-84"
          value={stringToParse}
          onChange={(e) => setStringToParse(e.currentTarget.value)}
        />
      </div>
      <div className="flex justify-end">
        <Button variant="outline" className="w-16" onClick={() => goToSelectPage()}>
          Далее
        </Button>
      </div>
    </div>
  )
}

export default PlayersInput
