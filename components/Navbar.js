import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { BsFillBagCheckFill } from "react-icons/Bs";
const Navbar = ({ cart, addToCart, removeFromCart, subTotal, clearCart }) => {
  // console.log(cart, addToCart, removeFromCart, subTotal, clearCart);
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="flex flex-col md:justify-start items-center md:flex-row justify-center shadow-md mb-1 py-2 top-0 z-10 bg-white sticky">
      <div className="logo mx-5">
        <Link href={"/"} legacyBehavior>
          <a>
            <Image src="/pix/logo.webp" alt="reload" height={50} width={200} />
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-6 md:text-md font-bold">
          <Link href={"/tshirts"} legacyBehavior>
            <a>
              <li>Tshirts</li>
            </a>
          </Link>
          <Link href={"/hoodies"} legacyBehavior>
            <a>
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href={"/stickers"} legacyBehavior>
            <a>
              <li>Stickers</li>
            </a>
          </Link>
          <Link href={"/mugs"} legacyBehavior>
            <a>
              <li>Mugs</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="cart cursor-pointer absolute right-0 mx-5 top-4 flex">
        <Link href={"/login"} legacyBehavior>
          <a>
            <MdAccountCircle className="text-xl mx-2 md:text-2xl" />
          </a>
        </Link>
        <AiOutlineShoppingCart
          onClick={toggleCart}
          className="text-xl md:text-2xl"
        />
      </div>

      {/* <div
        ref={ref}
        className={`sidecart h-[100vh] transform transition-transform absolute bg-pink-100 right-0 top-0 p-10 px-8 py-10 w-72  ${
          Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full"
        }`}
      > */}
      <div
        ref={ref}
        className={`sidecart h-[100vh] transform transition-transform absolute bg-pink-100 right-0 top-0 p-10 px-8 py-10 w-72  ${
          cart && Object.keys(cart).length !== 0
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <h2 className="font-bold text-xl">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-5 text-2xl cursor-pointer text-pink-500"
        >
          <AiFillCloseCircle />
        </span>
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
        <div className="my-2 font-bold">SubTotal : {subTotal}</div>
        <div className="flex">
          <Link href={"/checkout"} legacyBehavior>
            <a>
              <button className="inline-flex text-sm justify-center my-10 text-white bg-pink-500 py-1 px-3 focus:outline-none hover:bg-pink-600 rounded">
                <BsFillBagCheckFill className="m-1" />
                checkout
              </button>
            </a>
          </Link>
          <button
            onClick={clearCart}
            className="inline-flex text-sm ml-2 justify-center my-10 text-white bg-pink-500 py-1 px-3 focus:outline-none hover:bg-pink-600 rounded"
          >
            <BsFillBagCheckFill className="m-1" />
            clear cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
