// app/about/page.tsx
import Card from '../../components/Card'

export default function About() {
  const features = [
    { title: 'Reusable Components', description: 'Create buttons, cards, modals, etc.' },
    { title: 'Dark Mode Support', description: 'Easily toggle light and dark modes.' },
    { title: 'Responsive Design', description: 'Works on all screen sizes with Tailwind utilities.' },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gray-100 dark:bg-gray-900 p-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-6">About Cre Assistant</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl text-center mb-6">
        Cre Assistant is a Next.js 15 + Tailwind CSS starter project with reusable components and layouts.
        Build your app faster with a consistent design system and responsive UI.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((feature, idx) => (
          <Card key={idx} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  )
}
