import React from 'react';

import Header from './layout/Header';
import Footer from './layout/Footer';
import CodeRegister from './components/CodeRegister';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="min-h-[80vh]">
        <div className="pt-8 px-12 pb-[12rem]">
          <CodeRegister />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
