import React from "react";
import Navber from "../component/Navber";
import SuperCarousel from "../component/SuperCarousel";
import MoveGalarry from "../component/MoveGalarry";
import { Toaster } from "react-hot-toast";
import Footer from "../component/Footer";

function Home() {
  return (
    <>
      <Navber></Navber>
      <SuperCarousel></SuperCarousel>
      <main>
        <MoveGalarry></MoveGalarry>
        <Toaster position="top-right"></Toaster>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Home;
