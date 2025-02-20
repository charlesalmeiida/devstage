interface InputRootProps extends React.ComponentProps<"div"> {
  error?: boolean
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="bg-gray-800 group h-12 border focus-within:border-gray-100 border-gray-600 rounded-xl px-4 flex items-center gap-2 transition-all data-[error=true]:border-danger group"
      {...props}
    />
  )
}

export function InputIcon({ ...props }: React.ComponentProps<"span">) {
  return (
    <span
      {...props}
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
    />
  )
}

export function InputField({ ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type="text"
      {...props}
      className="flex-1 outline-0 placeholder-gray-400 bg-transparent"
    />
  )
}
