import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function BannerCard(_props: any) {
  // Determine the animation class based on the item's index
  const animationClass = _props.index === 0 ? 'left' : 'right';

  return (
    <motion.div className="bg-gray-200 h-300 rounded-lg overflow-hidden shadow-lg relative w-full">
      <Image
        src={_props.imagePath}
        alt=".."
        width={0}
        height={300}
        sizes="100vw"
        className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"
      />

      <div className="absolute top-10 left-8 w-1/2">
        <span className="text-xl  text-black-500 break-words block">
          {_props.title}
        </span>
        <span className="text-2xl font-semibold text-black-500 break-words block mt-2">
          {_props.subTitle}
        </span>

        <button
          type="button"
          className="text-white rounded bg-buttonColor mt-12 pl-4 pr-4 pt-2 pb-2 hover:bg-black"
        >
          Shop Now
        </button>
      </div>
    </motion.div>
  );
}

export default BannerCard;
