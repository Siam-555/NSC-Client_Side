import React from 'react';
import { Fade } from 'react-reveal';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Analytics from './Analytics/Analytics';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Fade del>
        <Analytics />
      </Fade>
      <Footer />
    </div>
  );
};

export default Home;