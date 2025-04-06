import React from 'react';
import './Modal.css';

const Modal = ({ content, onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{content.title}</h2>
        <h4>{content.subtitle}</h4>
        <p>{content.description}</p>
      </div>
    </div>
  );
};

export default Modal;
