import React from 'react';
import { Card } from 'antd';

const BookCard = ({ book }) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt={book.Name} src={book.coverImage} />}
    >
      <h3>{book.Name}</h3>
      <p><strong>Author:</strong> {book.Author}</p>
      <p><strong>Degree:</strong> {book.Degree}</p>
      <p><strong>Year:</strong> {book.Year}</p>
      <p><strong>Book ID:</strong> {book.bookId}</p>
      <p><strong>Subject:</strong> {book.Subject}</p>
      <p><strong>Publisher:</strong> {book.publisher}</p>
      <p><strong>Year of Publishing:</strong> {book.yearOfPublishing}</p>
      <p><strong>Suitable for Course:</strong> {book.suitableForCourse}</p>
      <p><strong>Language:</strong> {book.language}</p>
    </Card>
  );
};

export default BookCard;
