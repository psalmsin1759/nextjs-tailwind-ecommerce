import React from 'react';
import Image from 'next/image';

function CartModalList() {
  return (
    <div className="flex flex-row justify-between mt-1 mr-4 ml-4">
      <div className="">
        <Image
          className=""
          src="https://bakersluxury.com/wp-content/uploads/2022/06/Bakers_Luxury_Castle_Limited_Edition_shirt_fashion_brand_Bakers_Pointed_collar_white_shirt_in_nigeria_lagos_lekki_jumia_konga_pinterest_elbow_patch_shirt_cufflinks_be-3-1-768x1152.jpg"
          alt="Logo"
          width={80}
          height={106}
        />
      </div>
      <div className="m-4">
        <span className="text-gray-500 font-semibold">Product Name</span>
        <div className="flex flex-row gap-2">
          <span>1</span>
          <span>X</span>
          <span>N25000</span>
        </div>
      </div>
      <div className=" cursor-pointer ml-2 rounded-full bg-gray-400 p-1 text-white  w-5 h-5 flex items-center justify-center">
        <svg
          className="w-6"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default CartModalList;
