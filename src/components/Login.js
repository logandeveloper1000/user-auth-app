import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import AlertModal from './AlertModal';
import './AuthForm.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({ type: '', message: '' });
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setAlert({ type: 'success', message: 'Login successful!' });
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch (err) {
      const cleanMessage = err.message.replace(/^Firebase:\s*/, '').trim();
      setAlert({ type: 'error', message: cleanMessage });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setAlert({ type: 'success', message: 'Logged in with Google successfully!' });
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch (err) {
      const cleanMessage = err.message.replace(/^Firebase:\s*/, '').trim();
      setAlert({ type: 'error', message: cleanMessage });
    }
  };

  return (
    <>
      <AlertModal
        type={alert.type}
        message={alert.message}
        onClose={() => setAlert({ type: '', message: '' })}
      />
      <div className="auth-form-container">
        <h2>Log In</h2>
        <form onSubmit={login}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>

        <button
          onClick={handleGoogleLogin}
          style={{
            width: '100%',
            padding: '0.75rem',
            background: '#DB4437',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: '1rem',
            fontSize: '1rem'
          }}
        >
          Sign in with Google
        </button>

        <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.95rem' }}>
          Don’t have an account? <a href="/">Sign Up</a>
        </p>
      </div>
    </>
  );
}

export default Login;
