import React from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/Bs";
import Link from "next/link";
const Checkout = ({ cart, subTotal, addToCart, removeFromCart }) => {
  return (
    <div className="container px-2 sm:m-auto m-auto">
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h2 className="text-xl font-semibold">1. Delivery Details</h2>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlfor="" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="email"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlfor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        <div className="mb-4">
          <label htmlfor="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            type="email"
            id="address"
            name="address"
            rows="2"
            cols="30"
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlfor="phone" className="leading-7 text-sm text-gray-600">
              Phone Number
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlfor="email" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              type="city"
              id="city"
              name="text"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlfor="state" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label
              htmlfor="pincode"
              className="leading-7 text-sm text-gray-600"
            >
              PinCode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <h2 className="text-xl font-semibold">2. Review Cart Items & Pay</h2>

      <div className="sidecart bg-pink-100 top-0 p-10 px-8 py-10">
        {/* <h2 className="font-bold text-xl">Shopping Cart</h2> */}

        <ol className="list-decimal font-semibold">
          {cart && Object.keys(cart).length == 0 && (
            <div className="my-4 font-semibold">Your cart is Empty</div>
          )}
          {cart &&
            Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="flex my-5">
                    <div className="w-1/2">{cart[k].name}</div>
                    <div className="flex justify-center items-center text-lg w-1/3">
                      <AiFillMinusCircle
                        onClick={() => {
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className="cursor-pointer text-pink-500"
                      />

                      <span className="mx-2 text-sm">{cart[k].qty}</span>
                      <AiFillPlusCircle
                        onClick={() => {
                          addToCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className="cursor-pointer text-pink-500"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
        </ol>
        <span className="total font-bold">SubTotal : {subTotal}</span>
      </div>
      <Link href={"/checkout"} legacyBehavior>
        <a>
          <button class="inline-flex text-sm font-semibold justify-center my-4 text-white bg-pink-500 py-1 px-3 focus:outline-none hover:bg-pink-600 rounded">
            <BsFillBagCheckFill className="m-1" />
            Pay {subTotal}
          </button>
        </a>
      </Link>
    </div>
  );
};

export default Checkout;
