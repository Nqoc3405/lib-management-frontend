import { Routes, Route } from "react-router-dom";
import Interface from "./components/Interface";
import Book from "./components/Book";
import Reader from "./components/Reader"

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Interface />} />
      <Route path="/book" element={<Book />} />
      <Route path="/reader" element={<Reader />} />

    </Routes>
  );
}

export default App;