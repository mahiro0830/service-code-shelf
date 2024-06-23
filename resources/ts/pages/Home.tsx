import Header from '../components/Header';
import Footer from '../components/Footer';
import Visual from '../components/Visual';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Visual />
        <section className="py-[12rem] bg-neutral-100">
          <div className="max-w-[114rem] mx-auto">
            <h2 className="font-bold text-[3.8rem] tracking-wider flex items-center flex-col gap-[2.8rem]">
              <span className="z-10 leading-7">CodeShelfのご紹介</span>
              <span className="w-[6.5rem] h-[0.6rem] bg-accent"></span>
            </h2>
            <div className="flex gap-[4rem] mt-[10rem]">
              <div className="flex-1">
                <h3 className="mb-[1.8rem] font-bold text-[2.4rem] first-letter:text-accent">タイトルが入りますタイトル</h3>
                <p className="text-[1.6rem] leading-[1.9]">
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </div>
              <div className="flex-1">
                <img src="https://via.placeholder.com/800x500" alt="Image" />
              </div>
            </div>
            <div className="flex gap-[4rem] mt-[10rem] flex-row-reverse">
              <div className="flex-1">
                <h3 className="mb-[1.8rem] font-bold text-[2.4rem] first-letter:text-accent">タイトルが入りますタイトル</h3>
                <p className="text-[1.6rem] leading-[1.9]">
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </div>
              <div className="flex-1">
                <img src="https://via.placeholder.com/800x500" alt="Image" />
              </div>
            </div>
            <div className="flex gap-[4rem] mt-[10rem]">
              <div className="flex-1">
                <h3 className="mb-[1.8rem] font-bold text-[2.4rem] first-letter:text-accent">タイトルが入りますタイトル</h3>
                <p className="text-[1.6rem] leading-[1.9]">
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </div>
              <div className="flex-1">
                <img src="https://via.placeholder.com/800x500" alt="Image" />
              </div>
            </div>
          </div>
        </section>
        <section className="py-[12rem]">
          <div className="max-w-[114rem] mx-auto">
            <h2 className="font-bold text-[3.8rem] tracking-wider flex items-center flex-col gap-[2.8rem]">
              <span className="z-10 leading-7">Let's Try</span>
              <span className="w-[6.5rem] h-[0.6rem] bg-accent"></span>
            </h2>
            <div className="flex justify-center gap-[5.5rem] mt-[8rem]">
              <a href="#" className="inline-block text-black font-bold rounded-[0.4rem] text-[1.8rem] text-center w-[30rem] py-[1.8rem] border border-black transition hover:bg-black hover:text-white">新規会員登録はこちら</a>
              <a href="#" className="inline-block text-black font-bold rounded-[0.4rem] text-[1.8rem] text-center w-[30rem] py-[1.8rem] border border-black transition hover:bg-black hover:text-white">ログイン</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
