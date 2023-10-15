'use client';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from '@/api/axios';
import { Fragment } from 'react';
import Image from 'next/image';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import CartModal from '@/components/product/cart/cart_modal';

const navigation = [
  { name: 'Shirt', href: '#', current: true },
  { name: 'Shoes', href: '#', current: false },
  { name: 'Suits', href: '#', current: false },
  { name: 'Cufflinks', href: '#', current: false },
  { name: 'Bags', href: '#', current: false },
  { name: 'Accessories', href: '#', current: false },
  { name: 'Sales', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function HeaderNew() {
  const [showCartPanel, setShowCartPanel] = useState(false);

  const toggleCartPanel = () => {
    setShowCartPanel(!showCartPanel);
  };

  const panelRef = useRef<HTMLDivElement | null>(null); // Specify the type

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setShowCartPanel(false);
      }
    };

    if (showCartPanel) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showCartPanel]);

  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Category[]>([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const URL = '/getStoreProductCategories/18'; // Assuming this URL fetches categories and subcategories

  const loadCategories = async () => {
    try {
      const response = await axios.get<{ success: boolean; data: Category[] }>(
        URL
      );

      // Assuming the response contains both categories and subcategories
      if (response.data.success) {
        const allCategories = response.data.data;
        const mainCategories = allCategories.filter(
          (category) => category.parent_id === 0
        );
        setCategories(mainCategories);
        setSubcategories(
          allCategories.filter((category) => category.parent_id !== 0)
        );
      }
    } catch (error) {
      // Handle any error, e.g., network issues or Axios response errors.
      console.error('Error loading categories:', error);
    }
  };

  return (
    <>
      <Disclosure
        as="nav"
        className="shadow pt-2 pb-2 items-center"
        style={{ opacity: showCartPanel ? 0.7 : 1 }}
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Image
                      className=""
                      src="/images/header-logo.png"
                      alt="Logo"
                      width={222}
                      height={60}
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex mt-4 mx-auto space-x-4">
                      {categories?.map((category: Category) => (
                        <a
                          key={category.id}
                          href={`category/${category.id}`}
                          className="text-black-900 hover:font-semibold rounded-md px-3 py-2 text-sm font-medium"
                          aria-current="page"
                        >
                          {category.name}
                        </a>
                      ))}
                      {/* {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? ' text-black-300'
                            : 'text-black-900  hover:font-semibold',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))} */}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/*  <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowCartPanel(!showCartPanel)}
                      className="hover:text-gray-200"
                    >
                      <svg
                        className="w-6 h-6 mr-4"
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
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        ></path>
                      </svg>
                    </button>
                    <div className="absolute top-0 right-0 -mt-3   rounded-full bg-red-500 p-1 text-white  w-6 h-6 flex items-center justify-center">
                      <span>0</span>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="hidden xl:flex space-x-5 items-center">
                    <a className="hover:text-gray-200" href="#">
                      <svg
                        className="w-6 h-6"
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
                    </a>
                    <a className="hover:text-gray-200" href="#">
                      <svg
                        className="w-6 h-6"
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
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        ></path>
                      </svg>
                    </a>
                    <a className="hover:text-gray-200" href="#">
                      <svg
                        className="w-6 h-6"
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
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <div
        ref={panelRef}
        className={`fixed inset-y-0 right-0 w-96 bg-white h-full transform transition-transform ${
          showCartPanel ? 'translate-x-0' : 'translate-x-full'
        } shadow-lg overflow-y-auto`}
      >
        {/* Content of the slide-out panel */}
        <div className="p-4 ">
          <div className="flex flex-row justify-between">
            <h2 className="text-xl font-semibold">Shopping Cart</h2>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setShowCartPanel(!showCartPanel)}
            >
              <span className="text-gray-500 text-sm">close</span>
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
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </div>
          </div>
          <hr className="m-4" />

          <CartModal />
        </div>
      </div>
    </>
  );
}
