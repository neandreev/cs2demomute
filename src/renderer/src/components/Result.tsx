import i18next from 'i18next'

import { useStore } from '@renderer/store'
import { Button } from './ui/button'
import { Input } from './ui/input'

const Result = (): JSX.Element => {
  const { resultString, copyResult } = useStore()

  return (
    <div className="flex flex-col gap-2">
      <p>{i18next.t('result')}:</p>
      <div className="flex justify-between gap-4">
        <Input className="w-64 resize-none" value={resultString} autoFocus spellCheck={false} />
        <Button variant="outline" onClick={() => copyResult()}>
          {i18next.t('copy')}
        </Button>
      </div>
    </div>
  )
}

export default Result
