import WhoWeAre from '@/components/sections/WhoWeAre'
import { coaches } from '@/data/coaches'
import Image from 'next/image'

export default function WhoWeArePage() {
  return (
    <>
      {/* Main Who We Are Content */}
      <WhoWeAre />

      {/* Our Circle - Coach Profiles */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?w=1920&h=1080&fit=crop&crop=center"
            alt="Gentle mountain meadow"
            fill
            className="object-cover"
          />
          {/* Warm earth overlay */}
          <div className="absolute inset-0 bg-amber-50/85"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Our Circle
            </h2>
            <p className="text-xl font-light text-slate-600 max-w-3xl mx-auto">
              Each guide brings their own unique gifts and perspective to the sacred work of transformation.
            </p>
          </div>

          {/* Coaches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {coaches.map((coach) => (
              <div key={coach.id} className="text-center group">
                
                {/* Coach Image */}
                <div className="mb-6 relative w-48 h-48 mx-auto">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Coach Info */}
                <div>
                  <h3 className="text-2xl font-light text-slate-800 mb-2">
                    {coach.name}
                  </h3>
                  
                  <p className="text-slate-500 font-light mb-2">
                    {coach.title}
                  </p>
                  
                  <p className="text-sm text-slate-400 mb-4">
                    {coach.specialty}
                  </p>
                  
                  <p className="text-slate-600 font-light leading-relaxed mb-4">
                    {coach.bio}
                  </p>

                  {/* Availability Indicator */}
                  <div className={`inline-flex items-center text-sm ${
                    coach.availability === 'accepting' 
                      ? 'text-emerald-600' 
                      : coach.availability === 'waitlist'
                      ? 'text-amber-600'
                      : 'text-slate-400'
                  }`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      coach.availability === 'accepting' 
                        ? 'bg-emerald-400' 
                        : coach.availability === 'waitlist'
                        ? 'bg-amber-400'
                        : 'bg-slate-300'
                    }`}></div>
                    {coach.availability === 'accepting' 
                      ? 'Accepting new companions' 
                      : coach.availability === 'waitlist'
                      ? 'Waitlist available'
                      : 'Currently full'
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gentle Invitation */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop&crop=center"
            alt="Serene lake reflection"
            fill
            className="object-cover"
          />
          {/* Contemplative overlay */}
          <div className="absolute inset-0 bg-slate-50/90"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl font-light text-slate-600 leading-relaxed mb-8">
            If you feel drawn to walk this path with one of our guides, we invite you to reach out. 
            The first conversation is always an exploration, never an obligation.
          </p>
          <button className="group text-slate-700 hover:text-slate-900 font-light text-lg transition-colors duration-300">
            <span className="border-b border-slate-300 group-hover:border-slate-600 pb-1">
              Begin a conversation
            </span>
            <span className="ml-2 text-slate-400 group-hover:text-slate-600 transition-colors duration-300">
              →
            </span>
          </button>
        </div>
      </section>
    </>
  )
}