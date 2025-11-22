// Type definitions for the application

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: User;
  createdAt: Date;
  likes: number;
  comments: Comment[];
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}
