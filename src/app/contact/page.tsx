import Image from 'next/image'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center"
            alt="Peaceful mountain vista"
            fill
            className="object-cover"
          />
          {/* Soft overlay for text readability */}
          <div className="absolute inset-0 bg-white/85"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-light text-slate-800 leading-tight tracking-wide mb-8">
            Begin the Conversation
          </h1>
          <p className="text-xl font-light text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Every journey begins with a single step. We invite you to take that step by reaching out for an initial conversation.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop&crop=center"
            alt="Tranquil forest clearing"
            fill
            className="object-cover"
          />
          {/* Warm earth overlay */}
          <div className="absolute inset-0 bg-stone-50/90"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light text-slate-800 mb-8">
                Share Your Story
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-slate-600 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-slate-400 focus:ring-0 focus:outline-none transition-colors duration-200"
                    placeholder="What shall we call you?"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-light text-slate-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-slate-400 focus:ring-0 focus:outline-none transition-colors duration-200"
                    placeholder="How can we reach you?"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-light text-slate-600 mb-2">
                    What draws you here?
                  </label>
                  <select 
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-slate-400 focus:ring-0 focus:outline-none transition-colors duration-200"
                  >
                    <option value="">Choose what resonates...</option>
                    <option value="individual">Individual Guidance</option>
                    <option value="circle">Joining a Circle</option>
                    <option value="speaking">Speaking Invitation</option>
                    <option value="curious">Just curious to learn more</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-light text-slate-600 mb-2">
                    Tell us about your journey
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-slate-400 focus:ring-0 focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="What is your heart longing for? What questions are you carrying? Share whatever feels true for you in this moment."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg font-light transition-colors duration-200"
                >
                  Send Your Message
                </button>
              </form>
            </div>

            {/* Contact Information & Philosophy */}
            <div className="lg:pl-8">
              <h2 className="text-3xl font-light text-slate-800 mb-8">
                Our Promise
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-light text-slate-700 mb-3">
                    Confidentiality
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    Your story is sacred. Everything you share is held in complete confidence and treated with the reverence it deserves.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-light text-slate-700 mb-3">
                    No Pressure
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    Our initial conversation is simply an exploration. There's no obligation, no sales pitch—just an honest conversation about where you are and where you sense you might be called.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-light text-slate-700 mb-3">
                    Gentle Response
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    We typically respond within 24 hours with a personal note, not an automated response. Real humans reading real stories.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="pt-8 border-t border-slate-200">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-light text-slate-500 mb-1">Email</p>
                      <p className="text-slate-700">hello@imagosacracoaching.com</p>
                    </div>
                    <div>
                      <p className="text-sm font-light text-slate-500 mb-1">Phone</p>
                      <p className="text-slate-700">(619) 555-0123</p>
                    </div>
                    <div>
                      <p className="text-sm font-light text-slate-500 mb-1">Location</p>
                      <p className="text-slate-700">San Diego, CA (serving everywhere)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Encouragement */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop&crop=center"
            alt="Golden hour lake reflection"
            fill
            className="object-cover"
          />
          {/* Contemplative overlay */}
          <div className="absolute inset-0 bg-amber-50/85"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl font-light text-slate-600 leading-relaxed italic">
            "The cave you fear to enter holds the treasure you seek."
          </p>
          <p className="text-slate-500 font-light mt-4">
            — Joseph Campbell
          </p>
        </div>
      </section>
    </>
  )
}