import React, { useState } from 'react'
import Styles from './Library.module.css'
import Search from './SearchComponent/Search'
import BookList from './BookListComponent/BookList'
import { searchBooks } from '../List'
// import BookApi from './BookApiComponent/BookApi'
const Library = () => {
  const [allBooks, setAllBooks] = useState([]); // Stores all books
  const [availableBooks, setAvailableBooks] = useState([]); // Stores available books
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showUnavailable, setShowUnavailable] = useState(false); // Toggle unavailable books
  const [DisplayBooks, setDisplayBooks] = useState(50)
  const LoadMoreBooks = () => {
    setDisplayBooks((Prev) => Prev + 50)
  }

  const handleSearch = async () => {
    if (!query)
      return;
    setLoading(true);
    setError("");
    try{
      const { allBooks, availableBooks } = await searchBooks(query);
      setAllBooks(allBooks);
      setAvailableBooks(availableBooks);
      setDisplayBooks(20)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={Styles.Library}>
      <div className={Styles.LibraryContainer}>
    {/* <Search  handleSearch={handleSearch}/> */}
    <div className="text">
    <h1>Hey!!! Welcome to my Mini Library</h1>
    <p>What can I assist you with today?</p>
    </div>
    <div className={Styles.Search}>
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className={Styles.SearchBTN} onClick={handleSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {availableBooks.length === 0 ? (
            <div>
              <p>No books available to read.</p>
              <button onClick={() => setShowUnavailable(!showUnavailable)}>
                {showUnavailable ? "Hide Unavailable Books" : "Show Unavailable Books"}
              </button>
              {showUnavailable && (
                <div>
                  <h3>Unavailable Books</h3>
                  <BookList books={allBooks.slice(0, DisplayBooks)}/>
                  {allBooks.length > DisplayBooks && (
                    <button onClick={LoadMoreBooks}>Load More Books</button>
                  )}
                </div>
              )}
            </div>
          ) : (
            <>
            <BookList books={availableBooks.slice(0, DisplayBooks)} />
            {allBooks.length > DisplayBooks && (
              <button onClick={LoadMoreBooks}>Load More Books</button>
            )}
            </>
          )}
        </>
      )}
      {/* {availableBooks.length > DisplayBooks && (
      <button onClick={LoadMoreBooks}>Load More Books</button>)} */}
      </div>
    </div>
  )
}

export default Library