import cardBG from "../../img/thaiFood.jpg";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const Card = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/')
    .then(res => {setRecipes(res.data); console.log(res)})
    .catch(err => console.log(err)) 
  }, [])

  return(
    <div className="">
      <div className="grid grid-cols-4 w-full gap-4 pb-10 pl-8">
          {recipes.map((recipe, index) => {
            return(
              <div className="shadow-xl w-64 rounded-sm" id={recipe.ID}>
                <img src={cardBG} alt="display" className="h-48 w-full object-cover"/>
                <div className="p-5">
                  <h1 className="font-bold text-md text-zinc-800 ">{recipe.recName}</h1>
                  <p className="text-sm text-slate-600">{recipe.recPrice}</p>
                  <button className="bg-amber-400 py-2 px-6 mt-5 rounded-md hover:bg-amber-500 text-sm text-zinc-800 font-bold" id={recipe.ID}>Cook !</button>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
};

export default Card;
