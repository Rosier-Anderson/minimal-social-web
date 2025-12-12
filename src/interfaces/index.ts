// Interfaces for the Thread
export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
}
export interface Thread {
  id: number;
  author: User;
  content: string;
  images?: string[];
  stats: ThreadStats;
}

export interface ThreadStats {
  id: number;
  likes: number;
  comments?: number;
  repost?: number;
}

export interface ThreadComments {
  id: number;
  author: User;
  content: string;
  createdAt: string;
  stats: ThreadStats;
}

export interface ThreadReplies {
  id: number;
  author: User;
  contents: string;
  stats: ThreadStats;
}
