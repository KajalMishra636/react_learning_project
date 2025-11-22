import axios from 'axios';
import { Post, User } from '../types';

/**
 * API Service for handling all HTTP requests
 * Learn: Separation of concerns and API layer abstraction
 */

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});

// Fetch users (mock data)
export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await apiClient.get('/users');
    return response.data.slice(0, 5).map((user: any) => ({
      id: user.id.toString(),
      name: user.name,
      email: user.email,
    }));
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Fetch posts (mock data)
export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await apiClient.get('/posts?_limit=10');
    return response.data.map((post: any) => ({
      id: post.id.toString(),
      title: post.title,
      content: post.body,
      author: { id: '1', name: 'John Doe', email: 'john@example.com' },
      createdAt: new Date(),
      likes: Math.floor(Math.random() * 100),
      comments: [],
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

// Fetch single post
export const fetchPostById = async (id: string): Promise<Post | null> => {
  try {
    const response = await apiClient.get(`/posts/${id}`);
    return {
      id: response.data.id.toString(),
      title: response.data.title,
      content: response.data.body,
      author: { id: '1', name: 'John Doe', email: 'john@example.com' },
      createdAt: new Date(),
      likes: Math.floor(Math.random() * 100),
      comments: [],
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
};
