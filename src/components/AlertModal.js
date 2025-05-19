// src/components/AlertModal.js
import React from 'react';
import './AlertModal.css';

function AlertModal({ type, message, onClose }) {
  if (!message) return null;

  const isSuccess = type === 'success';

  return (
    <div className={`alert-modal ${isSuccess ? 'success' : 'error'}`}>
      <div className="alert-header">
        {isSuccess ? 'Success' : 'Error'}
      </div>
      <div className="alert-body">
        {message}
      </div>
      <button className="alert-close" onClick={onClose}>×</button>
    </div>
  );
}

export default AlertModal;
