import React from 'react'

import Navbar from "./components/Main/Navbar/Navbar";
import Blog from "./components/Main/Blog/Blog";
import Product from "./components/Main/Product/Product";
import Footer from "./components/Main/Footer/Footer";
import BlogArticle from "./components/Main/BlogArticle/BlogArticle";
import FixedImage from "./components/Main/FixedImage/FixedImage";
import Slider from "./components/Main/Slider/Slider";
import Youtube from "./components/YoutubePlayer"
import Trainers from './components/Main/Trainers/Trainers';


const HomePage=()=>{
    return(
      <>
        <Navbar />
        <Slider />
        <Trainers/>
        <Product />
        <FixedImage />
        <BlogArticle />
        <Footer />
  
      </>
    )
  }
  export default HomePage;