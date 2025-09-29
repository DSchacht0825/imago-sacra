'use client'

import { siteContent } from '@/data/content'
import Image from 'next/image'

export default function Hero() {
  const { hero } = siteContent

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tree-of-life.jpg"
          alt="Sacred tree of life background"
          fill
          className="object-cover"
          priority
        />
        {/* Opacity overlay */}
        <div className="absolute inset-0 bg-white/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        
        {/* Centering Statement - Large, contemplative */}
        <div className="mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-light text-slate-900 leading-tight tracking-wide">
            {hero.centering_statement}
          </h1>
        </div>

        {/* Spacious pause */}
        <div className="h-16"></div>

        {/* Invitation paragraph - Gentle, spacious */}
        <div className="mb-20">
          <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-relaxed max-w-3xl mx-auto">
            {hero.invitation}
          </p>
        </div>

        {/* Spacious pause */}
        <div className="h-12"></div>

        {/* Simple, contemplative call to action */}
        <div>
          <button className="group text-slate-900 hover:text-black font-light text-lg transition-colors duration-300">
            <span className="border-b border-slate-600 group-hover:border-slate-900 pb-1">
              {hero.cta_primary}
            </span>
            <span className="ml-2 text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
              →
            </span>
          </button>
        </div>

        {/* Gentle scroll indication */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-12 bg-slate-600/60"></div>
        </div>
      </div>
    </section>
  )
}