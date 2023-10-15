'use client';

import { Carousel } from 'flowbite-react';
import React from 'react';
import Image from 'next/image';

function Slider() {
  return (
    <div className="h-200 w-full">
      <Carousel>
        <Image
          alt="..."
          src="https://placehold.co/600x200.png"
          width={1200}
          height={200}
          layout="responsive"
          className="relative"
        />
        <Image
          alt="..."
          src="https://placehold.co/600x200.png"
          width={1200}
          height={200}
          layout="responsive"
          className="relative "
        />
        <Image
          alt="..."
          src="https://placehold.co/600x200.png"
          width={1200}
          height={200}
          layout="responsive"
          className="relative"
        />
      </Carousel>
    </div>
  );
}

export default Slider;
