import { useStore } from '@renderer/store'
import { Button } from './ui/button'
import { Input } from './ui/input'

const Result = (): JSX.Element => {
  const { resultString, copyResult } = useStore()

  return (
    <div className="flex flex-col gap-2">
      <p>Итоговая команда:</p>
      <div className="flex justify-between gap-2">
        <Input className="w-64 resize-none" value={resultString} />
        <Button variant="outline" onClick={() => copyResult()}>
          Скопировать
        </Button>
      </div>
    </div>
  )
}

export default Result
