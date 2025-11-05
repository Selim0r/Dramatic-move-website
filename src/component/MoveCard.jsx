import React from "react";
import { FaEye, FaStarHalfAlt } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";

function MoveCard({ move }) {
  return (
    <div className="font-mon transition-transform duration-300 hover:scale-105">
      <img
        src={move.card_picture}
        alt={move.title}
        className="h-60 mx-auto object-contain rounded-lg"
      />
      <div className="p-4 space-y-2">
        <div className="flex justify-between">
          <h3>{move.title}</h3>
          <div className="flex items-center gap-2">
            <FaEye className="text-gray-500" />
            <FaHeartCircleCheck className="text-rose-700" />
          </div>
        </div>
        <p className="text-sm text-gray-400">{move.released_date}</p>
        <div className="flex justify-between">
          <p className="text-black text-sm font-extrabold bg-yellow-300 rounded px-2">
            {move.platform}
          </p>
          <p className="text-sm text-gray-400 flex gap-2">
            <FaStarHalfAlt className="text-yellow-500" />
            {move.rating}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoveCard;
