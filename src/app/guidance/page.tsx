import Image from 'next/image'

export default function GuidancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center"
            alt="Solitary path through mountains"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/40"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-light text-white leading-tight tracking-wide mb-8">
            Guidance for the Inner Journey
          </h1>
          <p className="text-xl font-light text-stone-200 leading-relaxed max-w-3xl mx-auto">
            One-on-one accompaniment for those ready to go deeper
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop&crop=center"
            alt="Peaceful forest path"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-50/95"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm p-12 rounded-2xl shadow-xl border border-white/50">
            
            <div className="prose prose-lg prose-stone mx-auto max-w-none">
              <h2 className="text-3xl font-light text-slate-800 mb-8 text-center">
                Sacred Accompaniment
              </h2>
              
              <p className="text-xl font-light text-slate-600 leading-relaxed mb-8 text-center italic">
                "The spiritual life is not a private affair; it is a communal journey, 
                and you are looking for companions."
              </p>
              <p className="text-center text-slate-500 font-light mb-12">— Henri Nouwen</p>

              <p className="text-lg font-light text-slate-600 leading-relaxed mb-12 text-center">
                There comes a time in many of our spiritual journeys when we sense the need for deeper exploration, 
                when the questions we're carrying require more than what books or workshops can offer. This is when 
                individual spiritual guidance becomes not just helpful, but essential.
              </p>

              <div className="mb-12 p-8 bg-stone-100/80 rounded-xl">
                <h3 className="text-2xl font-light text-slate-700 mb-6 text-center">What is Spiritual Direction?</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-4">
                  Spiritual direction is an ancient practice of sacred listening—a confidential, one-on-one relationship 
                  where you explore your experience of the Divine and how it's manifesting in your daily life. 
                  It's not therapy, though it can be deeply healing. It's not counseling, though wisdom often emerges. 
                  It's not mentoring, though growth inevitably happens.
                </p>
                <p className="text-slate-600 font-light leading-relaxed">
                  Rather, it's a practice of paying attention—together—to the subtle movements of the Sacred in your life, 
                  helping you discern where and how God (however you understand that reality) is inviting you forward.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-light text-slate-700 mb-4">Who Seeks Spiritual Guidance?</h3>
                  <div className="space-y-3 text-slate-600 font-light">
                    <p>• Those experiencing major life transitions</p>
                    <p>• People questioning long-held beliefs or practices</p>
                    <p>• Individuals sensing a call to something deeper</p>
                    <p>• Those struggling with spiritual dryness or confusion</p>
                    <p>• People wanting to integrate contemplative practices</p>
                    <p>• Anyone longing for authentic spiritual conversation</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-light text-slate-700 mb-4">What We Explore Together</h3>
                  <div className="space-y-3 text-slate-600 font-light">
                    <p>• Your unique relationship with the Sacred</p>
                    <p>• How prayer and contemplation are evolving for you</p>
                    <p>• The intersection of spirituality and daily life</p>
                    <p>• Discernment of callings and life choices</p>
                    <p>• Integration of shadow work and spiritual growth</p>
                    <p>• Finding God in unexpected places</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-light text-slate-700 mb-8 text-center">Meet Your Guides</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/70 p-6 rounded-xl border border-stone-200">
                    <h4 className="text-xl font-light text-slate-700 mb-4">Yvonne Araujo</h4>
                    <p className="text-slate-600 font-light leading-relaxed mb-4">
                      A trained spiritual director in the Christian contemplative tradition with over 15 years of experience. 
                      Yvonne brings deep wisdom from her own journey through darkness and light, specializing in supporting 
                      those navigating faith transitions and contemplative awakening.
                    </p>
                    <div className="text-sm text-stone-600">
                      <p><strong>Training:</strong> Institute for Spiritual Direction, San Francisco Theological Seminary</p>
                      <p><strong>Specialties:</strong> Contemplative prayer, Ignatian spirituality, life transitions</p>
                    </div>
                  </div>

                  <div className="bg-white/70 p-6 rounded-xl border border-stone-200">
                    <h4 className="text-xl font-light text-slate-700 mb-4">Derek Rice</h4>
                    <p className="text-slate-600 font-light leading-relaxed mb-4">
                      A certified life coach and longtime student of contemplative spirituality. Derek integrates wisdom 
                      from various traditions—Christian mysticism, Buddhist mindfulness, and depth psychology—to help 
                      people discover their authentic spiritual path.
                    </p>
                    <div className="text-sm text-stone-600">
                      <p><strong>Training:</strong> International Coach Federation (ICF), Center for Action and Contemplation</p>
                      <p><strong>Specialties:</strong> Enneagram work, shadow integration, vocational discernment</p>
                    </div>
                  </div>

                  <div className="bg-white/70 p-6 rounded-xl border border-stone-200">
                    <h4 className="text-xl font-light text-slate-700 mb-4">Jay Williams</h4>
                    <p className="text-slate-600 font-light leading-relaxed mb-4">
                      A meditation teacher and spiritual guide who bridges Eastern and Western contemplative practices. 
                      Jay brings a gentle, non-directive approach that honors each person's unique spiritual landscape 
                      and authentic path to awakening.
                    </p>
                    <div className="text-sm text-stone-600">
                      <p><strong>Training:</strong> Spirit Rock Meditation Center, Loyola Institute for Spirituality</p>
                      <p><strong>Specialties:</strong> Mindfulness meditation, interfaith dialogue, addiction recovery</p>
                    </div>
                  </div>

                  <div className="bg-white/70 p-6 rounded-xl border border-stone-200">
                    <h4 className="text-xl font-light text-slate-700 mb-4">Chelsea Long</h4>
                    <p className="text-slate-600 font-light leading-relaxed mb-4">
                      An Enneagram teacher and spiritual companion who helps people discover how their personality patterns 
                      can become doorways to freedom. Chelsea combines psychological insight with contemplative wisdom to 
                      support deep personal transformation.
                    </p>
                    <div className="text-sm text-stone-600">
                      <p><strong>Training:</strong> Enneagram Institute, Living School (Center for Action and Contemplation)</p>
                      <p><strong>Specialties:</strong> Enneagram and spirituality, feminine spirituality, creative expression</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12 p-8 bg-gradient-to-r from-amber-50/80 to-stone-50/80 rounded-xl border border-amber-200/50">
                <h3 className="text-2xl font-light text-slate-700 mb-6 text-center">How We Work Together</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-lg font-light text-slate-700 mb-3">Initial Consultation</h4>
                    <p className="text-slate-600 font-light text-sm leading-relaxed">
                      We begin with a complimentary 30-minute conversation to explore if spiritual direction might be 
                      right for you and to determine which guide would be the best fit.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-slate-700 mb-3">Regular Sessions</h4>
                    <p className="text-slate-600 font-light text-sm leading-relaxed">
                      Most people meet monthly for 60-90 minutes, though some prefer bi-weekly sessions during times 
                      of particular growth or transition. Sessions can be in-person or via secure video.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-slate-700 mb-3">Sacred Confidentiality</h4>
                    <p className="text-slate-600 font-light text-sm leading-relaxed">
                      Everything shared in spiritual direction is held in absolute confidence. This sacred trust creates 
                      the safety needed for honest exploration of your spiritual life.
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="inline-block bg-white/60 px-6 py-4 rounded-lg">
                    <p className="text-slate-700 font-light"><strong>Investment:</strong> $90-120 per session (sliding scale available)</p>
                    <p className="text-slate-600 font-light text-sm mt-2">We believe financial constraints should never prevent someone from receiving spiritual guidance.</p>
                  </div>
                </div>
              </div>

              <div className="mb-12 bg-white/60 p-8 rounded-xl border border-stone-200">
                <h3 className="text-2xl font-light text-slate-700 mb-4 text-center">Is Spiritual Direction Right for You?</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-6 text-center">
                  If you find yourself nodding to several of these statements, spiritual direction might be a valuable part of your journey:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600 font-light">
                  <div className="space-y-2">
                    <p>✓ I long for deeper spiritual conversation</p>
                    <p>✓ I'm questioning beliefs I've held for years</p>
                    <p>✓ I sense God calling me to something new</p>
                    <p>✓ My prayer life feels dry or confusing</p>
                    <p>✓ I want to integrate contemplative practices</p>
                  </div>
                  <div className="space-y-2">
                    <p>✓ I'm navigating a major life transition</p>
                    <p>✓ I feel spiritually stuck or restless</p>
                    <p>✓ I want to explore my spiritual gifts</p>
                    <p>✓ I'm drawn to mystical experiences but need guidance</p>
                    <p>✓ I want accountability for my spiritual growth</p>
                  </div>
                </div>
              </div>

              <div className="text-center bg-stone-100/60 p-8 rounded-xl">
                <h3 className="text-2xl font-light text-slate-700 mb-4">Ready to Begin?</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-6">
                  The path inward is the longest journey you'll ever take, and the most important. 
                  You don't have to walk it alone.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-light text-lg transition-colors duration-200 mr-4"
                >
                  Schedule a Consultation
                </a>
                <a 
                  href="mailto:hello@imagosacracoaching.com?subject=Questions about Spiritual Direction" 
                  className="inline-block border border-slate-600 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-lg font-light text-lg transition-colors duration-200"
                >
                  Ask Questions First
                </a>
                <p className="text-slate-500 font-light mt-4 text-sm">
                  All initial consultations are complimentary and confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop&crop=center"
            alt="Peaceful lake reflection"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-amber-50/90"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-light text-slate-800 mb-12 text-center">Voices from the Journey</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 p-6 rounded-xl">
              <blockquote className="text-slate-600 font-light leading-relaxed italic mb-4">
                "I came to spiritual direction feeling lost and questioning everything I'd believed about God. 
                Through our monthly conversations, I've discovered that my questions weren't signs of weak faith—
                they were invitations to a deeper, more authentic relationship with the Divine."
              </blockquote>
              <p className="text-slate-500 font-light text-sm">— Maria, working with Yvonne</p>
            </div>

            <div className="bg-white/80 p-6 rounded-xl">
              <blockquote className="text-slate-600 font-light leading-relaxed italic mb-4">
                "Derek helped me see how my Enneagram pattern was both my greatest gift and my spiritual blind spot. 
                The integration of psychological insight with contemplative practice has been life-changing. I finally 
                feel like I'm living from my true self."
              </blockquote>
              <p className="text-slate-500 font-light text-sm">— James, working with Derek</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center"
            alt="Mountain vista"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/60"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl font-light text-white leading-relaxed italic">
            "The spiritual journey is individual, highly personal. It can't be organized or regulated. 
            It isn't true that everyone should follow one path. Listen to your own truth."
          </blockquote>
          <p className="text-stone-300 font-light mt-4">
            — Ram Dass
          </p>
        </div>
      </section>
    </>
  )
}