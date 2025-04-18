export interface User {
  id: number;
  name: string;
  email: string;
  posts: Post[];
}

export interface Post {
  id: number;
  content: string;
  timestamp: string;
  comments: Comment[];
}

export interface Comment {
  id: number;
  content: string;
  timestamp: string;
}
