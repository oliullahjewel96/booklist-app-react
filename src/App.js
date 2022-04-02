import BooklistContextProvider from "./contexts/BooklistContext";
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
function App() {
  return (
    <div className="App">
      <BooklistContextProvider>
        <Navbar />
        <Booklist />
      </BooklistContextProvider>
    </div>
  );
}

export default App;
