import { twMerge } from "tailwind-merge"

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        "p-1.5 rounded-md bg-gray-500 text-blue cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300",
        className
      )}
      {...props}
    />
  )
}
