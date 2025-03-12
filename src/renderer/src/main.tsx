import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Toaster } from '@/components/ui/sonner'
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next.use(LanguageDetector).init({
  supportedLngs: ['ru', 'en'],
  resources: {
    en: {
      translation: {
        next: 'Next',
        copy: 'Copy',
        again: 'Start again',
        back: 'Back',
        copied: 'The command is copied',
        enterString: 'Enter command output of',
        enterStringDesc: 'Use command and copy its result into the field below',
        selectPlayers: 'Select players',
        selectPlayersDesc: "Which player's voices you need to hear in demo",
        incorrectInput: "Couldn't find data of all 10 players, ",
        atLeastOne: 'Select at least one player',
        result: 'Result command',
        resultDesc: 'Run it in the console'
      }
    },
    ru: {
      translation: {
        next: 'Далее',
        copy: 'Скопировать',
        again: 'Начать заново',
        back: 'Назад',
        copied: 'Команда скопирована',
        enterString: 'Выполни в консоли команду',
        enterStringDesc: 'Используй команду и скопируй результат в поле ниже',
        selectPlayers: 'Выбери игроков',
        selectPlayersDesc: 'Голоса этих игроков будут слышны в демо',
        incorrectInput: 'Не удалось получить данные всех десяти игроков, проверь ввод',
        atLeastOne: 'Выбери хотя бы одного игрока',
        result: 'Итоговая команда',
        resultDesc: 'Используй её в консоли'
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Toaster position="top-center" />
  </React.StrictMode>
)
