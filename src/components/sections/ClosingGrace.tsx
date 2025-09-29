'use client'

import { siteContent } from '@/data/content'
import Image from 'next/image'

export default function ClosingGrace() {
  const { closing_grace } = siteContent

  return (
    <section className="relative py-32 overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1920&h=1080&fit=crop&crop=center"
          alt="Golden meadow at sunset"
          fill
          className="object-cover"
        />
        {/* Deep contemplative overlay */}
        <div className="absolute inset-0 bg-slate-900/75"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Grace Statement */}
        <div className="mb-16">
          <p className="text-2xl sm:text-3xl font-light leading-relaxed text-slate-100">
            {closing_grace.statement}
          </p>
        </div>

        {/* Spacious pause */}
        <div className="h-12"></div>

        {/* Final Invitation */}
        <div>
          <button className="group text-white hover:text-slate-200 font-light text-lg transition-colors duration-300">
            <span className="border-b border-slate-400 group-hover:border-slate-200 pb-1">
              {closing_grace.cta}
            </span>
            <span className="ml-2 text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
              →
            </span>
          </button>
        </div>

        {/* Contemplative space */}
        <div className="h-20"></div>
        
        {/* Simple closing mark */}
        <div className="w-px h-8 bg-slate-600 mx-auto"></div>
      </div>
    </section>
  )
}