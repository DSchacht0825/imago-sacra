import Image from 'next/image'
import Link from 'next/link'

export default function YvonneAraujoPage() {
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
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop&crop=face"
                  alt="Yvonne Araujo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Introduction */}
            <div>
              <h1 className="text-5xl font-light text-slate-800 mb-4">
                Yvonne Araujo
              </h1>
              <p className="text-xl text-slate-600 font-light mb-6">
                Worship Pastor, Musician & Spiritual Coach
              </p>
              <div className="space-y-4 text-slate-600">
                <p>
                  Director of Worship Arts at First Presbyterian Church of El Cajon
                </p>
                <p>
                  Drummer, Vocalist, Songwriter
                </p>
                <p>
                  Spiritual Director & Coach
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center text-slate-700 hover:text-slate-900 font-light transition-colors">
                  <span className="border-b border-slate-300 hover:border-slate-600 pb-1">
                    Connect with Yvonne
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
            About Yvonne
          </h2>

          <div className="prose prose-lg prose-slate max-w-none space-y-6">
            <p className="text-xl leading-relaxed text-slate-700">
              Yvonne Araujo is a worship pastor, musician, and spiritual coach whose heart beats for helping others encounter the presence of God in authentic and transformative ways. With years of experience leading worship as Director of Worship Arts at First Presbyterian Church of El Cajon, Yvonne has walked alongside people in seasons of celebration, struggle, and deep searching, offering both music and ministry as avenues of healing and hope.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              As a gifted drummer, vocalist, and songwriter, Yvonne has contributed to community-based projects such as Parish Collective Music and shared the stage with artists including Liz Vice. Her artistry is not just performance—it's prayer in motion, a way of guiding people into deeper awareness of God's love.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              Drawing from her journey in worship, pastoral leadership, and creative expression, Yvonne now offers spiritual coaching for those seeking clarity, encouragement, and renewed connection with their faith. She creates safe and compassionate spaces for reflection, blending pastoral insight, creative practices, and spiritual disciplines. Her approach is deeply relational, rooted in listening, prayer, and discernment, helping people align their lives with God's calling and navigate transitions with courage and grace.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              Whether through music, mentoring, or one-on-one spiritual direction, Yvonne's passion is to see people restored, grounded, and flourishing—living out their true identity and purpose in Christ.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-slate-800 mb-12 text-center">
            Yvonne's Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl">🎵</span>
                </div>
              </div>
              <h3 className="text-xl font-light text-slate-700 mb-2">
                Worship & Music
              </h3>
              <p className="text-slate-600">
                Using music and worship as pathways to encounter God's presence and experience transformation
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl">🤲</span>
                </div>
              </div>
              <h3 className="text-xl font-light text-slate-700 mb-2">
                Pastoral Care
              </h3>
              <p className="text-slate-600">
                Offering compassionate presence and spiritual guidance through life's celebrations and challenges
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
              </div>
              <h3 className="text-xl font-light text-slate-700 mb-2">
                Creative Expression
              </h3>
              <p className="text-slate-600">
                Integrating creative practices and spiritual disciplines to help people discover their authentic voice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-slate-800 mb-12 text-center">
            Experience & Credentials
          </h2>

          <div className="space-y-6">
            <div className="border-l-2 border-slate-200 pl-6">
              <h3 className="text-xl font-medium text-slate-700 mb-2">
                Director of Worship Arts
              </h3>
              <p className="text-slate-600 mb-1">First Presbyterian Church of El Cajon</p>
              <p className="text-slate-500">Leading worship and guiding congregations in authentic encounters with God</p>
            </div>

            <div className="border-l-2 border-slate-200 pl-6">
              <h3 className="text-xl font-medium text-slate-700 mb-2">
                Musician & Artist
              </h3>
              <p className="text-slate-600 mb-1">Parish Collective Music</p>
              <p className="text-slate-500">Contributing to community-based worship projects and collaborating with artists including Liz Vice</p>
            </div>

            <div className="border-l-2 border-slate-200 pl-6">
              <h3 className="text-xl font-medium text-slate-700 mb-2">
                Spiritual Coach & Director
              </h3>
              <p className="text-slate-600 mb-1">Private Practice</p>
              <p className="text-slate-500">Offering one-on-one spiritual direction and coaching for individuals seeking deeper faith connections</p>
            </div>

            <div className="border-l-2 border-slate-200 pl-6">
              <h3 className="text-xl font-medium text-slate-700 mb-2">
                Multi-Instrumentalist
              </h3>
              <p className="text-slate-600 mb-1">Drums, Vocals, Songwriting</p>
              <p className="text-slate-500">Using diverse musical gifts to create spaces for worship and spiritual expression</p>
            </div>
          </div>
        </div>
      </section>

      {/* Invitation Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-slate-800 mb-8">
            Begin Your Journey
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            If you're seeking spiritual direction, renewed connection with your faith, or guidance through life's transitions, Yvonne would be honored to walk alongside you.
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