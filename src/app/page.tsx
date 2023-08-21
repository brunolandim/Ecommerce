'use client';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MobileHeader from "./components/Header/MobileHeader";
import About from "./components/Main/About";
import Banner from "./components/Main/Banner";
import Cateogory from "./components/Main/Category/Cateogory";
import Contact from "./components/Main/Contact";
import Products from "./components/Main/Product/Products";

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
