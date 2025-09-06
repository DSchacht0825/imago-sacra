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
    id: 'daniel',
    name: 'Daniel Schacht',
    title: 'Circle Keeper',
    specialty: 'Identity & Calling Discernment',
    bio: 'A fellow seeker who believes every soul carries a sacred blueprint waiting to be discovered. Daniel creates spaces where the deepest questions can breathe.',
    approach: 'Contemplative coaching that honors both the mystery of faith and the practical needs of daily life.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    credentials: ['ICF Certified Coach', 'Spiritual Direction Certificate', 'Masters in Theology'],
    availability: 'accepting'
  },
  {
    id: 'sarah',
    name: 'Sarah Chen',
    title: 'Presence Guide',
    specialty: 'Mindfulness & Spiritual Formation',
    bio: 'A bridge between ancient wisdom and modern living, Sarah helps others discover the sacred in the ordinary.',
    approach: 'Integrative practices that weave contemplation, embodiment, and everyday spirituality.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b000?w=400&h=400&fit=crop&crop=face',
    credentials: ['Certified Mindfulness Teacher', 'Spiritual Formation Institute', 'MA in Contemplative Studies'],
    availability: 'accepting'
  },
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
    id: 'elena',
    name: 'Elena Thompson',
    title: 'Creative Awakener',
    specialty: 'Creativity & Expression',
    bio: 'An artist-mystic who believes creativity is prayer in motion. Elena helps others discover their unique voice in the divine symphony.',
    approach: 'Arts-based spiritual direction that uses creativity as a pathway to the soul.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    credentials: ['MFA in Creative Arts', 'Expressive Arts Therapy', 'Certificate in Spiritual Direction'],
    availability: 'accepting'
  },
  {
    id: 'david',
    name: 'David Kim',
    title: 'Relationship Weaver',
    specialty: 'Community & Connection',
    bio: 'A student of sacred relationship who understands that we discover ourselves most fully in authentic connection with others.',
    approach: 'Relational coaching that explores how we show up in relationship with ourselves, others, and the Divine.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
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