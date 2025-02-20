import {
  getSubscriberInviteClicks,
  getSubscriberRankingPosition,
} from "@/http/api"
import { MousePointerClick, BadgeCheck, Medal } from "lucide-react"

export function BulletWrapper({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className="bg-gray-700 border relative border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl"
      {...props}
    />
  )
}

export function BulletTitle({ ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className="font-heading text-2xl font-semibold text-gray-200 leading-none"
      {...props}
    />
  )
}

export function BulletValue({ ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className="text-sm text-gray-300 leading-none text-center"
      {...props}
    />
  )
}

export function IconWrapper({ ...props }: React.ComponentProps<"div">) {
  return <div className="absolute top-3 left-3 text-purple size-5" {...props} />
}

interface StatsProps {
  subscriberId: string
}

export async function Stats({ subscriberId }: StatsProps) {
  const { count: clicks } = await getSubscriberInviteClicks(subscriberId)
  const { count: subscribers } = await getSubscriberInviteClicks(subscriberId)
  const { position } = await getSubscriberRankingPosition(subscriberId)

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <BulletWrapper>
        <BulletTitle>{clicks}</BulletTitle>
        <BulletValue>Acessos ao link</BulletValue>

        <IconWrapper>
          <MousePointerClick />
        </IconWrapper>
      </BulletWrapper>

      <BulletWrapper>
        <BulletTitle>{subscribers}</BulletTitle>
        <BulletValue>Inscrições feitas</BulletValue>

        <IconWrapper>
          <BadgeCheck />
        </IconWrapper>
      </BulletWrapper>

      <BulletWrapper>
        <BulletTitle>{position ? `${position}º` : "-"}</BulletTitle>
        <BulletValue>Posição no ranking</BulletValue>

        <IconWrapper>
          <Medal />
        </IconWrapper>
      </BulletWrapper>
    </div>
  )
}
