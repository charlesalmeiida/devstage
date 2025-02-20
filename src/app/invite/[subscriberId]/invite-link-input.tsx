"use client"

import { IconButton } from "@/components/icon-button"
import { InputRoot, InputIcon, InputField } from "@/components/input"
import { Link, Copy } from "lucide-react"

interface InviteLinkInputProps {
  link: string
}

export function InviteLinkInput({ link }: InviteLinkInputProps) {
  const copyInviteLink = () => {
    navigator.clipboard.writeText(link)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5 text-gray-100" />
      </InputIcon>
      <InputField readOnly defaultValue={link} />

      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy />
      </IconButton>
    </InputRoot>
  )
}
