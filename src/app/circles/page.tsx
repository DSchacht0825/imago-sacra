import Image from 'next/image'

export default function CirclesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=center"
            alt="Circle of stones in peaceful setting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/40"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-light text-white leading-tight tracking-wide mb-8">
            Sacred Conversation
          </h1>
          <p className="text-xl font-light text-stone-200 leading-relaxed max-w-3xl mx-auto">
            One-on-one spiritual direction rooted in contemplative dialogue
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop&crop=center"
            alt="Peaceful gathering space"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-50/95"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm p-12 rounded-2xl shadow-xl border border-white/50">
            
            <div className="prose prose-lg prose-stone mx-auto max-w-none">
              <h2 className="text-3xl font-light text-slate-800 mb-8 text-center">
                The Art of Sacred Listening
              </h2>
              
              <p className="text-xl font-light text-slate-600 leading-relaxed mb-8 text-center italic">
                "Where two or three gather with open hearts, wisdom emerges in the space between."
              </p>

              <p className="text-lg font-light text-slate-600 leading-relaxed mb-12 text-center">
                Sacred conversation is more than dialogue—it's a practice of deep listening that creates space 
                for the Divine to speak through our stories, questions, and shared silence. In these one-on-one 
                sessions, we explore the intersection of your spiritual life with your daily experience.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                <div>
                  <h3 className="text-2xl font-light text-slate-700 mb-4">What We Explore</h3>
                  <div className="space-y-4 text-slate-600 font-light">
                    <p>• The intersection of spirituality and daily life</p>
                    <p>• Questions that have no easy answers but demand our attention</p>
                    <p>• The wisdom found in vulnerability and authentic sharing</p>
                    <p>• How contemplative practices deepen our capacity for presence</p>
                    <p>• Finding the sacred in ordinary moments</p>
                    <p>• Discerning the movements of grace in your life</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-light text-slate-700 mb-4">How We Meet</h3>
                  <div className="space-y-4 text-slate-600 font-light">
                    <p><strong>Format:</strong> Individual spiritual direction sessions</p>
                    <p><strong>Duration:</strong> 60-90 minutes per session</p>
                    <p><strong>Frequency:</strong> Monthly or bi-weekly, as needed</p>
                    <p><strong>Setting:</strong> In-person or virtual options available</p>
                    <p><strong>Investment:</strong> $90-120 per session (sliding scale available)</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-stone-100/80 rounded-xl">
                <h3 className="text-2xl font-light text-slate-700 mb-4 text-center">A Different Kind of Conversation</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-6">
                  This is not therapy, though healing often occurs. It's not counseling, though wisdom emerges. 
                  It's not mentoring, though growth inevitably happens. Sacred conversation is a practice of 
                  paying attention—together—to the subtle movements of the Divine in your life.
                </p>
                <p className="text-slate-600 font-light leading-relaxed">
                  Drawing inspiration from contemplatives like Richard Rohr, Thomas Merton, and Henri Nouwen, 
                  we create space for the kind of conversation your soul is longing for—honest, spacious, and 
                  grounded in the understanding that we are held by sacred mystery.
                </p>
              </div>

              <div className="mt-12 bg-gradient-to-r from-amber-50/80 to-stone-50/80 p-8 rounded-xl border border-amber-200/50">
                <h3 className="text-2xl font-light text-slate-700 mb-4 text-center">Who Seeks Sacred Conversation?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-600 font-light">
                  <div className="space-y-3">
                    <p>• Those experiencing spiritual dryness or confusion</p>
                    <p>• People navigating major life transitions</p>
                    <p>• Individuals questioning long-held beliefs</p>
                    <p>• Anyone sensing a call to something deeper</p>
                  </div>
                  <div className="space-y-3">
                    <p>• Those wanting to integrate contemplative practices</p>
                    <p>• People seeking authentic spiritual conversation</p>
                    <p>• Individuals exploring their relationship with the Divine</p>
                    <p>• Anyone longing to live from their truest self</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <h3 className="text-2xl font-light text-slate-700 mb-4">Ready to Begin?</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-6">
                  The path inward is both the longest journey you'll ever take and the most important. 
                  You don't have to walk it alone.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-light text-lg transition-colors duration-200"
                >
                  Begin Sacred Conversation
                </a>
                <p className="text-slate-500 font-light mt-4 text-sm">
                  Start with a complimentary 30-minute consultation to see if this path resonates with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop&crop=center"
            alt="Peaceful reflection"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-amber-50/90"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl font-light text-slate-600 leading-relaxed italic mb-6">
            "In these conversations, I found something I didn't know I was looking for—a space where I could 
            bring my whole self, questions and all, and be met with such gentle acceptance. These sessions 
            changed how I see everything, including myself."
          </blockquote>
          <p className="text-slate-500 font-light">
            — Sarah M.
          </p>
        </div>
      </section>
    </>
  )
}