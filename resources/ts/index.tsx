import { createRoot } from 'react-dom/client';
import App from './App';

const appRoot = document.getElementById('app');
if (appRoot) {
  createRoot(appRoot).render(<App />);
}
