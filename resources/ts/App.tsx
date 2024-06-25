import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Items from './pages/Items';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="min-h-[80vh]">
        <Routes>
          <Route index path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/items" element={ <Items /> } />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
