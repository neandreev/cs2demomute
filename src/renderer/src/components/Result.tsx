import { useStore } from '@renderer/store'
// import { Input } from "./ui/input";
import { Textarea } from './ui/textarea'

export default function Result() {
  const { resultString, copyResult } = useStore()

  return (
    <div className="flex">
      <Textarea className="w-64 resize-none" value={resultString} />
      <button className="w-16" onClick={() => copyResult()}>
        Скопировать
      </button>
    </div>
  )
}
