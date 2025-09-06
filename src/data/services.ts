export interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  features: string[]
  price: string
  duration: string
  icon: string
  biblical_foundation?: string
}

export const services: Service[] = [
  {
    id: 'covenant-coaching',
    title: 'Covenant Coaching',
    subtitle: 'One-on-One Individual Coaching',
    description: 'Deep, personalized coaching rooted in biblical principles to help you discover your God-given identity and purpose.',
    features: [
      '90-minute deep-dive sessions',
      'Biblical foundation for transformation',
      'Personalized prayer and reflection exercises',
      'Identity in Christ discovery',
      'Purpose and calling alignment',
      'Ongoing support between sessions'
    ],
    price: '$150/session',
    duration: '90 minutes',
    icon: '✝️',
    biblical_foundation: 'Jeremiah 29:11 - "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, to give you hope and a future."'
  },
  {
    id: 'kingdom-community',
    title: 'Kingdom Community',
    subtitle: 'Faith-Based Group Coaching',
    description: 'Join a supportive community of believers growing together in faith, purpose, and authentic relationships.',
    features: [
      'Small group of 6-8 participants',
      '8-week transformation journey',
      'Weekly 2-hour group sessions',
      'Biblical study and reflection',
      'Peer accountability and support',
      'Community prayer and encouragement'
    ],
    price: '$75/session',
    duration: '8 weeks, 2 hours/week',
    icon: '👥',
    biblical_foundation: 'Ecclesiastes 4:12 - "Though one may be overpowered, two can defend themselves. A cord of three strands is not quickly broken."'
  },
  {
    id: 'prophetic-speaking',
    title: 'Prophetic Speaking',
    subtitle: 'Ministry & Conference Speaking',
    description: 'Inspiring messages that combine coaching principles with biblical truth for churches, conferences, and Christian organizations.',
    features: [
      'Customized messages for your audience',
      'Biblical foundation with practical application',
      'Interactive workshops available',
      'Retreat and conference speaking',
      'Leadership development sessions',
      'Q&A and ministry time included'
    ],
    price: 'Contact for pricing',
    duration: 'Varies by event',
    icon: '🎤',
    biblical_foundation: '2 Timothy 4:2 - "Preach the word; be prepared in season and out of season; correct, rebuke and encourage—with great patience and careful instruction."'
  }
]