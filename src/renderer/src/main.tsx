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
        copied: 'The command is copied',
        enterString: "Enter 'voice_show_mute' command output",
        selectPlayers: 'Select players',
        incorrectInput: "Couldn't find all 10 players data, check input",
        atLeastOne: 'Select at least one player',
        result: 'Result command'
      }
    },
    ru: {
      translation: {
        next: 'Далее',
        copy: 'Скопировать',
        again: 'Начать заново',
        copied: 'Команда скопирована',
        enterString: "Результат выполнения команды 'voice_show_mute'",
        selectPlayers: 'Выберите игроков',
        incorrectInput: 'Не удалось получить данные всех десяти игроков, проверьте ввод',
        atLeastOne: 'Выберите хотя бы одного игрока',
        result: 'Итоговая команда'
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
