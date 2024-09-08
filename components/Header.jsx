'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';

export default function Header({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          TechSolutions
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Home</Link>
          <Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Services</Link>
          <Link href="/case-studies" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Case Studies</Link>
          <Link href="/tech-stack" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Tech Stack</Link>
          <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Contact</Link>
        </nav>
        <div className="flex items-center">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
          >
            {darkMode ? (
              <MoonIcon className="h-6 w-6 text-gray-600" />
            ) : (
              <SunIcon className="h-6 w-6 text-yellow-400" />
            )}
          </button>
          <button
            className="md:hidden ml-4 text-gray-600 dark:text-gray-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden px-4 py-2 space-y-2">
          <Link href="/" className="block hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Home</Link>
          <Link href="/services" className="block hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Services</Link>
          <Link href="/case-studies" className="block hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Case Studies</Link>
          <Link href="/tech-stack" className="block hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Tech Stack</Link>
          <Link href="/contact" className="block hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Contact</Link>
        </nav>
      )}
      <Image
        src="/logo.png"
        alt="Logo"
        width={100}
        height={50}
        priority
      />
    </header>
  )
}