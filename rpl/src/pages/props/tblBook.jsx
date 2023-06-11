import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, useParams} from 'react-router-dom';

const Table = () => {
  const { id } = useParams();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/book")
      .then((res) => {
        setRows(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) =>{
    axios.delete('http://localhost:5000/delete/'+id)
    .then(res => {
      setRows(rows.filter(row => row.ID !== id));
    })
    .catch(err => console.log(err))
  };

  return (
    <div className="">
      <div className=" w-full p-5 m-auto">
        <div className="  w-magnifico m-auto py-5">
          <Link to="/create" className="shadow-md px-5 py-2 rounded-sm hover:bg-lime-200 text-sm font-semibold">Add +</Link>
        </div>
        <table className="table-fixed w-magnifico m-auto rounded-md shadow-2xl">
          <thead>
            <tr className="text-center">
              <td className=" font-bold text-amber-500 text-xl px-4 py-4">
                Title
              </td>
              <td className=" font-bold text-amber-500 text-xl px-4 py-4">
                Price
              </td>
              <td></td>
            </tr>
          </thead>
          <tbody className="text-center">
            {rows.map((row, index) => {
              return (
                <tr key={index} className=" hover:bg-slate-100 transition-all duration-100">
                  <td className=" px-4 py-2">{row.recName}</td>
                  <td className=" px-4 py-2">{row.recPrice}</td>
                  <td className=" px-4 py-2">{row.ID}</td>
                  <td>
                    <Link to={`/userUpdate/${row.ID}`} className=" m-2 text-sm bg-slate-800 px-3 py-2 rounded-sm text-slate-200 transition-all duration-150 hover:bg-violet-400 ">Edit</Link>
                    <button onClick={ () => handleDelete(row.ID)} className=" m-2 text-sm bg-slate-800 px-3 py-2 rounded-sm text-slate-200 transition-all duration-150 hover:bg-red-500">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
