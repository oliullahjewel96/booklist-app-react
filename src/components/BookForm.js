import React, { useState, useContext } from "react";
import { BooklistContext } from "../contexts/BooklistContext";

const BookForm = () => {
  const { addBooks } = useContext(BooklistContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooks(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />{" "}
      <input type="submit" value="add book" />
    </form>
  );
};

export default BookForm;
