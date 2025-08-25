import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkedAlt
} from 'react-icons/fa';

const Kontakt = () => {
  return (
    <div className="bg-orange-50 text-black pt-50 min-h-screen flex flex-col md:flex-row px-6 lg:px-20">
      {/* Lewa sekcja: Mapa */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-start items-center text-center">
        <h2 className="text-4xl font-extrabold mb-8 h-16 flex items-center">
          Znajdujemy się tutaj
        </h2>
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-xl mb-6 max-w-xl">
          <iframe
            title="Paterka — mapa"
            className="w-full h-full"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.123456789!2d18.6519096!3d50.0743676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47114d6712e75779%3A0xc71d7e488633cf8a!2sPaterka+Justyna+Obara!5e0!3m2!1spl!2spl!4v0000000000000"
          />
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=50.0743676,18.6519096"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xl bg-rose-950 text-white py-3 px-6 rounded-lg hover:bg-rose-800 transition-colors"
        >
          <FaMapMarkedAlt />
          Otwórz w Mapach
        </a>
      </div>

      {/* Prawa sekcja: Kontakt */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-start items-center text-center">
        <h2 className="text-4xl font-extrabold mb-8 h-16 flex items-center">
          Zamówienia przyjmujemy pod
        </h2>

        <div className="text-xl mb-6 flex items-center gap-4 max-w-md">
          <FaMapMarkerAlt className="text-2xl text-rose-950" />
          <p>
            ul. Kochanowskiego 38a<br />
            44-249 Żory
          </p>
        </div>

        <div className="text-xl mb-6 flex items-center gap-4 max-w-md">
          <FaPhone className="text-2xl text-rose-950" />
          <a href="tel:+48570157453" className="hover:underline">
            +48 570 157 453
          </a>
        </div>

        <div className="text-xl mb-6 flex items-center gap-4 max-w-md">
          <FaFacebook className="text-2xl text-blue-600" />
          <a
            href="https://www.facebook.com/justyna.obara"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            facebook.com/justyna.obara
          </a>
        </div>

        <div className="text-xl mb-6 flex items-center gap-4 max-w-md">
          <FaWhatsapp className="text-2xl text-green-600" />
          <a
            href="https://wa.me/48570157453"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            +48 570 157 453
          </a>
        </div>

        <p className="text-lg text-gray-700 mt-4 max-w-md">
          Jesteśmy dostępni <strong>7 dni w tygodniu od 9 do 16</strong><br />
        </p>
      </div>
    </div>
  );
};

export default Kontakt;
