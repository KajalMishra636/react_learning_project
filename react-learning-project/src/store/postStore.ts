import { create } from 'zustand';
import { Post } from '../types';

interface PostState {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  addPost: (post: Post) => void;
  deletePost: (id: string) => void;
}

/**
 * Zustand store for managing posts
 * Learn: State immutability and array operations
 */
export const usePostStore = create<PostState>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    })),
}));
