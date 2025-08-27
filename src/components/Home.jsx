// Home.jsx
import React from "react";
import bgImage from "../assets/img/home-img.png";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <section className="relative w-full h-screen flex justify-center items-center bg-white">
      <div
        className="w-[98%] h-[96%] bg-cover bg-center relative flex items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex flex-col justify-center h-full px-5 md:items-start md:pl-12 items-center w-full max-w-none">
          {/* Czarny box mniejszy, węższy, tekst responsywny */}
          <div className="bg-black bg-opacity-80 w-full sm:w-4/5 md:w-2/3 lg:w-3/5 xl:w-2/5 p-12 sm:p-16 md:p-20 shadow-lg rounded-md min-h-[200px] flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-5xl font-bold mb-6 text-white">
              Paterka – Catering z pasją do pysznych potraw!
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-xl text-white">
              Specjalizujemy się w serwowaniu różnorodnych pater i koryt na ciepło –
              idealnych na imprezy rodzinne, firmowe czy spotkania ze znajomymi.
            </p>
          </div>
        </div>

        {/* 🔹 Przycisk wyśrodkowany na dole */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <NavLink
            to="/paterka/oferta"
            className="bg-rose-950 text-white text-xl sm:text-2xl font-semibold py-4 px-6 hover:bg-rose-800 transition-colors flex items-center gap-2 rounded-md"
          >
            Zobacz naszą ofertę <FaArrowRight />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Home;
