import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[6.2rem] bg-white shadow">
      <div className="l-header__inner flex items-center justify-between h-[100%] px-[20px]">
        <h1 className="w-[18rem]">
          <img src="/images/logo.svg" alt="CodeShelf" />
        </h1>
        <Link to="/login">ログイン</Link>
      </div>
    </header>
  );
}

export default Header;
