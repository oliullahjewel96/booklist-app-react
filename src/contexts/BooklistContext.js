import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BooklistContext = createContext();

const BooklistContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <BooklistContext.Provider value={{ books, dispatch }}>
      {" "}
      {props.children}{" "}
    </BooklistContext.Provider>
  );
};

export default BooklistContextProvider;
