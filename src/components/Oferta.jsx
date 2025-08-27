import React from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";

const ofertaData = {
  patery: [
    { title: "Patera nr 1", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p1.JPG" },
  { title: "Patera nr 2", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p2.JPG" },
  { title: "Patera nr 3", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p3.JPG" },
  { title: "Patera nr 4", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p4.JPG" },
  { title: "Patera nr 5", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p5.JPG" },
  { title: "Patera nr 6", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p6.JPG" },
  { title: "Patera nr 7", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p7.JPG" },
  { title: "Patera nr 8", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p8.JPG" },
  { title: "Patera nr 9", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p9.JPG" },
  { title: "Patera nr 10", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p10.JPG" },
  { title: "Patera nr 11", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p11.JPG" },
  { title: "Patera nr 12", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p12.JPG" },
  { title: "Patera nr 13", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p13.JPG" },
  { title: "Patera nr 14", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p14.JPG" },
  { title: "Patera nr 15", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p15.JPG" },
  { title: "Patera nr 16", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p16.JPG" },
  { title: "Patera nr 17", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p17.JPG" },
  { title: "Patera nr 18", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p18.JPG" },
  { title: "Patera nr 19", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p19.JPG" },
  { title: "Patera nr 20", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p20.JPG" },
  { title: "Patera nr 21", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p21.JPG" },
  { title: "Patera nr 22", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p22.JPG" },
  { title: "Patera nr 23", description: "Pyszne dania mięsne idealne na imprezy rodzinne.", imageUrl: "patery/p23.JPG" },
  ],
  daniaMiesne: [
    { title: "Paterkowa Świnka", description: "Mała paterka w kształcie świnki, idealna na imprezy.", imageUrl: "patery/paterkowa_swinia.JPG" },
    { title: "Paterkowy Wieprz", description: "Wyjątkowa patera w kształcie wieprza, pełna smakołyków.", imageUrl: "patery/paterkowy_wieprz.JPG" },
    { title: "Drobiowy Półmisek", description: "Wyborne dania drobiowe na eleganckim półmisku.", imageUrl: "patery/drobiowy_polmisek.JPG" },
    { title: "Drobiowy Półmisek z kulkami", description: "Półmisek drobiowy z dodatkiem soczystych kulek mięsnych.", imageUrl: "patery/drobiowy_polmisek_kulki.JPG" },
  ],
  koryta: [
    { title: "Koryto 1", description: "Duże koryto z mięsem idealne na imprezy rodzinne.", imageUrl: "patery/koryto1.JPG" },
    { title: "Koryto 2", description: "Duże koryto z mięsem idealne na imprezy rodzinne.", imageUrl: "patery/koryto2.JPG" },
    { title: "Koryto 3", description: "Duże koryto z mięsem idealne na imprezy rodzinne.", imageUrl: "patery/koryto3.JPG" },
    { title: "Koryto 4", description: "Duże koryto z mięsem idealne na imprezy rodzinne.", imageUrl: "patery/koryto4.JPG" },
    { title: "Koryto 5", description: "Duże koryto z mięsem idealne na imprezy rodzinne.", imageUrl: "patery/koryto5.JPG" },
  ]
};

const Oferta = () => {
  const renderCards = (items) => (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-12">
      {items.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );

  return (
    <section className="bg-orange-50 pt-12 px-4 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 mt-10 text-center">Nasza oferta</h2>

        {/* Małe menu (sticky) */}
        <nav className="z-50 bg-orange-50 py-3">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-3xl sm:text-2xl font-semibold">
            <a
              href="#patery"
              className="px-2 border-l border-r first:border-none border-gray-400 hover:text-rose-800 transition-colors"
            >
              Patery
            </a>
            <a
              href="#dania-miesne"
              className="px-2 border-l border-r border-gray-400 hover:text-rose-800 transition-colors"
            >
              Dania mięsne
            </a>
            <a
              href="#koryta"
              className="px-2 border-l border-r border-gray-400 hover:text-rose-800 transition-colors"
            >
              Koryta
            </a>
          </div>
        </nav>


        {/* Sekcja: Patery */}
        <h3 id="patery" className="text-3xl font-semibold mb-6 text-center pt-20">Patery</h3>
        {renderCards(ofertaData.patery)}

        {/* Sekcja: Dania mięsne */}
        <h3 id="dania-miesne" className="text-3xl font-semibold mb-6 text-center pt-20">Dania mięsne i półmiski</h3>
        {renderCards(ofertaData.daniaMiesne)}

        {/* Sekcja: Koryta */}
        <h3 id="koryta" className="text-3xl font-semibold mb-6 text-center pt-20">Koryta</h3>
        {renderCards(ofertaData.koryta)}

        {/* Nawigacja */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8 mb-5">
          <NavLink
            to="/paterka"
            className="inline-block bg-rose-950 text-white font-semibold py-4 px-6 rounded-lg hover:bg-rose-800 transition-colors text-base md:text-xl text-center"
          >
            Wróć na stronę główną
          </NavLink>

          <NavLink
            to="/kontakt"
            className="inline-block bg-rose-950 text-white font-semibold py-4 px-6 rounded-lg hover:bg-rose-800 transition-colors text-base md:text-xl text-center"
          >
            Złóż zamówienie
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Oferta;
