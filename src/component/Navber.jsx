import React from "react";

function Navber() {
  const lnk = (
    <>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
    </>
  );

  return (
    <>
      <div className="navbar  shadow-md bg-black/40 fixed top-0 right-0 left-0 z-100 text-white backdrop-blur-md  ">
        <div className="w-11/12 mx-auto flex justify-between items-center">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round "
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content  bg-black/40   text-white backdrop-blur-md  rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {lnk}
              </ul>
            </div>
            <div className="flex gap-10 items-center">
              <a className=" text-xl">Dramatic</a>
              <div className="navbar-center hidden lg:flex">
                <ul className="flex items-center gap-5">{lnk}</ul>
              </div>
            </div>
          </div>

          <div className=" flex gap-4">
            <label className="flex items-center bg-white/10 gap-2 rounded-full px-3 py-2 border border-transparent focus-within:border-yellow-400 transition duration-300">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                required
                placeholder="Search"
                className="bg-transparent outline-none text-sm placeholder-white/50 text-white"
              />
            </label>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100  rounded-full ring-2 ring-offset-2 w-9 h-9">
                <img
                  src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navber;
