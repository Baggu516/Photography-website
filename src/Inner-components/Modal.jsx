// Modal.js

import React, { useState } from 'react';
import './modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  const modalClassName = isOpen ? 'modal open' : 'modal';

  return (
    <div className={modalClassName}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
