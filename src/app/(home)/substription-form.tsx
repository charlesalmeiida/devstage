"use client"

import { Button } from "@/components/button"
import { InputRoot, InputIcon, InputField } from "@/components/input"
import { User, Mail, ArrowRight } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { subscribeToEvent } from "@/http/api"
import { useRouter, useSearchParams } from "next/navigation"

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

const subscriptionSchema = z.object({
  name: z.string().min(2, "Digite seu nome completo"),
  email: z.string().email("Digite um e-mail valido"),
})

export function SubscriptionForm() {
  const { push } = useRouter()
  const searchParams = useSearchParams()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  })

  async function onSubscribe({ email, name }: SubscriptionSchema) {
    const referrer = searchParams.get("referrer")

    const { subscriberId } = await subscribeToEvent({ email, name, referrer })

    push(`/invite/${subscriberId}`)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-xl text-gray-200">
        Inscrição
      </h2>
      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot {...(errors.name ? { error: true } : {})}>
            <InputIcon>
              <User className="size-5" />
            </InputIcon>

            <InputField
              type="text"
              placeholder="Nome completo"
              {...register("name")}
            />
          </InputRoot>

          {errors.name && (
            <p className="text-danger text-xs font-semibold">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot {...(errors.email ? { error: true } : {})}>
            <InputIcon>
              <Mail className="size-5" />
            </InputIcon>

            <InputField
              type="email"
              placeholder="E-mail"
              {...register("email")}
            />
          </InputRoot>

          {errors.email && (
            <p className="text-danger text-xs font-semibold">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <Button type="submit">
        Confirmar <ArrowRight className="size-5" />
      </Button>
    </form>
  )
}
