import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from "./pages/Login.jsx"
import Menu from './components/Menu.jsx'
import Error404 from './pages/Error404.jsx'
import GiftCards from './pages/GiftCards.jsx'

function App() {
  return (
    <Router>
      <Menu />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/giftcards" element={<GiftCards />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
