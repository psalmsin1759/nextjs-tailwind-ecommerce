import React from 'react';
import CartModalList from './cart_model_list';
import Link from 'next/link';

function CartModal() {
  return (
    <div className="flex flex-col">
      <CartModalList />
      <CartModalList />
      <CartModalList />
      <hr className="mt-4 ml-4 mr-4" />
      <div className="flex flex-row justify-between mt-2 ml-4 mr-4">
        <span className="text-md">Subtotal</span>
        <span className="text-xl font-semibold">N122500</span>
      </div>
      <hr className="m-2" />
      <div className="flex flex-col items-center gap-2 mt-2">
        <Link href={'/cart'}>
          <span className="text-xl underline underline-offset-1 cursor-pointer hover:text-red-500">
            View Cart
          </span>
        </Link>

        <button className="bg-red-600 h-10 pl-8 pr-8 text-white hover:bg-black">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartModal;
