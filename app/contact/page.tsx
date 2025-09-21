'use client'

import { useState } from 'react'
import Button from '@components/Button'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gray-100 dark:bg-gray-900 p-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl text-center mb-6">
        Fill out the form below and we will get back to you shortly.
      </p>

      <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 rounded border border-gray-300 dark:border-gray-600"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded border border-gray-300 dark:border-gray-600"
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 rounded border border-gray-300 dark:border-gray-600"
          required
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  )
}
