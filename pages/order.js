import React from "react";

const Order = () => {
  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              CODESWEAR.COM
            </h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
              Order Id: #89777
            </h1>
            <p class="leading-relaxed mb-4">
              your order has been successfully placed
            </p>
            <div class="flex mb-4">
              <a class="flex-grow text-center py-2 text-lg px-1">
                Item Description
              </a>
              <a class="flex-grow text-center border-gray-300 py-2 text-lg px-1">
                Quantity
              </a>
              <a class="flex-grow text-center border-gray-300 py-2 text-lg px-1">
                Item Total
              </a>
            </div>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Wear the code (XL/Black)</span>
              <span class="ml-auto text-gray-900">1</span>
              <span class="ml-auto text-gray-900">499</span>
            </div>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Wear the code (XL/Black)</span>
              <span class="ml-auto text-gray-900">1</span>
              <span class="ml-auto text-gray-900">499</span>
            </div>
            <div class="flex border-t border-b mb-6 border-gray-200 py-2">
              <span class="text-gray-500">Wear the code (XL/Black)</span>
              <span class="ml-auto text-gray-900">1</span>
              <span class="ml-auto text-gray-900">499</span>
            </div>
            <div class="flex flex-col">
              <span class="title-font font-medium text-2xl text-gray-900">
                SubTotal: $1158.00
              </span>
              <div className="my-6">
                <button class="flex mx-0 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Button
                </button>
              </div>
            </div>
          </div>
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
        </div>
      </div>
    </section>
  );
};

export default Order;
