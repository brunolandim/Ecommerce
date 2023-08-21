'use client';
import Footer from "./components/Footer/Footer";
import About from "./components/Main/About";
import Banner from "./components/Main/Banner";
import Cateogory from "./components/Main/Category/Cateogory";
import Contact from "./components/Main/Contact";
import Products from "./components/Main/Product/Products";

import dynamic from 'next/dynamic'
 
const Header = dynamic(() => import('./components/Header/Header'), { ssr: false })

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Products />
      <Cateogory />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
