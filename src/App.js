import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('')
      .then(response => {
        // Transform the data into an array of objects
        const transformedData = Object.values(response.data.data).map(item => ({
          id: item.id,
          title: item.title,
          author: item.author,
        }));
        setBooks(transformedData);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="book-list">
      {books.map(book => (
        <div key={book.id} className="book">
          <h2 className="book-title">{book.title}</h2>
          <p className="book-author">{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
