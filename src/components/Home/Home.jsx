import React from "react";
import { useEffect } from "react";
import { generateString } from "../../config";
import "./Home.css";
import Cric from "../../assets/cric.png";

export default function Home() {
  useEffect(() => {
    localStorage.setItem("session_id", generateString(5));
  }, []);

  return (
    <div className="navbar">
      <div className=" flex justify-center w-full text-3xl text-white font-bold">
        <h1>Cricto</h1>
      </div>
      <div className="container ">
        <div className=" flex align-middle text-4xl mt-[2rem] text-white">
          <h2>Welcome to Cricto!</h2>
        </div>
      </div>
      <div className="flex justify-center mt-[3rem] mb-[3rem]">
        <img src={Cric} className="w-48 h-48" alt="Cric" />
      </div>
      <div className="flex justify-center mt-3 mb-3">
        <button className="btn btn-blue rounded-full h-24 w-24 ">
          <a href="/upload">Let's Start</a>
        </button>
      </div>
    </div>
  );
}
