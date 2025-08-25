import React from "react";

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        src={imageUrl}
        alt={title}
        className="h-60 w-full object-cover"
      />
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default Card;
