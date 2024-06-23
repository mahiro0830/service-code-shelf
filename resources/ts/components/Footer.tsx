const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="py-[4.5rem] px-[2rem]">
        <div className="max-w-[90%] mx-auto">
          <div className="flex items-end">
            <div className="w-1/3">
              <div className="w-[20rem]">
                <img src="/images/logo.svg" alt="CodeShelf" />
              </div>
              <div className="mt-12">
                <p className="text-xxl">CodeShelfは、<br />
                プログラミング学習を<br />
                サポートするサービスです。</p>
              </div>
            </div>
            <div className="w-2/3">
              <ul className="flex justify-end flex-wrap gap-8">
                <li><a href="#" className="hover:underline">CodeShelfについて</a></li>
                <li><a href="#" className="hover:underline">利用規約</a></li>
                <li><a href="#" className="hover:underline">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:underline">お問い合わせ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xxl text-white text-center py-5 bg-gray-900">
        <small>&copy; 2024 CodeShelf</small>
      </div>
    </footer>
  );
};

export default Footer;
