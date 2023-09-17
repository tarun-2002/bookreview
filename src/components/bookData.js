import React from 'react';
import BookCard from './BookCard'; // Import the BookCard component
import booksData from './BookFilter/booksData.json'; // Import your updated JSON data

const BookData = () => {
  return (
    <div>
      <h1>Book Information</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {booksData.books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookData;





