import { BrowserRouter, Route, Routes } from "react-router-dom";
import WaitlistPage from "./pages/WaitlistPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/business" element={<WaitlistPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
