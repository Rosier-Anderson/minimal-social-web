export const fakeThread = {
  id: "thread_001",
  author: {
    id: "user_100",
    name: "John Doe",
    username: "johndoe",
    avatar: "/images/avatars/user1.png",
  },
  content: "Just finished building my new minimal social UI. Thoughts? 👀",
  createdAt: "2025-01-12T14:35:00Z",
  stats: {
    likes: 142,
    reposts: 18,
    comments: 26,
  },
  images: [
    "/images/posts/ui-preview-1.png",
    "/images/posts/ui-preview-2.png",
  ],
  comments: [
    {
      id: "comment_001",
      author: {
        id: "user_234",
        name: "Sarah Smith",
        username: "sarahcodes",
        avatar: "/images/avatars/user2.png",
      },
      content: "This looks super clean! 🔥",
      createdAt: "2025-01-12T15:00:00Z",
      stats: {
        likes: 12,
      },
      replies: [
        {
          id: "reply_001",
          author: {
            id: "user_567",
            name: "Mike Lin",
            username: "devmike",
            avatar: "/images/avatars/user3.png",
          },
          content: "Agree — love the minimalism!",
          createdAt: "2025-01-12T15:10:00Z",
          stats: {
            likes: 3,
          },
        },
      ],
    },
    {
      id: "comment_002",
      author: {
        id: "user_891",
        name: "Alex Rivera",
        username: "alexdesigns",
        avatar: "/images/avatars/user4.png",
      },
      content: "Can you share the component structure?",
      createdAt: "2025-01-12T15:20:00Z",
      stats: {
        likes: 7,
      },
      replies: [],
    },
  ],
};
