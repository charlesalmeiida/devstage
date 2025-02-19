import { Button } from "@/components/button"
import { IconButton } from "@/components/icon-button"
import { InputField, InputIcon, InputRoot } from "@/components/input"
import { ArrowRight, Copy, User } from "lucide-react"

export default function Home() {
  return (
    <main>
      <div>
        <Button type="submit">
          Clique <ArrowRight />
        </Button>
        <IconButton>
          <Copy />
        </IconButton>
        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>

          <InputField placeholder="Nome" />
        </InputRoot>
      </div>
    </main>
  )
}
