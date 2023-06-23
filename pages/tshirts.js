import React from "react";
import Link from "next/link";
import mongoose from "mongoose";
import Product from "../models/Product";

const Tshirts = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).map((item) => {
              return (
                <Link
                  key={products[item]._id}
                  passHref={true}
                  href={`/product/${products[item].slug}`}
                  legacyBehavior
                >
                  <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5 ">
                    <a className="block relative rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="md:h-[30vh] h-[30vh] block m-auto"
                        src={products[item].img}
                      />
                    </a>
                    <div className="mt-4 md:text-left text-center">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        T-Shirt
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {products[item].title}
                      </h2>
                      <p className="mt-1">${products[item].price}</p>
                      <div className="mt-1">
                        {products[item].size.includes("S") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            S
                          </span>
                        )}

                        {products[item].size.includes("XL") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            XL
                          </span>
                        )}
                        {products[item].size.includes("XXL") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            XXL
                          </span>
                        )}
                        {products[item].size.includes("M") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            M
                          </span>
                        )}
                        {products[item].size.includes("L") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            L
                          </span>
                        )}
                      </div>
                      <div className="mt-1">
                        {products[item].size.includes("S") && (
                          <button className="border-2 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].size.includes("S") && (
                          <button className="border-2 bg-purple-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].size.includes("XL") && (
                          <button className="border-2 bg-pink-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].size.includes("XXL") && (
                          <button className="border-2 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].size.includes("M") && (
                          <button className="border-2 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}

                        {products[item].size.includes("L") && (
                          <button className="border-2 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: "tshirt" });
  let tshirts = {};
  for (let item of products) {
    if (item.title in tshirts) {
      if (
        !tshirts[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].color.push(item.color);
      }
      if (
        !tshirts[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].size.push(item.size);
      }
    } else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        tshirts[item.title].color = [item.color];
        tshirts[item.title].size = [item.size];
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(tshirts)) }, // will be passed to the page component as props
  };
}
export default Tshirts;
