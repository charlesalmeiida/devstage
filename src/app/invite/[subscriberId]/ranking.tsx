import gold from "../../../assets/medal-gold.svg"
import silver from "../../../assets/medal-silver.svg"
import cooper from "../../../assets/medal-cooper.svg"
import Image from "next/image"
import { getRanking } from "@/http/api"

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      {ranking.map(({ id, name, score }, index) => (
        <div
          key={id}
          className="rounded-xl relative bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
        >
          <span className="text-sm text-gray-300 leading-none">
            <strong className="font-semibold">{index + 1}º</strong> | {name}
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            {score}
          </span>

          {index === 0 && (
            <Image
              className="absolute top-0 right-8"
              src={gold}
              alt="medal gold"
              width={56}
              height={85}
            />
          )}

          {index === 1 && (
            <Image
              className="absolute top-0 right-8"
              src={silver}
              alt="silver gold"
              width={56}
              height={85}
            />
          )}

          {index === 2 && (
            <Image
              className="absolute top-0 right-8"
              src={cooper}
              alt="cooper gold"
              width={56}
              height={85}
            />
          )}
        </div>
      ))}
    </div>
  )
}
