import "./App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-amber-400 h-16 px-5 flex justify-between items-center font-sans">
      <div className="logo">
        <h1 className="bg font-bold text-3xl p-3 text-slate-900">RECIPE</h1>
      </div>
      <ul className="flex justify-evenly items-center">
        <Link to="/">
          <li className="text-slate-200 p-3 hover:text-slate-600">Popular</li>
        </Link>
        <Link to="/tips">
          <li className="text-slate-200 p-3 hover:text-slate-600">Tips</li>
        </Link>
        <Link to="/book">
          <li className="text-slate-200 p-3 hover:text-slate-600">My Book</li>
        </Link>
        <Link to="/prep">
          <li className="text-slate-200 p-3 hover:text-slate-600">Meal Prep</li>
        </Link>
        <Link to="/recipe">
          <li className="text-slate-200 p-3 hover:text-slate-600">Recipe</li>
        </Link>
        <button className="mx-5 w-20 h-10 rounded-xl text-slate-100 hover:bg-orange-400 border items-center">Logout</button>
      </ul>
    </div>
  );
}

export default Navbar;
