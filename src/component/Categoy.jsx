import React from "react";

function Categoy({ catagory, selectCatagory, setselectCatagory }) {
  return (
    <div className="flex flex-wrap justify-start gap-4 md:gap-7 py-10">
      {catagory.map((cat) => (
        <button
          key={cat}
          onClick={() => setselectCatagory(cat)}
          className={`px-4 py-2 rounded-full font-medium ${
            selectCatagory === cat
              ? "bg-yellow-500 text-black "
              : "border border-yellow-500 text-gray-300 hover:bg-yellow-500 hover:text-black"
          }`}
        >
          {cat}{" "}
        </button>
      ))}
    </div>
  );
}

export default Categoy;
