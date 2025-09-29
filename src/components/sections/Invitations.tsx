'use client'

import { siteContent } from '@/data/content'
import Image from 'next/image'
import Link from 'next/link'

export default function Invitations() {
  const { offerings } = siteContent

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&h=1080&fit=crop&crop=center"
          alt="Sunlit forest canopy"
          fill
          className="object-cover"
        />
        {/* Warm earth overlay */}
        <div className="absolute inset-0 bg-stone-50/90"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-playfair font-light text-slate-800 mb-4">
            {offerings.title}
          </h2>
          <p className="text-xl font-light text-slate-500">
            {offerings.subtitle}
          </p>
        </div>

        {/* Practices Grid */}
        <div className="space-y-16">
          {offerings.practices.map((practice, index) => (
            <div key={index} className="text-center max-w-2xl mx-auto">
              
              {/* Practice Title */}
              <h3 className="text-2xl font-playfair font-light text-slate-700 mb-4">
                {practice.title}
              </h3>
              
              {/* Description */}
              <p className="text-lg font-light text-slate-600 leading-relaxed mb-8">
                {practice.description}
              </p>
              
              {/* Subtle Learn More */}
              <Link 
                href={practice.href}
                className="group text-slate-500 hover:text-slate-700 font-light text-sm transition-colors duration-300"
              >
                <span className="border-b border-slate-200 group-hover:border-slate-400 pb-1">
                  Learn more
                </span>
                <span className="ml-2 text-slate-300 group-hover:text-slate-500 transition-colors duration-300">
                  →
                </span>
              </Link>
              
              {/* Divider - except for last item */}
              {index < offerings.practices.length - 1 && (
                <div className="mt-16 w-24 h-px bg-slate-200 mx-auto"></div>
              )}
            </div>
          ))}
        </div>

        {/* Spacious pause */}
        <div className="h-20"></div>

        {/* Gentle note */}
        <div className="text-center">
          <p className="text-slate-400 font-light max-w-xl mx-auto">
            Each invitation is offered in the spirit of exploration, not obligation. 
            Trust what draws you and leave what doesn't serve.
          </p>
        </div>
      </div>
    </section>
  )
}