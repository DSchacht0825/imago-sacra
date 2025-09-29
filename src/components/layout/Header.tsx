'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/who-we-are', label: 'Who We Are' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <>
      {/* Logo - Centered */}
      <Link 
        href="/" 
        className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 hover:opacity-80 transition-opacity duration-300"
      >
        <Image
          src="/images/imago-sacra-logo.png"
          alt="Imago Sacra Coaching"
          width={360}
          height={120}
          className="h-24 w-auto brightness-50 contrast-150"
          priority
        />
      </Link>

      {/* Navigation - Top Right */}
      <nav className="fixed top-8 right-8 z-50">
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition-colors duration-300 ${
                pathname === item.href
                  ? 'text-slate-900 border-b border-slate-600 pb-1'
                  : 'text-slate-800 hover:text-slate-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}