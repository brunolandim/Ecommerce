'use client';
import Footer from "./components/Footer/Footer";
import About from "./components/Main/About";
import Hero from "./components/Main/Hero";
import Cateogory from "./components/Main/Category/Cateogory";
import Contact from "./components/Main/Contact";
import Products from "./components/Main/Product/Products";

import dynamic from 'next/dynamic'
 
const Header = dynamic(() => import('./components/Header/Header'), { ssr: false })

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Cateogory />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
