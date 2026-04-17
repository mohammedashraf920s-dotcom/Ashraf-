import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Layout, 
  Smartphone, 
  Video, 
  ShoppingBag, 
  Apple, 
  Code, 
  TrendingUp, 
  Bot,
  Globe,
  Monitor,
  CheckCircle2
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    id: 'fb-marketing',
    title: 'Facebook Marketing',
    description: 'High-ROI ad campaigns tailored to your target audience to drive sales and engagement.',
    icon: Facebook,
    color: 'blue'
  },
  {
    id: 'ig-marketing',
    title: 'Instagram Marketing',
    description: 'Visual storytelling and community management to grow your brand presence effectively.',
    icon: Instagram,
    color: 'purple'
  },
  {
    id: 'tiktok-marketing',
    title: 'TikTok Marketing',
    description: 'Viral content strategies and creator collaborations for the next generation of marketing.',
    icon: Smartphone, // Using Smartphone for TikTok vibe
    color: 'pink'
  },
  {
    id: 'yt-marketing',
    title: 'YouTube Marketing',
    description: 'Channel growth tactics and SEO optimization to dominate the world\'s largest video platform.',
    icon: Youtube,
    color: 'red'
  },
  {
    id: 'video-editing',
    title: 'Short Video Editing',
    description: 'Professional editing for Reels, Shorts, and TikToks designed for maximum retention.',
    icon: Video,
    color: 'indigo'
  },
  {
    id: 'apple-id-marketing',
    title: 'Apple ID Create Marketing',
    description: 'Specialized lead generation and account creation marketing strategies.',
    icon: Apple,
    color: 'gray'
  },
  {
    id: 'ecommerce-dev',
    title: 'E-commerce Development',
    description: 'AI-powered, high-converting online stores built on React or WordPress.',
    icon: ShoppingBag,
    color: 'green'
  }
];

export const SKILLS = {
  web: [
    { name: 'React / Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Tailwind CSS', level: 98 },
    { name: 'WordPress', level: 85 },
  ],
  marketing: [
    { name: 'Facebook Ads', level: 96 },
    { name: 'Google Ads', level: 88 },
    { name: 'SEO Strategy', level: 92 },
    { name: 'Conversion Optimization', level: 94 },
  ],
  ai: [
    { name: 'Gemini/GPT Integration', level: 90 },
    { name: 'AI Automation', level: 85 },
    { name: 'Midjourney/DALL-E', level: 80 },
  ]
};

export const PORTFOLIO = [
  {
    title: 'Zenith E-commerce',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/ecommerce/800/600',
    description: 'AI-powered custom storefront with dynamic pricing.',
  },
  {
    title: 'Global Brands Campaign',
    category: 'Digital Marketing',
    image: 'https://picsum.photos/seed/marketing/800/600',
    description: 'Multi-platform social media strategy driving 300% ROI.',
  },
  {
    title: 'Viral Shorts Series',
    category: 'Video Editing',
    image: 'https://picsum.photos/seed/video/800/600',
    description: 'Creative editing for a tech influencer, gaining 5M+ views.',
  },
  {
    title: 'Smart Funnel Pro',
    category: 'Marketing Automation',
    image: 'https://picsum.photos/seed/funnel/800/600',
    description: 'End-to-end automated lead magnet and sales funnel.',
  }
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechVentures',
    content: 'Ashraf transformed our online presence. His AI-driven approach to web development increased our conversion rate by 40% in just two months.',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Founder, EcoStream',
    content: 'The Facebook ad campaigns Ashraf managed were a game-changer. We saw immediate results and a significant jump in lead quality.',
    avatar: 'https://picsum.photos/seed/michael/100/100',
    rating: 5
  },
  {
    name: 'Amara Okafor',
    role: 'Marketing Dir, BoldStyle',
    content: 'Expert video editing that actually understands social algorithms. Our TikTok engagement has never been higher.',
    avatar: 'https://picsum.photos/seed/amara/100/100',
    rating: 5
  }
];

export const BLOG_POSTS = [
  {
    title: 'How AI is Changing Web Development in 2024',
    excerpt: 'Explore how generative AI is streamlining the coding process and what it means for developers.',
    date: 'April 12, 2024',
    category: 'AI & Tech'
  },
  {
    title: 'Mastering the TikTok Algorithm for Business',
    excerpt: 'Key strategies to ensure your business content goes viral and reaches the right audience.',
    date: 'April 5, 2024',
    category: 'Marketing'
  }
];
