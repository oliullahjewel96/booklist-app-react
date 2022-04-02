import React, { useContext } from "react";
import { BooklistContext } from "../contexts/BooklistContext";

const BookDetails = ({ book }) => {
  const { deleteBook } = useContext(BooklistContext);
  return (
    <li>
      <div className="title"> {book.title} </div>{" "}
      <div className="author"> {book.author} </div>{" "}
    </li>
  );
};

export default BookDetails;
