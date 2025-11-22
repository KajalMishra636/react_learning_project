import React, { useState } from 'react';
import { Post } from '../types';
import { Heart, MessageCircle, Trash2 } from 'lucide-react';
import './PostCard.css';

/**
 * PostCard Component
 * Learn: Props, event handling, conditional rendering, icons
 */
interface PostCardProps {
  post: Post;
  onLike?: (postId: string) => void;
  onDelete?: (postId: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onLike, onDelete }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    onLike?.(post.id);
  };

  return (
    <div className="post-card card">
      <div className="post-header">
        <div className="post-author">
          <div className="author-avatar">{post.author.name.charAt(0)}</div>
          <div>
            <h4>{post.author.name}</h4>
            <p className="post-date">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        {onDelete && (
          <button
            className="btn-delete"
            onClick={() => onDelete(post.id)}
            title="Delete post"
          >
            <Trash2 size={20} />
          </button>
        )}
      </div>

      <h3 className="post-title">{post.title}</h3>
      <p className="post-content">{post.content}</p>

      <div className="post-stats">
        <button
          className={`stat-button ${liked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
          <span>{post.likes + (liked ? 1 : 0)}</span>
        </button>
        <button className="stat-button">
          <MessageCircle size={18} />
          <span>{post.comments.length}</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
