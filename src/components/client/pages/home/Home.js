import React from 'react';
import Layout from '../../../common/layout/Layout';
import Footer from '../../footer/Footer';
import HeroSection from '../../heroSection/HeroSection';
import Post from '../../post/Post';
import './Home.css'

const Home = () => {
    return (
      <>
        <Layout>
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