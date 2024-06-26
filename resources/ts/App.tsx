import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Items from './pages/Items';
import AuthProviderWithRouter from './context/AuthProviderWithRouter';
import { ReactNode } from 'react';

const App = () => {
  // 認証確認メソッド
  const RequireAuth = ( props: { component: ReactNode; } ) => {
    // ログインシている場合は、渡されたコンポーネントを表示
    if (localStorage.getItem('AUTHORITY') === 'GENERAL') {
      return props.component;
    }
    // ログインしていない場合は、ログインページにリダイレクト
    document.location = '/login';
  };

  // 非認証メソッド
  const RequireNoAuth = ( props: { component: ReactNode; } ) => {
    // ログインしていない場合は、渡されたコンポーネントを表示
    if (localStorage.getItem('AUTHORITY') === null) {
      return props.component;
    }

    // ログインしている場合は、ダッシュボードにリダイレクト
    document.location = '/dashboard';
  };

  return (
    <AuthProviderWithRouter>
      <Header />
      <main className="min-h-[80vh]">
        <Routes>
          <Route index path="/" element={ <Home /> } />
          <Route path="/login" element={ <RequireNoAuth component={ <Login /> } /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/dashboard" element={ <RequireAuth component={ <Dashboard /> } /> } />
          <Route path="/items" element={ <Items /> } />
        </Routes>
      </main>
      <Footer />
    </AuthProviderWithRouter>
  );
}

export default App;
