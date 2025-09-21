// components/Card.tsx
interface CardProps {
  title: string
  description: string
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded p-6 max-w-sm text-center">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  )
}
