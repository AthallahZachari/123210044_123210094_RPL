import "./App.css";
import Navbar from "./Navbar.js";
import Book from "./pages/My Book";
import Popular from "./pages/Popular";
import Recipe from "./pages/Recipe";
import Prep from "./pages/Meal Prep";
import Tips from "./pages/Tips";
import WatchTips from "./pages/watchTips";
import UserUpdate from "./pages/UserUpdate.jsx";
import Create from "./pages/props/createRecipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/book" element={<Book/>}/>
          <Route path="/" element={<Popular/>}/>
          <Route path="/recipe" element={<Recipe/>}/>
          <Route path="/prep" element={<Prep/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/watchTips/:id" element={<WatchTips/>}/>
          <Route path="/userUpdate/:id" element={<UserUpdate/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
