import React, { useContext } from "react";
import { BooklistContext } from "../contexts/BooklistContext";

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BooklistContext);
  return (
    <li onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
      <div className="title"> {book.title} </div>{" "}
      <div className="author"> {book.author} </div>{" "}
    </li>
  );
};

export default BookDetails;
