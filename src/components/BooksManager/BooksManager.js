import React, { useState, useEffect } from 'react';
import { getBooks } from '../../api/booksApi';
import BookForm from '../BookForm/BookForm';
import BookList from '../BookList/BookList';

const BooksManager = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = () => {
    getBooks()
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data);
      })
      .catch(() => console.error('Failed to fetch books.'));
  };

  const handleFormSubmit = () => {
    loadBooks();
    setBookToEdit(null);
  };

  const handleEditBook = (book) => {
    setBookToEdit(book);
  };

  const handleDeleteBook = () => {
    loadBooks();
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <div className='search-panel'>
        <input
          type="text"
          name="search"
          placeholder="Search by title"
          value={searchQuery}
          onChange={handleSearchChange}
          className='form-control'
        />
      </div>
      <BookList 
        books={filteredBooks} 
        onEdit={handleEditBook} 
        onDelete={handleDeleteBook} 
      />
      <BookForm 
        bookToEdit={bookToEdit} 
        onFormSubmit={handleFormSubmit} 
      />
    </div>
  );
};

export default BooksManager;