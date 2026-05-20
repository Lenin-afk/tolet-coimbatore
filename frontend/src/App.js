import { BrowserRouter, Routes, Route } from 'react-router-dom';
// TODO: Import Home, Login, Register pages
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      {/* TODO: Add Navbar here above Routes so it shows on all pages */}
      <Navbar />
      <Routes>
        {/* existing routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;