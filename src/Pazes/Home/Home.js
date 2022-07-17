import React from 'react';
import { Fade } from 'react-reveal';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Analytics from './Analytics/Analytics';
import Header from './Header/Header';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Fade>
        <Header />
      </Fade>
      <Fade delay={300}>
        <Analytics />
      </Fade>
      <Footer />
    </div>
  );
};

export default Home;