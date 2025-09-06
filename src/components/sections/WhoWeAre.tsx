'use client'

import Image from 'next/image'

export default function WhoWeAre() {
  return (
    <section className="relative pt-32 pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1418489098061-ce87b5dc3aee?w=1920&h=1080&fit=crop&crop=center"
          alt="Peaceful valley landscape"
          fill
          className="object-cover"
        />
        {/* Soft contemplative overlay */}
        <div className="absolute inset-0 bg-white/88"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title - Ultra elegant */}
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-slate-800 leading-tight tracking-wider">
            Who We Are
          </h2>
        </div>

        {/* Opening statement - Large and centered */}
        <div className="text-center mb-20">
          <p className="text-3xl sm:text-4xl font-extralight text-slate-700 leading-relaxed tracking-wide">
            We are not a brand, but a circle.
          </p>
          <p className="text-2xl sm:text-3xl font-extralight text-slate-600 leading-relaxed mt-6 tracking-wide">
            Not experts who have it all figured out, but fellow travelers on the sacred path.
          </p>
        </div>

        {/* Spacious divider */}
        <div className="flex justify-center mb-20">
          <div className="w-24 h-px bg-slate-300"></div>
        </div>

        {/* Main content - Elegant paragraphs with generous spacing */}
        <div className="space-y-12 mb-24">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl font-light text-slate-700 leading-loose text-center">
              Our community was born from a deep desire to live the questions together—questions of meaning, identity, love, and transformation. We believe that growth is not about climbing ladders of success, but about descending into the deeper truth of who we already are: beloved children of God.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl font-light text-slate-700 leading-loose text-center">
              Here, we practice presence. We learn to see ourselves, one another, and the world with new eyes—eyes shaped by compassion, humility, and wonder.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl font-light text-slate-700 leading-loose text-center">
              We are seekers and skeptics, teachers and students, leaders and beginners—all held by the same mystery of divine love. Our hope is not that you join our journey, but that you discover yours more fully, with companions who remind you that you are never alone.
            </p>
          </div>
        </div>

        {/* Closing elegant divider */}
        <div className="flex justify-center mb-20">
          <div className="w-px h-16 bg-slate-200"></div>
        </div>

        {/* Gentle closing invitation */}
        <div className="text-center">
          <p className="text-lg font-light text-slate-500 italic max-w-2xl mx-auto leading-relaxed mb-12">
            If these words stir something in your soul, we invite you to discover what it might look like to walk this sacred path together.
          </p>
          
          <button className="group text-slate-700 hover:text-slate-900 font-light text-lg transition-colors duration-300">
            <span className="border-b border-slate-300 group-hover:border-slate-600 pb-1 tracking-wide">
              Begin the conversation
            </span>
            <span className="ml-3 text-slate-400 group-hover:text-slate-600 transition-colors duration-300">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}