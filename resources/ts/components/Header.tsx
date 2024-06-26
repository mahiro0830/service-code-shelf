import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[6.2rem] bg-white shadow">
      <div className="l-header__inner flex items-center justify-between h-[100%] px-[20px]">
        <h1 className="w-[18rem]">
          <Link to="/"><img src="/images/logo.svg" alt="CodeShelf" /></Link>
        </h1>
        {/* ログイン・ログアウト状態でボタンを切り替える */}
        { isAuthenticated ? (
          <Link to="/logout">
            <span className="inline-block text-white rounded-[0.4rem] text-[1.4rem] px-8 py-3 transition hover:opacity-70 bg-red-600">ログアウト</span>
          </Link>
        ) : (
          <Link to="/login">
            <span className="inline-block text-white rounded-[0.4rem] text-[1.4rem] px-8 py-3 transition hover:opacity-70 bg-blue-500">ログイン</span>
          </Link>
        ) }
      </div>
    </header>
  );
}

export default Header;
