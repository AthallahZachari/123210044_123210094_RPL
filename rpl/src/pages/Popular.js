import Filter from "./props/PopFilter.jsx";
import Card from "./props/cards.jsx";
import FoodBG from "../img/pizza2.png";
import Navbar from "../Navbar.js";
import Foot from "../Foot.js";
import Tips from "./Tips.js";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pop = () => {
  return (
    <div className="Pop ">
      <div className="p-6 flex justify-around items-center ">
        <div className=" flex flex-col items-center m">
          <h1 className="font-bold text-6xl w-83 pt-5">
            Find Best Recipes for Cooking!
          </h1>
          <p className=" text-sm w-60 text-slate-500 m-5">
            Whatever your style, these cheap and easy meals will please your
            tummy without breaking the bank.
          </p>
          <div className="w-96 flex ">
            <input
              type="text"
              className=" w-full border-2 text-sm  text-slate-900 placeholder-slate-400 rounded-sm  pl-3"
              placeholder="Search Recipe..."
            />
            <button className="rounded py-2 px-3 mx-3 bg-amber-400 border-none text-slate-600 hover:bg-amber-500 text-base font-semibold">
              Search
            </button>
          </div>
        </div>
        <img
          src={FoodBG}
          alt="FoodBG"
          style={{ height: "400px" }}
          className="m-5"
        />
      </div>
      <h1 className="text-5xl font-semibold bg-gray-200 py-28 flex justify-center">
        Get Started!
      </h1>
      <div className="  flex justify-between items-center px-8 py-3">
        <h6 className="text-xl font-semibold text-amber-600">
          Explore recipes by
        </h6>
        <div className="">
          <Filter button="Ingridient" />
          <Filter button="Method" />
          <Filter button="Budget" />
          <Filter button="Diet" />
        </div>
      </div>
      <Card />
      <section className=" bg-slate-900 flex justify-center align-middle">
        <h1 className="text-5xl text-amber-500 font-semibold my-28 w-72">
          Want to write your own recipe?
        </h1>
        <div className=" m-28 pt-12">
          <Link to="/create">
            <button className=" py-3 px-5 rounded-md bg-slate-200 text-md font-semibold text-slate-900 hover:bg-amber-400 hover:text-slate-600 transition-all duration-100">
              Write New Recipe
            </button>
          </Link>
        </div>
      </section>
      <h1 className=" text-4xl text-amber-600 font-semibold m-10 text-center">
        Recommended Tips
      </h1>
      <Tips />
      <Foot />
    </div>
  );
};

export default Pop;
