import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import AlertModal from './AlertModal';
import './AuthForm.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({ type: '', message: '' });
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setAlert({ type: 'success', message: 'Account created successfully!' });
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch (err) {
      const cleanMessage = err.message.replace(/^Firebase:\s*/, '').trim();
      setAlert({ type: 'error', message: cleanMessage });
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setAlert({ type: 'success', message: 'Signed up with Google successfully!' });
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
        <h2>Create Account</h2>
        <form onSubmit={signUp}>
          <input
            type="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>

        <button
          onClick={handleGoogleSignup}
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
          Sign up with Google
        </button>

        <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.95rem' }}>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </>
  );
}

export default Signup;
