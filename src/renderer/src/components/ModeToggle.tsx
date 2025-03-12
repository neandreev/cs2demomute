import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useTheme } from '@/themeProvider'

const iconByTheme = {
  dark: <Sun />,
  light: <Moon />
}

const oppositeTheme = {
  dark: 'light',
  light: 'dark'
}

const ModeToggle = (): JSX.Element => {
  const { theme, setTheme } = useTheme()

  return (
    <Button className="w-10" onClick={() => setTheme(oppositeTheme[theme])}>
      {iconByTheme[theme]}
    </Button>
  )
}

export default ModeToggle
