import React from 'react';
import { useState, useEffect } from 'react';
import ProductCard from '@/components/product/product_card';
import axios from '@/api/axios';

function NewArrival() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const URL = '/getStoreProducts/18';

  const loadProducts = async () => {
    const response = await axios.get(URL);
    setProducts(response?.data.data);
  };

  return (
    <div className="m-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {products?.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default NewArrival;
