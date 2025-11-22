import React from 'react';
import { usePostStore } from '../store/postStore';
import { useFetch } from '../hooks/useFetch';
import { fetchPosts } from '../services/api';
import PostCard from '../components/PostCard';
import Loading from '../components/Loading';
import './Posts.css';

/**
 * Posts Page
 * Learn: Zustand state management, custom hooks, error handling
 */
const Posts: React.FC = () => {
  const { posts, setPosts, deletePost } = usePostStore();
  const { loading, error } = useFetch(fetchPosts, []);

  React.useEffect(() => {
    if (!loading && !error) {
      fetchPosts().then(setPosts);
    }
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="posts-page">
      <div className="container">
        <div className="posts-header">
          <h1>Posts</h1>
          <p>Explore posts from our community</p>
        </div>

        {error && <div className="error">Failed to load posts</div>}

        {posts.length === 0 ? (
          <div className="empty-state">
            <p>No posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="posts-list">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onDelete={deletePost}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
