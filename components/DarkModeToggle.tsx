// components/DarkModeToggle.tsx
'use client'
import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true'
    setDark(savedMode)
    if (savedMode) document.documentElement.classList.add('dark')
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', dark.toString())
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded"
    >
      {dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}
