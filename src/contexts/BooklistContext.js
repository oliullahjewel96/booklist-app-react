import React, { createContext } from "react";

export const BooklistContext = createContext();

const BooklistContextProvider = (props) => {
  const [books, setBooks] = React.useState([
    { title: "The fault in our stars", author: "John Green", id: 1 },
    { title: "Looking for Alaska", author: "John Green", id: 2 },
  ]);
  const addBooks = (title, author) => {
    setBooks([...books, { title, author, id: books.length + 1 }]);
  };
  const removeBooks = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BooklistContext.Provider value={{ books, addBooks, removeBooks }}>
      {" "}
      {props.children}{" "}
    </BooklistContext.Provider>
  );
};

export default BooklistContextProvider;
