// components/Header.tsx
'use client'

import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'


export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white py-4 px-6 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">Cre Assistant</h1>
      <nav className="flex gap-4 items-center">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <DarkModeToggle />
      </nav>
    </header>
  )
}
