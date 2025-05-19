// src/components/ConfirmModal.js
import React from 'react';
import './AlertModal.css';

function ConfirmModal({ show, message, onConfirm, onCancel }) {
  if (!show) return null;

  return (
    <div className="alert-modal error">
      <div className="alert-header">Confirm Deletion</div>
      <div className="alert-body">{message}</div>
      <div style={{ padding: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '10px', background: '#f9f9f9' }}>
        <button
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: 'none',
            background: '#6c757d',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: 'none',
            background: '#dc3545',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
          onClick={onConfirm}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmModal;
