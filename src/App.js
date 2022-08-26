import React from 'react';

// import components
import Header from "./components/Header";
import Hero from './components/Hero'
import  Features from './components/Features'
import NewItems from './components/NewItems'
import FeaturesSecond from "./components/FeaturesSecond";
import Products from "./components/Products";
import Testimonail from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";


const App = () => {
  return <div className='w-full max-w-[1440px] mx-auto bg-white'>
  <Header />
   <Hero />
   <Features/>
   <NewItems />
   <FeaturesSecond />
   <Products/>
   <Testimonail />
   <Newsletter />
   <Footer />
  </div>;
};

export default App;
