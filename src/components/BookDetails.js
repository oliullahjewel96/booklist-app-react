import React, { useContext } from "react";
import { BooklistContext } from "../contexts/BooklistContext";

const BookDetails = ({ book }) => {
  const { removeBooks } = useContext(BooklistContext);
  return (
    <li onClick={() => removeBooks(book.id)}>
      <div className="title"> {book.title} </div>{" "}
      <div className="author"> {book.author} </div>{" "}
    </li>
  );
};

export default BookDetails;
