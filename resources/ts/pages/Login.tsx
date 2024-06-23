import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] pt-[6.3rem]">
        <h2 className="font-bold text-[3.8rem] tracking-wider flex items-center flex-col gap-[2.8rem]">
          <span className="z-10 leading-7">ログイン</span>
          <span className="w-[6.5rem] h-[0.6rem] bg-accent"></span>
        </h2>
        <form className="max-w-[42rem] mx-auto shadow-[3px_3px_14px_0_rgba(0,0,0,0.08)] rounded-[1.5rem] px-[2.4rem] py-[3.2rem] mt-[6.3rem]">
          <div className="flex flex-col gap-[0.6rem] items-start">
            <label className="text-[1.4rem]" htmlFor="email">メールアドレス</label>
            <input className="w-[100%] h-[3.8rem] border border-gray-300 rounded-[0.6rem] text-[1.6rem] px-[1.2rem] focus:outline-none" type="email" id="email" />
          </div>
          <div className="flex flex-col gap-[0.6rem] items-start mt-[2.4rem]">
            <label className="text-[1.4rem]" htmlFor="password">パスワード</label>
            <input className="w-[100%] h-[3.8rem] border border-gray-300 rounded-[0.6rem] text-[1.6rem] px-[1.2rem] focus:outline-none" type="password" id="password" />
          </div>
          <div className="flex flex-col gap-[0.6rem] items-start mt-[2.4rem]">
            <button type="button" className="inline-block text-white rounded-[0.4rem] text-[1.4rem] px-8 py-3 transition hover:opacity-70 bg-blue-500">ログイン</button>
          </div>
          <div className="mt-[4.2rem]">
            <a href="#" className="text-[1.4rem] hover:underline">新規会員登録はこちら</a>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Login;
