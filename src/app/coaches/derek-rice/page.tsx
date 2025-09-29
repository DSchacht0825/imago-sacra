import Image from 'next/image'
import Link from 'next/link'

export default function DerekRicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop&crop=face"
                  alt="Derek Rice"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Introduction */}
            <div>
              <h1 className="text-5xl font-light text-slate-800 mb-4">
                Derek Rice
              </h1>
              <p className="text-xl text-slate-600 font-light mb-6">
                Worship Pastor, Mentor & Spiritual Coach
              </p>
              <div className="space-y-4 text-slate-600">
                <p>
                  Based in San Diego
                </p>
                <p>
                  Worship Leader & Team Guide
                </p>
                <p>
                  One-on-One & Group Coaching
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center text-slate-700 hover:text-slate-900 font-light transition-colors">
                  <span className="border-b border-slate-300 hover:border-slate-600 pb-1">
                    Connect with Derek
                  </span>
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Bio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-slate-800 mb-12 text-center">
            About Derek
          </h2>

          <div className="prose prose-lg prose-slate max-w-none space-y-6">
            <p className="text-xl leading-relaxed text-slate-700">
              Derek Rice is a worship pastor, mentor, and spiritual coach based in San Diego. With years of leading worship in churches, guiding worship teams, and cultivating environments of worship, Derek brings both pastoral sensitivity and artistic insight to the spiritual journeys he walks alongside.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              Known for his authentic leadership and deep love for God, Derek has stood on stage and behind the scenes, shepherding hearts toward worship, unity, and growth. In his new calling as a spiritual coach, he offers one-on-one guidance and group coaching designed to help believers cultivate clarity, resilience, and alignment with God's purpose for their lives.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              Derek's approach is relational and holistic: he combines spiritual disciplines, prayer, contemplative practices, and practical life coaching tools to support clients wherever they are—whether in a season of waiting, vocational transition, or deep spiritual longing. His coaching style honors each person's journey, encourages self-discovery, and helps translate spiritual growth into everyday life rhythms.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              More than a pastor or coach, Derek sees himself as a companion: walking with people as they lean into God, overcome resistance, and step into deeper identity and calling in Christ.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-slate-800 mb-12 text-center">
            Derek's Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl">🎵</span>
                </div>
              </div>
              <h3 className="text-xl font-light text-slate-700 mb-2">
                Worship Leadership
              </h3>
              <p className="text-slate-600">
                Cultivating environments of authentic worship and guiding hearts toward unity and growth
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl">🙏</span>
                </div>
              </div>
              <h3 className="text-xl font-light text-slate-700 mb-2">
                Spiritual Disciplines
              </h3>
              <p className="text-slate-600">
                Integrating prayer, contemplative practices, and practical tools for spiritual formation
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
              </div>
              <h3 className="text-xl font-light text-slate-700 mb-2">
                Relational Coaching
              </h3>
              <p className="text-slate-600">
                Walking alongside people as a companion in their journey toward deeper identity in Christ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Derek Offers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-slate-800 mb-12 text-center">
            What Derek Offers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-slate-200 rounded-lg p-8">
              <h3 className="text-2xl font-light text-slate-700 mb-4">
                One-on-One Coaching
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  Personal spiritual direction and guidance
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  Support through vocational transitions
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  Clarity and alignment with God's purpose
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  Overcoming spiritual resistance and obstacles
                </li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-lg p-8">
              <h3 className="text-2xl font-light text-slate-700 mb-4">
                Group Coaching
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  Worship team development and mentoring
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  Small group spiritual formation
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  Community-based growth experiences
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  Cultivating unity and authentic connection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seasons Derek Walks With Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-slate-800 mb-12 text-center">
            Seasons Derek Walks Through With You
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-slate-300 pl-6">
              <h3 className="text-xl font-medium text-slate-700 mb-2">
                Seasons of Waiting
              </h3>
              <p className="text-slate-600">
                When God seems silent and the path ahead is unclear, Derek offers patient presence and practical tools for finding peace in the waiting.
              </p>
            </div>

            <div className="border-l-4 border-slate-300 pl-6">
              <h3 className="text-xl font-medium text-slate-700 mb-2">
                Vocational Transitions
              </h3>
              <p className="text-slate-600">
                Navigating changes in calling, career, or ministry with wisdom, discernment, and courage to step into new territories.
              </p>
            </div>

            <div className="border-l-4 border-slate-300 pl-6">
              <h3 className="text-xl font-medium text-slate-700 mb-2">
                Deep Spiritual Longing
              </h3>
              <p className="text-slate-600">
                When your soul hungers for more of God, Derek helps create space for deeper encounter and authentic spiritual expression.
              </p>
            </div>

            <div className="border-l-4 border-slate-300 pl-6">
              <h3 className="text-xl font-medium text-slate-700 mb-2">
                Leadership Development
              </h3>
              <p className="text-slate-600">
                Growing in your capacity to lead with authenticity, shepherd hearts, and create environments where others can flourish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Invitation Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-slate-800 mb-8">
            Begin Your Journey
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Whether you're in a season of waiting, transition, or deep spiritual longing, Derek would be honored to walk alongside you as a companion on your journey.
          </p>
          <p className="text-lg text-slate-500 mb-12">
            The first conversation is always an invitation to explore, never an obligation.
          </p>
          <Link href="/contact" className="inline-flex items-center text-lg text-slate-700 hover:text-slate-900 font-light transition-colors">
            <span className="border-b-2 border-slate-300 hover:border-slate-600 pb-1">
              Schedule a Conversation
            </span>
            <span className="ml-3">→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}