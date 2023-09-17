import React, { useState, useEffect } from 'react';
import "./BookFilter.css"
// Updated JSON object with books data
import booksData from './booksData.json';
import BookCard from '../BookCard';
const LibraryFilter = () => {
  const [selectedDegree, setSelectedDegree] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [subjectsForSelectedYear, setSubjectsForSelectedYear] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const degrees = ['Select Degree', 'Bachelor', 'Master', 'PhD'];

  const handleDegreeChange = (e) => {
    const selectedDegreeValue = e.target.value;
    setSelectedDegree(selectedDegreeValue);
    setSelectedYear('');
    setSelectedSubject('');
    setSubjectsForSelectedYear([]);

    // Filter books based on the selected degree
    const filtered = booksData.books.filter(
      (book) => book.Degree === selectedDegreeValue
    );
    setFilteredBooks(filtered);
  };

  const handleYearChange = (e) => {
    const selectedYearValue = e.target.value; // Get selected year
    setSelectedYear(selectedYearValue);
    setSelectedSubject('');

    // Filter subjects based on the selected degree and year
    const selectedDegreeValue = selectedDegree; // Get selected degree
    const filteredSubjects = [...new Set(booksData.books
      .filter((book) => book.Degree === selectedDegreeValue && book.Year === selectedYearValue)
      .map((book) => book.Subject)
    )];
    setSubjectsForSelectedYear(filteredSubjects);

    // Filter books based on the selected degree and year
    const filtered = booksData.books.filter(
      (book) => book.Degree === selectedDegreeValue && book.Year === selectedYearValue
    );
    setFilteredBooks(filtered);
  };

  const handleSubjectChange = (e) => {
    const selectedSubjectValue = e.target.value;
    setSelectedSubject(selectedSubjectValue);

    // Filter books based on the selected degree, year, and subject
    const selectedDegreeValue = selectedDegree;
    const selectedYearValue = selectedYear;
    const filtered = booksData.books.filter(
      (book) =>
        book.Degree === selectedDegreeValue &&
        book.Year === selectedYearValue &&
        book.Subject === selectedSubjectValue
    );
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <label>Select Degree:</label>
      <select value={selectedDegree} onChange={handleDegreeChange}>
        {degrees.map((degree, index) => (
          <option key={index} value={degree}>
            {degree}
          </option>
        ))}
      </select>

      <label>Select Year:</label>
      <select value={selectedYear} onChange={handleYearChange}>
        <option value="">Select Year</option>
        {selectedDegree !== 'Select Degree' &&
          [...new Set(booksData.books
            .filter((book) => book.Degree === selectedDegree)
            .map((book) => book.Year)
          )].map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))
        }
      </select>

      <label>Select Subject:</label>
      <select value={selectedSubject} onChange={handleSubjectChange}>
        <option value="">Select Subject</option>
        {selectedYear !== '' &&
          subjectsForSelectedYear.map((subject, index) => (
            <option key={index} value={subject}>
              {subject}
            </option>
          ))
        }
      </select>

      <div>
        <h2>Filtered Books</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {filteredBooks.map((book, index) => (
            <div key={index} style={{ margin: '10px' }}>
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryFilter;
