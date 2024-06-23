import Header from './components/Header';
import Footer from './components/Footer';
import CodeRegister from './components/CodeRegister';

const App = () => {
  return (
    <>
      <Header />
      <main className="min-h-[80vh]">
        <div className="pt-8 px-12 pb-[12rem]">
          <CodeRegister />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
