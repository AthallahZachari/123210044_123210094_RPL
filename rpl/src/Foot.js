import React from "react";

const Foot = () => {
  return (
    <div className="p-5 bg-slate-900 flex align-start justify-evenly pb-20 ">
      <div>
        <h1 className="text-3xl font-bold text-amber-400">LOGO</h1>
        <h3 className="text-sm font-md text-gray-200">Recipe</h3>
      </div>
      <div>
        <h1 className="text-md font-semibold text-gray-300">AUTHOR</h1>
        <p className="text-xs text-gray-500">Athallah Zachari</p>
        <p className="text-xs text-gray-500">Sayang Sani</p>
      </div>
      <div>
        <h1 className="text-md font-semibold text-gray-300">DESIGN</h1>
        <p className="text-xs text-gray-500">Athallah Zachari</p>
        <p className="text-xs text-gray-500">Sayang Sani</p>
      </div>
      <div>
        <h1 className="text-md font-semibold text-gray-300">CONTACTS</h1>
        <p className="text-xs text-gray-500">Athallah Zachari</p>
        <p className="text-xs text-gray-500">Sayang Sani</p>
      </div>
      <div className="w-36">
        <input
          type="text"
          className=" w-36 border-2 text-sm  text-slate-900 placeholder-slate-400 rounded-sm  pl-1"
          placeholder="email..."
        />
        <p className="text-xs text-gray-500 py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        </p>

      </div>
    </div>
  );
};

export default Foot;
