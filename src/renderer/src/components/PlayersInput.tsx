import { useStore } from "@renderer/store";
// import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function PlayersInput() {
  const {stringToParse, setStringToParse, goToSelectPage} = useStore()

  return <div className="flex">
    <Textarea
      className="w-64"
      value={stringToParse}
      onChange={(e) => setStringToParse(e.currentTarget.value)}
    />
    <button
      className="w-16"
      onClick={() => goToSelectPage()}
    >
      Далее
    </button>
  </div>
}
