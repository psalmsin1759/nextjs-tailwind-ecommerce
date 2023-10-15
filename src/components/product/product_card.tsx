import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Modal } from 'flowbite-react';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAvailable = product.in_stock > 0;

  const [availability, setAvailability] = useState('');

  const [quantity, setQuantity] = useState(1); // Initialize the quantity state

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="w-full h-250 border relative group">
        <div className="w-full relative group">
          <Image
            src={`https://storage.googleapis.com/inventrobucket/products/${product.images[0]?.path}`} // Prepend the base URL
            alt="..."
            width={170}
            height={250}
            Object-cover
            className="w-full "
          />

          <div className="absolute top-2 left-2 bg-gray-100 rounded pl-2 pr-2 pt-1 pb-1 shadow">
            <span>New</span>
          </div>

          <div className="group absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="bg-gray-100 rounded shadow p-1 cursor-pointer">
              <svg
                className="h-6 w-6"
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
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                ></path>
              </svg>
            </div>

            <div
              className="bg-gray-100 rounded shadow mt-2 p-1 cursor-pointer"
              onClick={() => props.setOpenModal('default')}
            >
              <svg
                className="h-6 w-6"
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="w-full absolute bottom-0 group">
            <button className="bg-black text-white h-10  absolute bottom-0 w-full opacity-0 transition-opacity group-hover:opacity-100">
              Add to cart
            </button>
          </div>
        </div>

        <div className="flex justify-center flex-col items-center p-2 shadow">
          <span className="text-md text-center text-gray-500">
            {product.product_name}
          </span>
          <div>
            <span className=" text-lg  ">N{product.price}</span>
            <span className="text-lg text-gray-400 ml-2">
              <del>N25,000</del>
            </span>
          </div>
        </div>
      </div>

      <Modal
        dismissible
        size="6xl"
        show={props.openModal === 'default'}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>QuickView</Modal.Header>
        <Modal.Body>
          <div className="space-y-3">
            <div className="relative md:grid md:grid-cols-2  p-4 flex-auto">
              <div className="w-full border shadow p-2">
                <Image
                  src={`https://storage.googleapis.com/inventrobucket/products/${product.images[0]?.path}`} // Prepend the base URL
                  alt="..."
                  width={170}
                  height={250}
                  Object-cover
                  className="w-full "
                />
              </div>
              <div className="w-full pl-4">
                <span className="text-xl font-semibold">
                  {product.product_name}
                </span>
                <div className="mt-4">
                  <span className="mr-2">SKU: </span>
                  <span>{product.sku}</span>
                </div>
                <div className="mt-4">
                  <span className="mr-2">Availability: </span>
                  {isAvailable ? <span>Instock</span> : <span>Sold out</span>}
                </div>
                <hr className="mt-4 mb-4" />
                <span className="text-2xl mt-4 mb-4 font-semibold">
                  N{product.price}
                </span>
                <hr className="mt-4" />
                <div className="flex ">
                  <span className="mt-4 mr-2 ">Qty:</span>
                  <div>
                    {product.in_stock > 0 ? (
                      <div className="flex w-56 justify-evenly items-center border m-2">
                        <button
                          className="bg-black text-white h-8 w-1/3"
                          onClick={decreaseQuantity}
                        >
                          -
                        </button>
                        <span className="text-black text-xl w-1/3 text-center">
                          {quantity}
                        </span>
                        <button
                          className="bg-black text-white h-8 w-1/3"
                          onClick={increaseQuantity}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <p className="text-red-500">Sold Out</p>
                      // Customize the "Sold Out" message as needed
                    )}
                  </div>
                </div>

                <hr />
                <div className="mt-4 flex gap-1">
                  <button className="button">Add to cart</button>
                  <button className="button">
                    {' '}
                    <svg
                      className="h-6 w-6"
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
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductCard;
