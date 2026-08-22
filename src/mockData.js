export const initialCampaigns = [
  {
    id: 'camp-1',
    title: 'Apex AI - SaaS Product Launch Clips',
    brandName: 'Apex AI Studios',
    brandAvatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80',
    platform: 'TikTok',
    category: 'AI & SaaS',
    payoutPer1k: 2.50,
    totalBudget: 10000,
    spentBudget: 4320,
    maxPayoutPerClip: 500,
    minViewsForPayout: 1000,
    totalViews: 1728000,
    assetsUrl: 'https://drive.google.com/drive/folders/apex-ai-assets',
    brief: 'Clip podcast interviews and screen demos of Apex AI. Use fast-paced captions and viral hook text.',
    requirements: [
      'Must include hashtag #ApexAI in caption',
      'Must tag @ApexAI_Official',
      'Link to Apex AI must be in bio or pinned comment',
      'Minimum 1,000 views to qualify for payout'
    ],
    status: 'Active',
    createdAt: '2026-08-15'
  },
  {
    id: 'camp-2',
    title: 'Crypto Alpha Podcast - Daily Shorts',
    brandName: 'BlockChain Daily',
    brandAvatar: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=120&auto=format&fit=crop&q=80',
    platform: 'YouTube Shorts',
    category: 'Crypto & Finance',
    payoutPer1k: 3.00,
    totalBudget: 15000,
    spentBudget: 8900,
    maxPayoutPerClip: 750,
    minViewsForPayout: 2000,
    totalViews: 2966000,
    assetsUrl: 'https://dropbox.com/sh/crypto-alpha-clips',
    brief: 'Highlight crazy market predictions, meme moments, and hot takes from episode #42 and #43.',
    requirements: [
      'Focus on trading alpha and intense reactions',
      'Include text overlay for key stats',
      'Must link podcast in description'
    ],
    status: 'Active',
    createdAt: '2026-08-18'
  },
  {
    id: 'camp-3',
    title: 'HyperDrive Energy Drink - Viral Edits',
    brandName: 'HyperDrive Labs',
    brandAvatar: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=120&auto=format&fit=crop&q=80',
    platform: 'Instagram Reels',
    category: 'Gaming & Fitness',
    payoutPer1k: 1.80,
    totalBudget: 8000,
    spentBudget: 2150,
    maxPayoutPerClip: 350,
    minViewsForPayout: 1000,
    totalViews: 1194000,
    assetsUrl: 'https://drive.google.com/drive/folders/hyperdrive-raw-footage',
    brief: 'High-energy gameplay clips and extreme sports syncs with HyperDrive branding transition.',
    requirements: [
      'Must use trending audio',
      'Must feature can placement or logo watermark',
      'Hashtag #FuelTheHype'
    ],
    status: 'Active',
    createdAt: '2026-08-20'
  },
  {
    id: 'camp-4',
    title: 'Solana Trading Bot - Reels & Shorts',
    brandName: 'SolSpeed Bot',
    brandAvatar: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=120&auto=format&fit=crop&q=80',
    platform: 'TikTok',
    category: 'Crypto & Finance',
    payoutPer1k: 3.50,
    totalBudget: 20000,
    spentBudget: 12400,
    maxPayoutPerClip: 1000,
    minViewsForPayout: 3000,
    totalViews: 3542000,
    assetsUrl: 'https://mega.nz/folder/solspeed-media',
    brief: 'Show profit screenshots, quick sniper tutorial clips, and community reactions.',
    requirements: [
      'Must show bot UI in action',
      'Must include risk disclaimer',
      'Referral link in bio mandatory'
    ],
    status: 'Active',
    createdAt: '2026-08-10'
  },
  {
    id: 'camp-5',
    title: 'Streamer Rage Moments - Kick Clips',
    brandName: 'Kick Stream Highlights',
    brandAvatar: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=120&auto=format&fit=crop&q=80',
    platform: 'Kick',
    category: 'Gaming',
    payoutPer1k: 1.50,
    totalBudget: 5000,
    spentBudget: 3800,
    maxPayoutPerClip: 250,
    minViewsForPayout: 1000,
    totalViews: 2533000,
    assetsUrl: 'https://drive.google.com/drive/folders/streamer-fails',
    brief: 'Funniest twitch/kick streamer fails, keyboard smashes, and clutch wins.',
    requirements: [
      'Subtitles for all dialogue',
      'Zoom ins on creator face cam'
    ],
    status: 'Active',
    createdAt: '2026-08-12'
  }
];

