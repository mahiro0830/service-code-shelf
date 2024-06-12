import React from 'react';

import Header from './layout/Header';
import Footer from './layout/Footer';
import CodeRegister from './components/CodeRegister';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="l-body">
        <div className='l-body__inner'>
          <CodeRegister />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
