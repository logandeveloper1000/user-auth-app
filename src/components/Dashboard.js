import React, { useState } from 'react';
import { auth } from '../firebase';
import { signOut, deleteUser } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from './ConfirmModal';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSignOut = () => {
    signOut(auth).then(() => navigate('/login'));
  };

  const handleDeleteAccount = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        await deleteUser(user);
        navigate('/');
      } catch (err) {
        alert('Error deleting user: ' + err.message.replace(/^Firebase:\s*/, '').trim());
      }
    }
  };

  return (
    <>
      <ConfirmModal
        show={showConfirm}
        message="Are you sure you want to permanently delete your account? This action cannot be undone."
        onConfirm={() => {
          setShowConfirm(false);
          handleDeleteAccount();
        }}
        onCancel={() => setShowConfirm(false)}
      />
      <div className="dashboard-container">
        <h1>Welcome to your Dashboard</h1>
        <button onClick={handleSignOut} className="dashboard-btn signout">
          Sign Out
        </button>
        <button
          onClick={() => setShowConfirm(true)}
          className="dashboard-btn delete"
        >
          Delete Account
        </button>
      </div>
    </>
  );
}

export default Dashboard;
