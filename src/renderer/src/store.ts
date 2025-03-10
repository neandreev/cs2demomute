import { create } from 'zustand'
import { toast } from 'sonner'

export enum AppState {
  Input = 0,
  Select = 1,
  Result = 2
}

interface Players {
  [playerName: string]: number
}

interface StoreState {
  appState: AppState
  stringToParse: string
  players: Players
  selectedValues: Set<number>
  resultString: string
  setAppState: (appState: AppState) => void
  setStringToParse: (stringToParse: string) => void
  setPlayers: (players: Players) => void
  toggleSelectedValue: (value: number) => void
  parseString: () => void
  generateResultString: () => void
  goToSelectPage: () => void
  goToResultPage: () => void
  copyResult: () => void
}

const isFirstCharNum = (str): boolean => str.match(new RegExp(/^\d/)) !== null
const splitPlayersMuteValues = (stringArr): Players => {
  return stringArr.reduce((players: Players, string: string) => {
    const [, muteValue, player] = string.match(/^\s*(\d*)\s*(.+)/)!

    return { ...players, [player]: Number(muteValue) }
  }, {})
}

export const useStore = create<StoreState>((set, get) => ({
  appState: AppState.Input,
  stringToParse: `Player#     Player Name
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
  -------     ----------------`,
  players: {},
  selectedValues: new Set([]),
  resultString: '',
  setAppState: (appState: AppState): void => set({ appState }),
  setStringToParse: (stringToParse): void => set({ stringToParse }),
  setPlayers: (players: Players): void => set({ players }),
  toggleSelectedValue: (value): void => {
    const selectedValues = get().selectedValues

    if (selectedValues.has(value)) {
      selectedValues.delete(value)
    } else {
      selectedValues.add(value)
    }

    set({ selectedValues })
  },
  parseString: (): void => {
    const stringToParse = get().stringToParse

    const strings = stringToParse
      .split(/\r\n|\r|\n/g)
      .map((string) => string.trim())
      .filter((string) => isFirstCharNum(string))

    const players = splitPlayersMuteValues(strings) as Players

    set({ players })
  },
  generateResultString: (): void => {
    const selectedValues = get().selectedValues

    const indicesValue = selectedValues.values().reduce((playerValuesSum, playerValue) => {
      return playerValuesSum + 2 ** playerValue
    }, 0)

    set({ resultString: `tv_listen_voice_indices ${indicesValue}` })
  },
  goToSelectPage: (): void => {
    get().parseString()

    if (Object.keys(get().players).length !== 10) {
      toast.error('Не удалось получить данные всех десяти игроков, проверьте ввод')

      return
    }

    set({ appState: AppState.Select })
  },
  goToResultPage: (): void => {
    get().generateResultString()

    set({ appState: AppState.Result })
  },
  copyResult: async (): Promise<void> => {
    await navigator.clipboard.writeText(get().resultString)

    toast.success('Команда скопирована')
  }
}))
