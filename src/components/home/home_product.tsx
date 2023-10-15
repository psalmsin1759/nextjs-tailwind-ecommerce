import React from 'react';
import { useState, useEffect } from 'react';
import axios from '@/api/axios';

function HomeProduct() {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const URL = '/getStoreProductCategories/18';

  const loadCategories = async () => {
    const response = await axios.get(URL);

    setCategory(response?.data.data);
  };

  return (
    <div className="flex justify-center  items-center w-full">
      <div className="flex space-x-6 mb-4">
        {category?.map((category: Category) => (
          <button className="menubutton">{category.name}</button>
        ))}
      </div>

      <div className="m-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2"></div>
    </div>
  );
}

export default HomeProduct;
