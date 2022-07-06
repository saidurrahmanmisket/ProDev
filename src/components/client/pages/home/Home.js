import React from 'react';
import Layout from '../../../common/layout/Layout';
import Footer from '../../footer/Footer';
import HeroSection from '../../heroSection/HeroSection';
import NavBar from '../../navBar/NavBar';
import Post from '../../post/Post';
import './Home.css'

const Home = () => {
    return (
      <>
        <Layout>
          <NavBar />
          <div className="heroSection">
            <HeroSection />
          </div>
          <div className='postSection'>
            <Post />
          </div>
          <Footer />
        </Layout>
      </>
    );
};

export default Home;