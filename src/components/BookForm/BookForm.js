import React, { useState, useEffect } from 'react';
import './BookForm.scss';
import { addBook, updateBook, getAuthors } from '../../api/booksApi';
import Message from '../Message/Message';

const BookForm = ({ bookToEdit, onFormSubmit }) => {
  const [title, setTitle] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [authors, setAuthors] = useState([]);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    getAuthors()
      .then((data) => setAuthors(data))
      .catch(() => {
        setMessage('Failed to load authors.');
        setMessageType('error');
      });

    if (bookToEdit) {
      setTitle(bookToEdit.title);
      setAuthorId(bookToEdit.authorId);
    }
  }, [bookToEdit]);

  const clearMessage = () => {
    setMessage('');
    setMessageType('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !authorId) {
      setMessage('Please fill in all fields.');
      setMessageType('error');
      return;
    }

    const bookData = { title, authorId };

    if (bookToEdit) {
      updateBook(bookToEdit.id, bookData)
        .then(() => {
          setMessage('Book updated successfully!');
          setMessageType('success');
          onFormSubmit();
        })
        .catch(() => {
          setMessage('Failed to update book.');
          setMessageType('error');
        });
    } else {
      addBook(bookData)
        .then(() => {
          setMessage('Book added successfully!');
          setMessageType('success');
          onFormSubmit();
        })
        .catch(() => {
          setMessage('Failed to add book.');
          setMessageType('error');
        });
    }

    setTitle('');
    setAuthorId('');
  };

  return (
    <div className='book-form'>
      <Message 
        message={message} 
        type={messageType} 
        clearMessage={clearMessage} 
      />
      <h2 className='book-form__title'>
        {bookToEdit ? 'Update Book' : 'Add a new Book'}
      </h2>
      <form
        onSubmit={handleSubmit} 
        className='d-flex justify-content-center gap-4'
      >
        <div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter book title"
            required
            className='form-control book-form__new-book'
          />
        </div>
        <div>
          <select
            name="author"
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
            required
            className='form-select'
          >
            <option value="">Select an author</option>
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
        <button 
          type="submit" 
          className='btn btn-outline-light'
        >
          {bookToEdit ? 'Update Book' : 'Add Book'}
        </button>
      </form>
    </div>
  );
};

export default BookForm;