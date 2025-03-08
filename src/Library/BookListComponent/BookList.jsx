import React from 'react'
import Styles from './BookList.module.css'

const BookList = ({books}) => {
  return (
    <div className={Styles.BookList}>
       {books.map((book) => (
        <div key={book.key} className={Styles.Box}>
          <div className={Styles.Text}>
          <h3>{book.title}</h3>
          <p>Author: {book.author_name?.join(", ").slice(0, 20)}</p>
          <p>Published: {book.first_publish_year}</p>
          {book.ia && (
            <a
              href={`https://archive.org/details/${book.ia}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Read Online</button>
            </a>
          )}
          
          </div>
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
            alt={book.title}
          />
        </div>
      ))}
    </div>
  )
}

export default BookList