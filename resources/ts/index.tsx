import { createRoot } from 'react-dom/client';
import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const appRoot = document.getElementById('app');
if (appRoot) {
  createRoot(appRoot).render(<App />);
}

const homeRoot = document.getElementById('home');
if (homeRoot) {
  createRoot(homeRoot).render(<Home />);
}

const loginRoot = document.getElementById('login');
if (loginRoot) {
  createRoot(loginRoot).render(<Login />);
}

const registerRoot = document.getElementById('register');
if (registerRoot) {
  createRoot(registerRoot).render(<Register />);
}
