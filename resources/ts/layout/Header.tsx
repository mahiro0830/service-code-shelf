import Button from '../components/Button';

const Header = () => {
  return (
    <header className="l-header">
      <div className="l-header__inner">
        <h1 className="l-header__logo">
          <img src="/images/logo.svg" alt="CodeShelf" />
        </h1>
        <Button href='/login' text="ログイン" />
      </div>
    </header>
  );
}

export default Header;
