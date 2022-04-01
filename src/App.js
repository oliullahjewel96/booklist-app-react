import BooklistContextProvider from "./contexts/BooklistContext";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <BooklistContextProvider>
        <Navbar />
      </BooklistContextProvider>
    </div>
  );
}

export default App;
