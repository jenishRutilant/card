import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Demo from "./components/Demo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="Demo" element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
