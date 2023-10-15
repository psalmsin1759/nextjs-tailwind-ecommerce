'use client';
import React from 'react';
import Footer from '../common/footer';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

function CartPage() {
  return (
    <div className="flex flex-col min-h">
      <div className=" bg-black w-full p-5 items-center ">
        {/*  <span className="text-white">Home \ {categoryName}</span> */}
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="/home" icon={HiHome}>
            <p>Home</p>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Cart</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
