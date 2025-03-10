import { create } from 'zustand'

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
  setAppState: (appState: AppState) => void
  stringToParse: string
  setStringToParse: (stringToParse: string) => void
  players: Players
  setPlayers: (players: Players) => void
  selectedValues: Set<number>
  toggleSelectedValue: (value: number) => void
  parseString: () => void
  resultString: string
  generateResultString: () => void
  goToSelectPage: () => void
  goToResultPage: () => void
  copyResult: () => void
}

const isFirstCharNum = (str): boolean => str.match(new RegExp(/^\d/)) !== null
const splitPlayersMuteValues = (stringArr): Players => {
  return stringArr.reduce((players: Players, string: string) => {
    const [_, muteValue, player] = string.match(/^\s*(\d*)\s*(.+)/)!

    // console.log('result', result)
    // const [_, muteValue, player] = result

    return { ...players, [player]: Number(muteValue) }
  }, {})
}

export const useStore = create<StoreState>((set, get) => ({
  appState: AppState.Input,
  setAppState: (appState: AppState): void => set({ appState }),
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
  setStringToParse: (stringToParse): void => {
    console.log(stringToParse)
    set({ stringToParse })
  },
  players: {},
  setPlayers: (players: Players): void => set({ players }),
  parseString: (): void => {
    const stringToParse = get().stringToParse

    const strings = stringToParse
      .split(/\r\n|\r|\n/g)
      .map((string) => string.trim())
      .filter((string) => isFirstCharNum(string))

    const players = splitPlayersMuteValues(strings) as Players

    set({ players })
  },
  selectedValues: new Set([]),
  toggleSelectedValue: (value): void => {
    const selectedValues = get().selectedValues

    if (selectedValues.has(value)) {
      selectedValues.delete(value)
    } else {
      selectedValues.add(value)
    }

    set({ selectedValues })

    console.log('selectedValues', selectedValues)
  },
  resultString: '',
  generateResultString: (): void => {
    const selectedValues = get().selectedValues

    const indicesValue = selectedValues.values().reduce((acc, cur) => {
      return acc + 2 ** cur
    }, 0)

    console.log('indicesValue', indicesValue)

    const resultString = `tv_listen_voice_indices ${indicesValue}`

    set({ resultString })
  },
  goToSelectPage: (): void => {
    get().parseString()
    const players = get().players

    console.log('players', players)

    set({ appState: AppState.Select })
  },
  goToResultPage: (): void => {
    get().generateResultString()

    set({ appState: AppState.Result })
  },
  copyResult: (): void => {
    // console.log('clipboard', clipboard)
    // clipboard.writeText(get().resultString)
  }
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  // updateBears: (newBears) => set({ bears: newBears }),
}))
