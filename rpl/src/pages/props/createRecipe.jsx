import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [values, setValues] = useState({
    title: "",
    price: "",
    ingridient: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/recipe", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" p-10">
      <h1 className=" text-center py-5 text-5xl font-bold text-amber-500">
        Create your own recipe
      </h1>
      <div className=" bg-slate-50 w-1/2 flex flex-col justify-center items-center p-8 rounded-md shadow-lg mx-auto my-10">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            className=" my-2 px-2 py-1 w-full rounded-sm border"
            onChange={(e) => setValues({ ...values, title: e.target.value })}
          />
          <br />
          <label htmlFor="title">Price</label>
          <br />
          <textarea
            name="ingridient"
            id="ingridient"
            cols="50"
            rows="5"
            className=" border my-2"
            onChange={(e) => setValues({ ...values, price: e.target.value })}
          ></textarea>
          <br />
          <label htmlFor="title">Description</label>
          <textarea
            name="desc"
            id="desc"
            cols="70"
            rows="10"
            className="border my-2"
            onChange={(e) =>
              setValues({ ...values, ingridient: e.target.value })
            }
          ></textarea>
          <br />
          <div className="flex align-middle justify-center">
            <button className="px-5 py-2 rounded-sm  w-magnifico bg-amber-400 text-lg font-semibold text-slate-700 hover:bg-gray-600 hover:text-slate-100 transition-all duration-100">
              Upload
            </button>
          </div>
        </form>
      </div>
      <h1 className=" text-center py-5 text-5xl font-bold text-amber-500">
        Upload video Tutorial
      </h1>
      <div className=" bg-amber-300 p-10 w-grande m-auto my-8 rounded-md h-96 flex justify-center items-center shadow-md">
        <p className=" text-base font-semibold text-amber-500 bg-slate-900 px-5 py-2 rounded-md hover:text-slate-900 hover:bg-amber-500 cursor-pointer transition-all duration-100">Select File</p>
      </div>
    </div>
  );
};

export default Create;
