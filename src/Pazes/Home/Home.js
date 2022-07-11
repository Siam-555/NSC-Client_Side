import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Analytics from './Analytics/Analytics';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Analytics />
      <Footer />
    </div>
  );
};

export default Home;