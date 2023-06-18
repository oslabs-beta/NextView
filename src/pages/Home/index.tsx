//TODO: replace useState with useContext
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Overview from './Overview';
import Feature from '../../components/Feature';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className='flex h-screen flex-col overflow-x-hidden overflow-y-scroll'>
        <Overview />
        <section className='bg-primary'>
          <div className='grid grid-cols-12'>
            <Feature>
              <h2>Feature 1</h2>
            </Feature>
            <Feature>
              <h2>Feature 1</h2>
            </Feature>
            <Feature>
              <h2>Feature 1</h2>
            </Feature>
            <Feature>
              <h2>Feature 1</h2>
            </Feature>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
