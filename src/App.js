import BooklistContextProvider from "./contexts/BooklistContext";
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import BookForm from "./components/BookForm";
function App() {
  return (
    <div className="App">
      <BooklistContextProvider>
        <Navbar />
        <Booklist />
        <BookForm />
      </BooklistContextProvider>
    </div>
  );
}

export default App;
