interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ ...props }: ButtonProps) {
  return (
    <button
      className="px-10 flex items-center justify-between py-3 rounded-xl bg-gray-500 text-blue font-semibold w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
      {...props}
    />
  )
}
