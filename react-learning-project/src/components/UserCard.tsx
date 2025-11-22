import React from 'react';
import { User } from '../types';
import './UserCard.css';

/**
 * UserCard Component
 * Learn: Props, TypeScript interfaces, functional components
 */
interface UserCardProps {
  user: User;
  onSelect?: (user: User) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onSelect }) => {
  return (
    <div className="user-card card" onClick={() => onSelect?.(user)}>
      <div className="user-card-avatar">
        {user.avatar ? (
          <img src={user.avatar} alt={user.name} />
        ) : (
          <div className="avatar-placeholder">{user.name.charAt(0)}</div>
        )}
      </div>
      <div className="user-card-content">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
