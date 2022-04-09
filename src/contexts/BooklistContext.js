import React, { createContext, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BooklistContext = createContext();

const BooklistContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, []);

  return (
    <BooklistContext.Provider value={{ books, dispatch }}>
      {" "}
      {props.children}{" "}
    </BooklistContext.Provider>
  );
};

export default BooklistContextProvider;
