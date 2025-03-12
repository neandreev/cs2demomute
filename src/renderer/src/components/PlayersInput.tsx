import i18next from 'i18next'

import { useStore } from '@renderer/store'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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
  const { stringToParse, setStringToParse } = useStore()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{i18next.t('enterString')}</CardTitle>
        <CardDescription>{i18next.t('enterStringDesc')}</CardDescription>
      </CardHeader>
      <CardContent>
        <Textarea
          spellCheck={false}
          placeholder={placeholder}
          className="resize-none min-h-74"
          value={stringToParse}
          onChange={(e) => setStringToParse(e.currentTarget.value)}
        />
      </CardContent>
    </Card>
  )
}

export default PlayersInput
