import Image from 'next/image'

export default function PracticesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&crop=center"
            alt="Meditation cushion in serene setting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-light text-white leading-tight tracking-wide mb-8">
            Practices for Presence
          </h1>
          <p className="text-xl font-light text-stone-200 leading-relaxed max-w-3xl mx-auto">
            Gentle guidance in contemplative practices that open the heart
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center"
            alt="Peaceful mountain morning"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-50/95"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm p-12 rounded-2xl shadow-xl border border-white/50">
            
            <div className="prose prose-lg prose-stone mx-auto max-w-none">
              <h2 className="text-3xl font-light text-slate-800 mb-8 text-center">
                Ancient Wisdom for Modern Hearts
              </h2>
              
              <p className="text-xl font-light text-slate-600 leading-relaxed mb-8 text-center italic">
                "Be still and know that I am God." — Psalm 46:10
              </p>

              <p className="text-lg font-light text-slate-600 leading-relaxed mb-12 text-center">
                In our hurried, noisy world, contemplative practices offer us a way home—to ourselves, 
                to presence, to the Sacred that dwells both within and beyond us. These are not techniques to master but 
                invitations to surrender, pathways that have been walked by mystics and seekers for millennia.
              </p>

              <div className="mb-12 p-8 bg-stone-100/80 rounded-xl">
                <h3 className="text-2xl font-light text-slate-700 mb-6 text-center">Learning the Sacred Arts</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-6">
                  While contemplative practice is ultimately personal work—just you and the Divine—learning these practices 
                  with guidance provides invaluable support and encouragement. Through individual spiritual direction, 
                  we explore which practices serve your unique journey and how to integrate them into daily life.
                </p>
                <p className="text-slate-600 font-light leading-relaxed text-center">
                  Each session is tailored to where you are on your spiritual path, offering both instruction and 
                  companionship as you discover the practices that resonate with your soul.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                <div className="bg-white/60 p-8 rounded-xl border border-stone-200">
                  <h3 className="text-2xl font-light text-slate-700 mb-6">Centering Prayer</h3>
                  <p className="text-slate-600 font-light leading-relaxed mb-4">
                    A method of silent prayer that prepares us to receive the gift of contemplative prayer. Through the 
                    gentle release of thoughts and the return to a sacred word, we learn to rest in God's presence.
                  </p>
                  <div className="space-y-2 text-sm text-stone-600">
                    <p><strong>What to expect:</strong> Gentle instruction in 20-minute sessions</p>
                    <p><strong>Practice:</strong> Daily personal practice encouraged</p>
                    <p><strong>Support:</strong> Regular check-ins during spiritual direction</p>
                  </div>
                </div>

                <div className="bg-white/60 p-8 rounded-xl border border-stone-200">
                  <h3 className="text-2xl font-light text-slate-700 mb-6">Lectio Divina</h3>
                  <p className="text-slate-600 font-light leading-relaxed mb-4">
                    "Sacred reading" that transforms scripture from information into formation. We approach ancient texts 
                    not to analyze but to encounter, allowing wisdom to speak to the deep places in our hearts.
                  </p>
                  <div className="space-y-2 text-sm text-stone-600">
                    <p><strong>Method:</strong> Four movements of reading, meditation, prayer, contemplation</p>
                    <p><strong>Texts:</strong> Christian, Sufi, Buddhist, and contemporary spiritual writings</p>
                    <p><strong>Approach:</strong> Personal practice with periodic guidance</p>
                  </div>
                </div>

                <div className="bg-white/60 p-8 rounded-xl border border-stone-200">
                  <h3 className="text-2xl font-light text-slate-700 mb-6">Walking Meditation</h3>
                  <p className="text-slate-600 font-light leading-relaxed mb-4">
                    The earth becomes our teacher as we practice presence in movement. Each step becomes a prayer, 
                    each breath a homecoming to this precious moment.
                  </p>
                  <div className="space-y-2 text-sm text-stone-600">
                    <p><strong>Setting:</strong> Natural outdoor spaces when possible</p>
                    <p><strong>Pace:</strong> Slower than normal walking, mindful steps</p>
                    <p><strong>Duration:</strong> 15-45 minutes, as fits your life</p>
                  </div>
                </div>

                <div className="bg-white/60 p-8 rounded-xl border border-stone-200">
                  <h3 className="text-2xl font-light text-slate-700 mb-6">Breath Prayer</h3>
                  <p className="text-slate-600 font-light leading-relaxed mb-4">
                    Simple, rhythmic prayers that align with our breathing, creating a bridge between the conscious 
                    and unconscious, the spoken and unspoken longings of our hearts.
                  </p>
                  <div className="space-y-2 text-sm text-stone-600">
                    <p><strong>Examples:</strong> "Jesus Christ, Son of God, have mercy on me"</p>
                    <p><strong>Adaptable:</strong> Can be customized to your spiritual tradition</p>
                    <p><strong>Integration:</strong> Perfect for busy moments throughout the day</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gradient-to-r from-amber-50/80 to-stone-50/80 rounded-xl border border-amber-200/50">
                <h3 className="text-2xl font-light text-slate-700 mb-4 text-center">A Gentle Invitation</h3>
                <p className="text-slate-600 font-light leading-relaxed text-center mb-4">
                  These practices are not about perfection or performance. They are about showing up, again and again, 
                  to the present moment. They are about creating space for the Sacred to work in us and through us. 
                  They are pathways home to our truest selves.
                </p>
                <p className="text-slate-600 font-light leading-relaxed text-center italic">
                  Come as you are. Begin where you are. The only requirement is a willing heart.
                </p>
              </div>

              <div className="mt-12 bg-white/70 p-8 rounded-xl border border-stone-200">
                <h3 className="text-2xl font-light text-slate-700 mb-6 text-center">How We Work Together</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-light text-slate-700 mb-3">Exploring Practices</h4>
                    <p className="text-slate-600 font-light text-sm leading-relaxed mb-4">
                      Through individual spiritual direction, we explore which contemplative practices resonate with 
                      your spiritual journey and life circumstances. No practice is forced; everything is offered as invitation.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-slate-700 mb-3">Gentle Guidance</h4>
                    <p className="text-slate-600 font-light text-sm leading-relaxed mb-4">
                      I offer instruction in traditional methods while honoring your unique relationship with the Divine. 
                      We adapt practices to fit your life, not the other way around.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-slate-700 mb-3">Ongoing Support</h4>
                    <p className="text-slate-600 font-light text-sm leading-relaxed mb-4">
                      Regular spiritual direction sessions provide space to discuss your practice—what's working, 
                      what feels challenging, and how God might be inviting you to grow.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-slate-700 mb-3">Sacred Confidentiality</h4>
                    <p className="text-slate-600 font-light text-sm leading-relaxed mb-4">
                      Your spiritual journey is held in complete confidence, creating the safety needed for honest 
                      exploration of your relationship with contemplative practice.
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="inline-block bg-white/80 px-6 py-4 rounded-lg">
                    <p className="text-slate-700 font-light"><strong>Investment:</strong> $90-120 per session (sliding scale available)</p>
                    <p className="text-slate-600 font-light text-sm mt-2">Sessions are typically 60-90 minutes, monthly or bi-weekly</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <h3 className="text-2xl font-light text-slate-700 mb-4">Ready to Begin?</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-6">
                  The contemplative path is both ancient and deeply personal. Let's explore together which practices 
                  might serve your journey home to yourself and to God.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-light text-lg transition-colors duration-200 mr-4"
                >
                  Begin Your Practice
                </a>
                <a 
                  href="mailto:hello@imagosacracoaching.com?subject=Question about Contemplative Practices" 
                  className="inline-block border border-slate-600 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-lg font-light text-lg transition-colors duration-200"
                >
                  Ask a Question
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop&crop=center"
            alt="Golden hour reflection"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-amber-50/85"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl font-light text-slate-600 leading-relaxed italic">
            "We do not think ourselves into new ways of living, we live ourselves into new ways of thinking."
          </blockquote>
          <p className="text-slate-500 font-light mt-4">
            — Richard Rohr
          </p>
        </div>
      </section>
    </>
  )
}