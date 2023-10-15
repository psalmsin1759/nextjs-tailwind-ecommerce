'use client';
import React from 'react';
import Slider from '@/components/home/slider';
import NewArrival from '@/components/home/new_arrival';
import Banner from '@/components/banner';
import Footer from '@/app/common/footer';
import Image from 'next/image';
import HomeProduct from '@/components/home/home_product';

function Home() {
  return (
    <div className="m-0">
      <Slider />

      <Banner />
      <div className="text-2xl w-full flex justify-center mt-16 font-semibold">
        <span>Featured</span>
      </div>
      <NewArrival />
      <div className="text-2xl w-full mb-4 flex justify-center mt-16 font-semibold">
        <span>Our Products</span>
      </div>
      <HomeProduct />
      <Footer />
    </div>
  );
}

export default Home;
