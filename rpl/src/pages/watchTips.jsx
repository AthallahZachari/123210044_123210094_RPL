import chefBG from "../img/videoBG.jpg";
import cardBG from "../img/videoBG.jpg";
import cardBG2 from "../img/videoBG.jpeg";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";

const WatchTips = () => {
  const { id } = useParams();
  const [list, setList] = useState([]);
  const [rolls, setRolls] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tips/" + id)
      .then((res) => {
        console.log(res);
        setList(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tips/")
      .then((res) => {
        setRolls(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" m-auto p-10">
      <div className=" shadow-md h-100 w-grande rounded-sm text-center relative overflow-hidden group m-auto">
        <img src={chefBG} alt="" className=" w-full object-cover" />
        <div
          className="
             bg-black/40 absolute h-full w-full flex items-center justify-center 
             -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 "
        >
          <button className="py-2 px-3 bg-amber-500 rounded-sm hover:bg-amber-600 transition-all duration-150 text-sm text-gray-500 font-medium">
            Play
          </button>
        </div>
      </div>
      <div className=" flex justify-evenly align-middle items-center  w-elmundo m-auto">
        <div className="mt-5 px-5 w-elmundo m-auto">
          <h1 className=" text-4xl font-semibold text-amber-500">
            {list.tipsName}
          </h1>
          <h3 className=" text-xl font-semibold text-slate-800 mt-5">
            Description
          </h3>
          <p className=" text-base text-slate-400 w-1/2">{list.tipsDesc}</p>
          <form action="post">
            
          </form>
        </div>
        <section className=" w-52 h-96 mr-10">
          <h3 className=" text-slate-800 text-xl font-semibold mt-5">Another Tips</h3>
          {rolls.map((roll, index) => {
            return (
              <div>
                <div className=" shadow-md h-52 w-52 rounded-sm text-center relative overflow-hidden group my-5">
                  <img src={cardBG2} alt="" className=" w-full object-cover" />
                  <h2 className="p-2 text-gray-500 text-sm font-medium">
                    {roll.tipsName}
                  </h2>
                  <div className=" bg-black/40 absolute h-full w-full flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                    <Link
                      to={`/watchTips/${roll.IDtips}`}
                      className="py-2 px-3 bg-amber-500 rounded-sm hover:bg-amber-600 transition-all duration-150 text-sm text-gray-500 font-medium"
                    >
                      Watch Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default WatchTips;
