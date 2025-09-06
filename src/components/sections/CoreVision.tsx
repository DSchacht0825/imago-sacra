'use client'

import { siteContent } from '@/data/content'
import Image from 'next/image'

export default function CoreVision() {
  const { core_vision } = siteContent

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center"
          alt="Misty mountains background"
          fill
          className="object-cover"
        />
        {/* Earth-toned overlay */}
        <div className="absolute inset-0 bg-amber-50/85"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Three Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {core_vision.pillars.map((pillar, index) => (
            <div key={index} className="text-center">
              {/* Pillar Title */}
              <h3 className="text-2xl font-light text-slate-800 mb-6">
                {pillar.title}
              </h3>
              
              {/* Simple divider */}
              <div className="w-12 h-px bg-slate-300 mx-auto mb-8"></div>
              
              {/* Description */}
              <p className="text-lg font-light text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Spacious pause */}
        <div className="h-24"></div>

        {/* Connecting statement */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl font-light text-slate-500 italic leading-relaxed">
            These are not destinations, but orientations—ways of being that invite us deeper into the mystery of who we are and who we are becoming.
          </p>
        </div>
      </div>
    </section>
  )
}