export const initialSubmissions = [
  {
    id: 'sub-101',
    campaignId: 'camp-1',
    campaignTitle: 'Apex AI - SaaS Product Launch Clips',
    clipperHandle: '@viral_clipper_99',
    clipperAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.tiktok.com/@viral_clipper_99/video/7391209381',
    platform: 'TikTok',
    views: 145000,
    payoutRate: 2.50,
    grossPayout: 362.50,
    platformFee: 45.31, // 12.5%
    netPayout: 317.19,
    status: 'Paid',
    submittedAt: '2026-08-21 14:30',
    proofScreenshot: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'sub-102',
    campaignId: 'camp-2',
    campaignTitle: 'Crypto Alpha Podcast - Daily Shorts',
    clipperHandle: '@cryptoclips_master',
    clipperAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80',
    videoUrl: 'https://youtube.com/shorts/x9K2pL0mNs8',
    platform: 'YouTube Shorts',
    views: 210000,
    payoutRate: 3.00,
    grossPayout: 630.00,
    platformFee: 78.75,
    netPayout: 551.25,
    status: 'Pending',
    submittedAt: '2026-08-22 09:15',
    proofScreenshot: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'sub-103',
    campaignId: 'camp-4',
    campaignTitle: 'Solana Trading Bot - Reels & Shorts',
    clipperHandle: '@solana_king',
    clipperAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    videoUrl: 'https://tiktok.com/@solana_king/video/7388912301',
    platform: 'TikTok',
    views: 88000,
    payoutRate: 3.50,
    grossPayout: 308.00,
    platformFee: 38.50,
    netPayout: 269.50,
    status: 'Approved',
    submittedAt: '2026-08-22 11:45',
    proofScreenshot: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'sub-104',
    campaignId: 'camp-3',
    campaignTitle: 'HyperDrive Energy Drink - Viral Edits',
    clipperHandle: '@editsby_sam',
    clipperAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    videoUrl: 'https://instagram.com/reels/C9x8Lp1o0K9',
    platform: 'Instagram Reels',
    views: 45000,
    payoutRate: 1.80,
    grossPayout: 81.00,
    platformFee: 10.13,
    netPayout: 70.87,
    status: 'Paid',
    submittedAt: '2026-08-20 18:20',
    proofScreenshot: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&auto=format&fit=crop&q=80'
  }
];

export const topClippers = [
  {
    rank: 1,
    handle: '@cryptoclips_master',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80',
    totalViews: '4.8M',
    totalEarnings: 4210.50,
    badge: '🔥 Viral God',
    approvedClips: 28
  },
  {
    rank: 2,
    handle: '@solana_king',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    totalViews: '3.2M',
    totalEarnings: 3150.00,
    badge: '⚡ Top Clipper',
    approvedClips: 19
  },
  {
    rank: 3,
    handle: '@viral_clipper_99',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
    totalViews: '2.6M',
    totalEarnings: 2480.20,
    badge: '💎 Diamond Cutter',
    approvedClips: 15
  },
  {
    rank: 4,
    handle: '@editsby_sam',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    totalViews: '1.9M',
    totalEarnings: 1720.00,
    badge: '🚀 Rising Star',
    approvedClips: 11
  },
  {
    rank: 5,
    handle: '@shortsking_alex',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
    totalViews: '1.4M',
    totalEarnings: 1290.40,
    badge: '🎯 Sharp Clipper',
    approvedClips: 9
  }
];
