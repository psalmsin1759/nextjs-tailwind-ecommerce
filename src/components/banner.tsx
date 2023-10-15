import React from 'react';
import Card from '@/components/home/banner_card';
import banner1 from '../../public/images/banner1.jpeg';
import banner2 from '../../public/images/banner2.jpg';

function banner() {
  const data = [
    {
      title: 'New Fashion',
      subTitle: 'Minimalism Fashion Sandals',
      imagePath: banner1,
    },
    {
      title: 'New Arrival',
      subTitle: 'Minimalism Fashion Bag',
      imagePath: banner2,
    },
    /*  { title: 'Shirts', imagePath: banner3 },
    { title: 'Shoes', imagePath: banner1 }, */
  ];

  return (
    <div className="md:grid md:grid-cols-2 md:gap-8 m-4">
      {data.map((item, index) => (
        <div className="h-300 w-full mt-4">
          <Card
            key={index}
            title={item.title}
            imagePath={item.imagePath}
            subTitle={item.subTitle}
          />
        </div>
      ))}
    </div>
  );
}

export default banner;
