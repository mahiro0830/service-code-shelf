import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Items from './pages/Items';
import AuthProviderWithRouter from './context/AuthProviderWithRouter';

const App = () => {
  return (
    <AuthProviderWithRouter>
      <Header />
      <main className="min-h-[80vh]">
        <Routes>
          <Route index path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="/items" element={ <Items /> } />
        </Routes>
      </main>
      <Footer />
    </AuthProviderWithRouter>
  );
}

export default App;
