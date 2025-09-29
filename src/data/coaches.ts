export interface Coach {
  id: string
  name: string
  title: string
  specialty: string
  bio: string
  approach: string
  image: string
  credentials: string[]
  availability: 'accepting' | 'waitlist' | 'full'
}

export const coaches: Coach[] = [
  {
    id: 'marcus',
    name: 'Marcus Rodriguez',
    title: 'Transformation Companion',
    specialty: 'Life Transitions & Grief',
    bio: 'Having walked through his own dark valleys, Marcus offers compassionate presence to those navigating life\'s most challenging passages.',
    approach: 'Trauma-informed coaching that honors the sacred within suffering and the possibility of resurrection.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    credentials: ['Licensed Clinical Social Worker', 'Grief Recovery Specialist', 'Somatic Experiencing Practitioner'],
    availability: 'waitlist'
  },
  {
    id: 'yvonne',
    name: 'Yvonne Araujo',
    title: 'Worship Pastor & Spiritual Coach',
    specialty: 'Worship, Spiritual Direction & Creative Expression',
    bio: 'A worship pastor, musician, and spiritual coach whose heart beats for helping others encounter the presence of God in authentic and transformative ways. With years of experience leading worship and walking alongside people in seasons of celebration and struggle.',
    approach: 'Drawing from her journey in worship, pastoral leadership, and creative expression, Yvonne creates safe and compassionate spaces for reflection, blending pastoral insight, creative practices, and spiritual disciplines.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    credentials: ['Director of Worship Arts - First Presbyterian El Cajon', 'Parish Collective Music', 'Spiritual Direction & Coaching'],
    availability: 'accepting'
  },
  {
    id: 'derek',
    name: 'Derek Rice',
    title: 'Worship Pastor & Spiritual Coach',
    specialty: 'Worship Leadership & Spiritual Formation',
    bio: 'A worship pastor, mentor, and spiritual coach based in San Diego. With years of leading worship and guiding teams, Derek brings both pastoral sensitivity and artistic insight to spiritual journeys.',
    approach: 'Relational and holistic coaching that combines spiritual disciplines, prayer, contemplative practices, and practical life coaching tools to support clients in seasons of waiting, transition, or spiritual longing.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    credentials: ['Worship Pastor', 'Spiritual Coach & Mentor', 'Group Facilitation'],
    availability: 'accepting'
  },
  {
    id: 'david',
    name: 'David Kim',
    title: 'Relationship Weaver',
    specialty: 'Community & Connection',
    bio: 'A student of sacred relationship who understands that we discover ourselves most fully in authentic connection with others.',
    approach: 'Relational coaching that explores how we show up in relationship with ourselves, others, and the Divine.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
    credentials: ['Marriage & Family Therapist', 'Gottman Method Couples Training', 'Certificate in Group Dynamics'],
    availability: 'accepting'
  }
]

export const collectiveInfo = {
  founded: '2019',
  location: 'San Diego, CA (with coaches worldwide)',
  philosophy: 'We believe transformation happens in community, through presence, and with reverence for the sacred journey each soul is walking.',
  approach: 'Our coaching is less about fixing and more about awakening—helping you remember who you\'ve always been beneath the layers of expectation and conditioning.',
  commitment: 'We commit to showing up as our authentic selves, to holding space for whatever arises, and to trusting the wisdom that emerges when souls gather in sacred intention.'
}