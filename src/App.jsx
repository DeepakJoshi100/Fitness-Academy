import React from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import MainPage from "./MainPage";
import NoPage from "./NoPage";
import Registration from "./Registration";
import Suppliment from "./Suppliment";
import Equipments from "./Equipments";
import { LinkClassesApp } from "./Classes/AppClasses";

function App() {
  return (
    <>
      <div className="relative">
        <img
          src="http://quotationwalls.com/img/motivational/gym-quotes-wallpaper.jpg"
          className="fixed w-full h-full -z-10"
        />
        <div className="flex justify-end h-10 gap-5 mx-2 font-mono text-sm">
          <Link to="/" className={LinkClassesApp}>
            Home
          </Link>
          <Link to="registration" className={LinkClassesApp}>
            Registration
          </Link>
          <Link to="equipments" className={LinkClassesApp}>
            Equipments
          </Link>
          <Link to="suppliments" className={LinkClassesApp}>
            Suppliments
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="registration" element={<Registration />} />
          <Route path="equipments" element={<Equipments />} />
          <Route path="suppliments" element={<Suppliment />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
