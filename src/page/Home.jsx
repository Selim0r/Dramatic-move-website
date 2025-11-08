import React, { useState } from "react";
import Navber from "../component/Navber";
import SuperCarousel from "../component/SuperCarousel";
import MoveGalarry from "../component/MoveGalarry";
import { Toaster } from "react-hot-toast";
import Footer from "../component/Footer";

function Home() {
  const [search, setsearch] = useState("");
  return (
    <>
      <Navber search={search} setsearch={setsearch}></Navber>
      <SuperCarousel></SuperCarousel>
      <main>
        <MoveGalarry search={search}></MoveGalarry>
        <Toaster position="top-right"></Toaster>
      </main>

      <Footer></Footer>
    </>
  );
}

export default Home;
