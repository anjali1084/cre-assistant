// app/page.tsx
import Button from '../components/Button'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gray-100 dark:bg-gray-900 p-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600 mb-4">
        Welcome to Cre Assistant!
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl text-center mb-6">
        This is your Next.js 15 + Tailwind CSS starter project. Use this page to build your app
        interface, add components, and explore styling with Tailwind utilities.
      </p>
      <div className="flex gap-4 mb-6">
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card title="Feature 1" description="This is a sample feature card." />
        <Card title="Feature 2" description="You can add more cards here." />
        <Card title="Feature 3" description="Cards are reusable components." />
      </div>
    </div>
  )
}
