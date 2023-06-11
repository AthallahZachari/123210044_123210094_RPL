import "../App.js";
import videoBG from "../img/chef3.avif";
import cardBG from "../img/videoBG.jpeg";
import cardBG2 from "../img/videoBG.jpg";
import Navbar from "../Navbar.js";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Tips() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tips")
      .then((res) => {
        setContents(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex align-middle justify-center p-5 mb-5">
      <section className=" mx-16 ">
        <div className=" h-100 bg-sky-400 relative ">
          <img src={videoBG} alt="" className="h-full object-cover " />
          <span className="absolute top-perfecto left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full">
            <h2 className=" text-amber-500 text-2xl font-bold w-full">
              The way of a master
            </h2>
            <p className=" text-xs text-slate-300 text-center font-normal p-1 w-full px-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              fugit culpa
            </p>
          </span>
        </div>
      </section>
      <section className=" grid grid-cols-2 grid-rows-2 gap-4">
        {contents.map((content, index) => {
          return (
            <div className=" shadow-md h-52 w-52 rounded-sm text-center relative overflow-hidden group">
              <img src={cardBG2} alt="" className=" w-full object-cover" />
              <h2 className="p-2 text-gray-500 text-sm font-medium">
                {content.tipsName}
              </h2>
              <div
                className="
             bg-black/40 absolute h-full w-full flex items-center justify-center 
             -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 "
              >
                <Link to={`/watchTips/${content.IDtips}`} className="py-2 px-3 bg-amber-500 rounded-sm hover:bg-amber-600 transition-all duration-150 text-sm text-gray-500 font-medium">
                  Watch Now
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Tips;
