import React, { useContext } from "react";
import { BooklistContext } from "../contexts/BooklistContext";
import BookDetails from "./BookDetails";
const Booklist = () => {
  const { books } = useContext(BooklistContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {" "}
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}{" "}
      </ul>{" "}
    </div>
  ) : (
    <div className="empty-"> There are no books in the list </div>
  );
};

export default Booklist;
