const Footer = () => {
  return (
    <footer className="l-footer">
      <div className="l-footer__main">
        <div className="l-container">
          <div className="l-footer__row">
            <div className="l-footer__head">
              <div className="l-footer__logo">
                <img src="/images/logo.svg" alt="CodeShelf" />
              </div>
              <div className="l-footer__catch">
                <p>CodeShelfは、<br />
                プログラミング学習を<br />
                サポートするサービスです。</p>
              </div>
            </div>
            <div className="l-footer__nav">
              <ul className="l-footer__nav-list">
                <li className="l-footer__nav-item"><a href="#">CodeShelfについて</a></li>
                <li className="l-footer__nav-item"><a href="#">利用規約</a></li>
                <li className="l-footer__nav-item"><a href="#">プライバシーポリシー</a></li>
                <li className="l-footer__nav-item"><a href="#">お問い合わせ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="l-footer__copy">
        <small>&copy; 2024 CodeShelf</small>
      </div>
    </footer>
  );
};

export default Footer;
