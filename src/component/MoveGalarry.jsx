import React, { useEffect, useState } from "react";
import Categoy from "./Categoy";
import toast from "react-hot-toast";
import MoveCard from "./MoveCard";
import TopRated from "./TopRated";

function MoveGalarry() {
  const [move, setmove] = useState([]);
  const [loading, setloading] = useState(true);
  const [selectCatagory, setselectCatagory] = useState("All");
  const [ShowAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/Movies.json")
      .then((res) => res.json())
      .then((data) => setmove(data))
      .catch((error) => {
        toast.error("Faild to load");
      })
      .finally(() => setloading(false));
  }, []);

  const catagory = ["All", ...new Set(move.map((m) => m.category))];

  const filterMove =
    selectCatagory === "All"
      ? move
      : move.filter((m) => m.category === selectCatagory);
  const visiabaleMove = ShowAll ? filterMove : filterMove.slice(0, 8);

  return (
    <>
      <div className="w-11/12 mx-auto py-16">
        <h1 className="text-lg lg:text-xl">RECOMENDED FOR YOU</h1>
        <Categoy
          catagory={catagory}
          selectCatagory={selectCatagory}
          setselectCatagory={setselectCatagory}
        ></Categoy>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-dots loading-xl text-white"></span>
          </div>
        ) : filterMove.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {visiabaleMove.map((move) => (
                <MoveCard key={move.id} move={move}></MoveCard>
              ))}
            </div>
            {filterMove.length > 8 && (
              <div className="flex justify-center mt-8">
                <button
                  className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-all duration-300"
                  onClick={() => setShowAll(!ShowAll)}
                >
                  {ShowAll ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-gray-400 text-center">No Movie found</p>
        )}
      </div>
      <TopRated key={move.id} move={move}></TopRated>
    </>
  );
}

export default MoveGalarry;
