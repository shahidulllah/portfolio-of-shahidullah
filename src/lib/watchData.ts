export const categories = [
  {
    slug: "class",
    title: "Class Lectures",
    description:
      "Educational videos for classroom learning and academic subjects",
    videoCount: 8,
    playlists: [
      {
        slug: "english",
        title: "English Grammar",
        videos: [
          {
            id: "eng1",
            title: "Noun – Class 1",
            youtubeId: "dQw4w9WgXcQ",
            duration: "10:12",
          },
          {
            id: "eng2",
            title: "Pronoun – Class 1",
            youtubeId: "9bZkp7q19f0",
            duration: "12:05",
          },
          {
            id: "eng3",
            title: "Verb Tenses - Present, Past, Future",
            youtubeId: "JGKhC5-9NpA",
            duration: "15:30",
          },
        ],
      },
      {
        slug: "math",
        title: "Basic Mathematics",
        videos: [
          {
            id: "math1",
            title: "Algebra Basics",
            youtubeId: "NybHckSEQBI",
            duration: "18:45",
          },
          {
            id: "math2",
            title: "Geometry Fundamentals",
            youtubeId: "KG6ILNOiSjM",
            duration: "22:10",
          },
        ],
      },
      {
        slug: "science",
        title: "Science Experiments",
        videos: [
          {
            id: "sci1",
            title: "Chemistry Basics",
            youtubeId: "FSyAehMdpyI",
            duration: "14:20",
          },
          {
            id: "sci2",
            title: "Physics in Daily Life",
            youtubeId: "KvEzZdrP-7w",
            duration: "16:35",
          },
          {
            id: "sci3",
            title: "Biology - Human Body",
            youtubeId: "AHQGNb0zBgg",
            duration: "20:15",
          },
        ],
      },
    ],
  },
  {
    slug: "tutorial",
    title: "Tutorials",
    description: "Step-by-step tutorial videos on various topics",
    videoCount: 7,
    playlists: [
      {
        slug: "web-development",
        title: "Web Development",
        videos: [
          {
            id: "web1",
            title: "HTML Crash Course",
            youtubeId: "UB1O30fR-EE",
            duration: "45:20",
          },
          {
            id: "web2",
            title: "CSS Flexbox Complete Guide",
            youtubeId: "JJSoEo8JSnc",
            duration: "38:15",
          },
          {
            id: "web3",
            title: "JavaScript Fundamentals",
            youtubeId: "W6NZfCO5SIk",
            duration: "52:30",
          },
        ],
      },
      {
        slug: "graphic-design",
        title: "Graphic Design",
        videos: [
          {
            id: "design1",
            title: "Photoshop for Beginners",
            youtubeId: "IyR_uYsRdPs",
            duration: "28:40",
          },
          {
            id: "design2",
            title: "Logo Design Principles",
            youtubeId: "9qM6A0Q8g7I",
            duration: "34:25",
          },
        ],
      },
      {
        slug: "mobile-app",
        title: "Mobile App Development",
        videos: [
          {
            id: "app1",
            title: "React Native Tutorial",
            youtubeId: "0-S5a0eXPoc",
            duration: "41:10",
          },
          {
            id: "app2",
            title: "Flutter Basics",
            youtubeId: "1gDhl4leEzA",
            duration: "36:45",
          },
        ],
      },
    ],
  },
  {
    slug: "trending",
    title: "Trending Now",
    description: "Most popular and trending videos this week",
    videoCount: 5,
    playlists: [
      {
        slug: "viral-videos",
        title: "Viral Videos",
        videos: [
          {
            id: "viral1",
            title: "AI Tools That Will Blow Your Mind",
            youtubeId: "JkaxUblCGz0",
            duration: "11:45",
          },
          {
            id: "viral2",
            title: "Latest Tech Gadgets 2024",
            youtubeId: "PjJ6K5h6JvY",
            duration: "14:20",
          },
        ],
      },
      {
        slug: "tech-news",
        title: "Tech News",
        videos: [
          {
            id: "tech1",
            title: "Latest AI Developments",
            youtubeId: "YHFAfP6jRUM",
            duration: "16:30",
          },
          {
            id: "tech2",
            title: "Smartphone Comparison 2024",
            youtubeId: "pTr1IuXjqUE",
            duration: "18:15",
          },
          {
            id: "tech3",
            title: "Future of Web3",
            youtubeId: "wHTcrmhskto",
            duration: "22:40",
          },
        ],
      },
    ],
  },
  {
    slug: "music",
    title: "Music & Entertainment",
    description: "Music videos, covers, and entertainment content",
    videoCount: 6,
    playlists: [
      {
        slug: "guitar-lessons",
        title: "Guitar Lessons",
        videos: [
          {
            id: "music1",
            title: "Beginner Guitar Chords",
            youtubeId: "pCvSxQ7Qum8",
            duration: "25:10",
          },
          {
            id: "music2",
            title: "Fingerstyle Techniques",
            youtubeId: "l0N0QyNxM8U",
            duration: "32:45",
          },
        ],
      },
      {
        slug: "music-covers",
        title: "Music Covers",
        videos: [
          {
            id: "cover1",
            title: "Acoustic Cover of Popular Song",
            youtubeId: "2Vv-BfVoq4g",
            duration: "4:15",
          },
          {
            id: "cover2",
            title: "Piano Cover Collection",
            youtubeId: "7maJOI3QMu0",
            duration: "15:30",
          },
          {
            id: "cover3",
            title: "Bollywood Songs Mashup",
            youtubeId: "YYd-WtBzNpI",
            duration: "8:45",
          },
        ],
      },
      {
        slug: "music-production",
        title: "Music Production",
        videos: [
          {
            id: "prod1",
            title: "FL Studio Beginner Tutorial",
            youtubeId: "bMp1pSVxoqw",
            duration: "28:20",
          },
        ],
      },
    ],
  },
  {
    slug: "fitness",
    title: "Fitness & Health",
    description: "Workout routines, yoga, and health tips",
    videoCount: 4,
    playlists: [
      {
        slug: "home-workout",
        title: "Home Workout",
        videos: [
          {
            id: "fit1",
            title: "Full Body Home Workout",
            youtubeId: "ml6cT4xdxRg",
            duration: "20:30",
          },
          {
            id: "fit2",
            title: "No Equipment Cardio",
            youtubeId: "QCbqkDaLxpo",
            duration: "15:45",
          },
        ],
      },
      {
        slug: "yoga",
        title: "Yoga & Meditation",
        videos: [
          {
            id: "yoga1",
            title: "Morning Yoga Routine",
            youtubeId: "VpW33Celubg",
            duration: "18:20",
          },
          {
            id: "yoga2",
            title: "Stress Relief Meditation",
            youtubeId: "inpok4MKVLM",
            duration: "12:10",
          },
        ],
      },
    ],
  },
  {
    slug: "cooking",
    title: "Cooking & Recipes",
    description: "Delicious recipes and cooking techniques",
    videoCount: 3,
    playlists: [
      {
        slug: "beginner-recipes",
        title: "Beginner Recipes",
        videos: [
          {
            id: "cook1",
            title: "5 Easy Pasta Recipes",
            youtubeId: "C5J_2pYOx2M",
            duration: "24:30",
          },
          {
            id: "cook2",
            title: "Healthy Breakfast Ideas",
            youtubeId: "qT22hLZoxrQ",
            duration: "16:45",
          },
        ],
      },
      {
        slug: "baking",
        title: "Baking Tutorials",
        videos: [
          {
            id: "bake1",
            title: "Perfect Chocolate Cake",
            youtubeId: "BVR4GlnpQPs",
            duration: "32:15",
          },
        ],
      },
    ],
  },
  {
    slug: "travel",
    title: "Travel Vlogs",
    description: "Travel guides, vlogs, and destination reviews",
    videoCount: 4,
    playlists: [
      {
        slug: "asia-travel",
        title: "Asia Travel",
        videos: [
          {
            id: "travel1",
            title: "Japan Travel Guide 2024",
            youtubeId: "CxuiFnewl8k",
            duration: "28:40",
          },
          {
            id: "travel2",
            title: "Thailand Hidden Gems",
            youtubeId: "Mk3qkQRO3QU",
            duration: "22:15",
          },
        ],
      },
      {
        slug: "europe-travel",
        title: "Europe Travel",
        videos: [
          {
            id: "euro1",
            title: "Italy on a Budget",
            youtubeId: "hcqMpX7VXyI",
            duration: "31:20",
          },
          {
            id: "euro2",
            title: "Paris Travel Tips",
            youtubeId: "QbKp_TjXjxQ",
            duration: "19:45",
          },
        ],
      },
    ],
  },
  {
    slug: "business",
    title: "Business & Finance",
    description: "Entrepreneurship, investing, and finance education",
    videoCount: 5,
    playlists: [
      {
        slug: "startup",
        title: "Startup Guide",
        videos: [
          {
            id: "biz1",
            title: "How to Start a Business",
            youtubeId: "x-5jM9Fm4Cs",
            duration: "25:30",
          },
          {
            id: "biz2",
            title: "Digital Marketing Strategies",
            youtubeId: "5DdFwNq-bJI",
            duration: "33:15",
          },
        ],
      },
      {
        slug: "investing",
        title: "Investing Basics",
        videos: [
          {
            id: "inv1",
            title: "Stock Market for Beginners",
            youtubeId: "p7HKvqRI_Bo",
            duration: "29:40",
          },
          {
            id: "inv2",
            title: "Cryptocurrency Explained",
            youtubeId: "1YyAzVmP9xQ",
            duration: "26:20",
          },
          {
            id: "inv3",
            title: "Real Estate Investment Tips",
            youtubeId: "q9GQlN3oVQs",
            duration: "35:10",
          },
        ],
      },
    ],
  },
  {
    slug: "gaming",
    title: "Gaming",
    description: "Gameplay, reviews, and gaming news",
    videoCount: 4,
    playlists: [],
  },
];
