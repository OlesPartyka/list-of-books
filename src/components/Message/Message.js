import React, { useEffect } from 'react';
import './Message.scss';

const Message = ({ message, type, clearMessage }) => {
  useEffect(() => {
    if (message && clearMessage) {
      const timer = setTimeout(() => {
        clearMessage();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message, clearMessage]);

  if (!message) return null;

  return (
    <div className={`message ${type === 'error' ? 'message--error' : 'message--success'}`}>
      {message}
    </div>
  );
};

export default Message;

