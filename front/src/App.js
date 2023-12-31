import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
