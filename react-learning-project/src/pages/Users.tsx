import React from 'react';
import { useUserStore } from '../store/userStore';
import { useFetch } from '../hooks/useFetch';
import { fetchUsers } from '../services/api';
import UserCard from '../components/UserCard';
import Loading from '../components/Loading';
import './Users.css';

/**
 * Users Page
 * Learn: Combining multiple hooks and stores
 */
const Users: React.FC = () => {
  const { user, setUser } = useUserStore();
  const { data: users, loading, error } = useFetch(fetchUsers, []);

  if (loading) return <Loading />;

  return (
    <div className="users-page">
      <div className="container">
        <div className="users-header">
          <h1>Users</h1>
          <p>Browse and select users from our platform</p>
        </div>

        {error && <div className="error">Failed to load users</div>}

        <div className="users-content">
          <div className="users-list">
            <h3>All Users</h3>
            {users && users.length > 0 ? (
              <div className="users-grid">
                {users.map((u) => (
                  <UserCard
                    key={u.id}
                    user={u}
                    onSelect={setUser}
                  />
                ))}
              </div>
            ) : (
              <p>No users found</p>
            )}
          </div>

          {user && (
            <div className="user-detail card">
              <h3>Selected User</h3>
              <div className="user-detail-content">
                <div className="detail-avatar">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} />
                  ) : (
                    <div className="avatar-placeholder">
                      {user.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <p className="label">Name</p>
                  <p className="value">{user.name}</p>
                  <p className="label">Email</p>
                  <p className="value">{user.email}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
