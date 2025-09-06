export interface Testimonial {
  id: string
  name: string
  title: string
  company?: string
  testimonial: string
  service: string
  rating: number
  image?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Marketing Director',
    company: 'Christian Ministry',
    testimonial: 'Through Covenant Coaching, I discovered not just my career path, but my calling. Daniel helped me see how God created me uniquely for His purposes. The biblical foundation combined with practical coaching tools transformed both my faith and my professional life.',
    service: 'Covenant Coaching',
    rating: 5,
    image: '/images/testimonials/sarah.jpg'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    title: 'Pastor',
    company: 'Grace Community Church',
    testimonial: 'The Kingdom Community group was exactly what I needed. Being surrounded by other believers who were also seeking Gods direction created such a powerful environment for growth. I learned as much from my fellow participants as I did from Daniel.',
    service: 'Kingdom Community',
    rating: 5,
    image: '/images/testimonials/michael.jpg'
  },
  {
    id: '3',
    name: 'Jennifer Chen',
    title: 'Entrepreneur',
    testimonial: 'I was struggling with whether to start my own business or stay in corporate. Daniel helped me pray through the decision and discover how my entrepreneurial calling aligns with Gods plan for my life. I now run a thriving faith-based business.',
    service: 'Covenant Coaching',
    rating: 5,
    image: '/images/testimonials/jennifer.jpg'
  },
  {
    id: '4',
    name: 'David Thompson',
    title: 'Conference Organizer',
    company: 'Leadership Summit',
    testimonial: 'Daniels speaking at our annual leadership conference was transformational. He masterfully weaved biblical principles with practical coaching insights. Our attendees are still talking about his message months later.',
    service: 'Prophetic Speaking',
    rating: 5,
    image: '/images/testimonials/david.jpg'
  },
  {
    id: '5',
    name: 'Lisa Martinez',
    title: 'Stay-at-Home Mom',
    testimonial: 'I thought my season of life limited my purpose, but through coaching I realized God had placed me exactly where He wanted me. Daniel helped me see how motherhood is part of my calling, not separate from it.',
    service: 'Kingdom Community',
    rating: 5,
    image: '/images/testimonials/lisa.jpg'
  }
]