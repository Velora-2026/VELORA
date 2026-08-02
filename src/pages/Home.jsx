import React from "react";
import Navbar from "@/components/velora/Navbar";
import Hero from "@/components/velora/Hero";
import Products from "@/components/velora/Products";
import PrivilegeCard from "@/components/velora/PrivilegeCard";
import Packaging from "@/components/velora/Packaging";
import About from "@/components/velora/About";
import WhyChoose from "@/components/velora/WhyChoose";
import Reviews from "@/components/velora/Reviews";
import Gallery from "@/components/velora/Gallery";
import Contact from "@/components/velora/Contact";
import Footer from "@/components/velora/Footer";
import ShoppingBag from "@/components/velora/ShoppingBag";
import { CartProvider } from "@/lib/cartContext";

export default function Home() {
  return (
    <CartProvider>
      <div className="bg-black min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Products />
          <PrivilegeCard />
          <Packaging />
          <About />
          <WhyChoose />
          <Reviews />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <ShoppingBag />
      </div>
    </CartProvider>
  );
}