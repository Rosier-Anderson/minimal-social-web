// Interfaces for the Thread
export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  issuedAt: Date;
  avatar?: string;
}
export interface Thread {
  id: number;
  author_id: number;
  content: string;
  images?: string[];
  issuedAt: Date;
  stats: ThreadStats[];
  comment?: ThreadComment[];
  replies?: ThreadReplie[];
}

export interface ThreadStats {
  id: number;
  author_id: number;
  likes: number;
  comments?: number;
  repost?: number;
}

export interface ThreadComment {
  id: number;
  author_id: number;
  content: string;
  issuedAt: string;
  stats: ThreadStats;
}

export interface ThreadReplie {
  id: number;
  author_id: number;
  contents: string;
  stats: ThreadStats;
}
