import React, { useState } from 'react';
import './BookList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteBook } from '../../api/booksApi';
import Message from '../Message/Message';

const BookList = ({ books = [], onEdit, onDelete }) => {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleDelete = (id) => {
    deleteBook(id)
      .then(() => {
        setMessage('Book deleted successfully.');
        setMessageType('success');
        onDelete(); 
      })
      .catch(() => {
        setMessage('Failed to delete book.');
        setMessageType('error');
      });
  };

  const clearMessage = () => {
    setMessage('');
    setMessageType('');
  };

  return (
    <>
      <Message 
        message={message} 
        type={messageType} 
        clearMessage={clearMessage} 
      />
      {books.length > 0 ? (
        <ul className='list-group'>
          {books.map((book) => (
            <li
              key={book.id} 
              className='list-group-item d-flex justify-content-between'
            >
              <span className="">{book.title}</span>
              <div className='d-flex justify-content-center align-items-center gap-2'>
                <button onClick={() => onEdit(book)} className="btn-edit btn-sm">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button onClick={() => handleDelete(book.id)}  className="btn-trash btn-sm">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available.</p>
      )}
    </>
  );
};

export default BookList;
