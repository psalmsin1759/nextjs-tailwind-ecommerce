'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import ProductCard from '@/components/product/product_card';
import axios from '@/api/axios';
import Footer from '@/app/common/footer';
import SideCategory from '@/components/category/side_category';
import PriceFilter from '@/components/product/price_filter';
import OptionsFilter from '@/components/product/options_filter';

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

function CategoryMainPage({ params }: { params: { id: number } }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState('Category');

  useEffect(() => {
    loadProducts();
  }, []);

  const URL = `/productsByCategory/18/${params.id}`;

  const loadProducts = async () => {
    const response = await axios.get(URL);
    setProducts(response?.data.data);
    setCategoryName(response?.data.category);
  };

  return (
    <div className="mt-4 w-full min-h-60">
      <div className=" bg-black w-full p-5 items-center ">
        {/*  <span className="text-white">Home \ {categoryName}</span> */}
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="#" icon={HiHome}>
            <p>Home</p>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
          <Breadcrumb.Item>{categoryName}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="flex flex-col-reverse md:flex-row m-4  ">
        <div className="basis-1/4 md:mr-2">
          <SideCategory />
          <PriceFilter />
          <OptionsFilter />
        </div>

        <div className="basis-3/4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {products?.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CategoryMainPage;
