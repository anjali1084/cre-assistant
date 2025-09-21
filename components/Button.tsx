// components/Button.tsx
import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

const Button: FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = "px-4 py-2 rounded text-white"  // changed 'let' → 'const'
  const variantClasses = variant === 'secondary'
    ? 'bg-gray-500 hover:bg-gray-600'
    : 'bg-blue-600 hover:bg-blue-700'               // changed 'let' → 'const'

  return (
    <button {...props} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  )
}

export default Button
