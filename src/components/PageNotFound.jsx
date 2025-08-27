import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 px-4 text-center">
      <h1 className="text-6xl font-bold mb-4 text-rose-950">404</h1>
      <p className="text-2xl mb-6">Ups... Ta strona nie istnieje.</p>
      <NavLink
        to="/"
        className="inline-block bg-rose-950 text-white text-xl font-semibold py-3 px-6 rounded-lg hover:bg-rose-800 transition-colors"
      >
        Wróć do strony głównej
      </NavLink>
    </div>
  );
};

export default PageNotFound;
