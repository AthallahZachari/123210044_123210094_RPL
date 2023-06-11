import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

const UserUpdate = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/book/" + id)
      .then((res) => {
        console.log(res);
        setValues({...values, title: res.data[0].recName, price: res.data[0].recPrice, ingridient: res.data[0].recDesc});
      })
      .catch((err) => console.log(err));
  }, []);
  
  const [values, setValues] = useState({
    title: '',
    price: '',
    ingridient: ''
  });


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put('http://localhost:5000/book/'+id, values)
    .then(res => {
        console.log(res)
        navigate('/book');
    }).catch(err => console.log(err))
  }

  return (
    <div className=" p-10">
      <h1 className=" text-center py-5 text-5xl font-bold text-amber-500">
        Edit Recipe
      </h1>
      <div className=" bg-slate-50 w-1/2 flex flex-col justify-center items-center p-8 rounded-md shadow-lg mx-auto my-10">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            className=" my-2 px-2 py-1 w-full rounded-sm border"
            value={values.title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
          />
          <br />
          <label htmlFor="title">Price</label>
          <br />
          <textarea
            name="price"
            id="price"
            cols="50"
            rows="5"
            className=" border my-2"
            value={values.price}
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
            value={values.ingridient}
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
    </div>
  );
};

export default UserUpdate;
