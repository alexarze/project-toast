import React from 'react';

import ToastProvider from '../ToastProvider';
import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';

function App() {
  return (
    <ToastProvider duration={2000}>
      <ToastPlayground />
      <Footer />
    </ToastProvider>
  );
}

export default App;
