import React from 'react';
import Header from './layouts/Header';
import Content from './layouts/Content';
import Footer from './layouts/Footer';

const App = () => (
  <div className="flex flex-col min-h-screen bg-gray-100">
    <Header />
    <Content />
    <Footer />
  </div>
);

export default App;
