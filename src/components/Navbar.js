import { useContext } from "react";
import { BooklistContext } from "../contexts/BooklistContext";
const Navbar = () => {
  const { books } = useContext(BooklistContext);
  return (
    <div className="navbar">
      <h1> Reading List </h1>{" "}
      <p>
        {" "}
        Currently you have {books.length}
        books to get through{" "}
      </p>{" "}
    </div>
  );
};

export default Navbar;
