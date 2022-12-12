import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Typewriter from "typewriter-effect";
type Props = { nav: [] };

const Layout = (props: Props) => {
  let activeClassName = "bg-fuchsia-500 text-center block rounded py-2 px-4 text-white";
  let unactiveClassName = " transition ease-in-out  text-center block duration-300 rounded py-2 px-4 text-white bg-gray-500 hover:bg-fuchsia-500 hover:-translate-y-1"
  const [isActive, setActive] = useState(false)
  return (
    <div className="font-josefin">
      <div className="min-h-screen flex flex-col bg-black pt-[10px] mx-0 px-[20px]">
        <header className="...  w-[100%] md:block flex justify-between items-center relative" >
          <div className="flex text-center">
            <div className="text-[40px] text-center block font-bold text-white font-dancing">
              <Link to="/"> {
                <Typewriter
                  options={{
                    strings: ["PORTFOLIO"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              }</Link>
            </div>

          </div>
          <div className="md:block hidden" >
            <ul className="flex">
              {props.nav.map((item: any, index: number) => (
                <li className="flex-1 mr-2" key={index}>
                  <NavLink
                    to={item}
                    className={({ isActive }) =>
                      isActive ? activeClassName : unactiveClassName
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}


            </ul>
          </div>
          {/* mobi */} <div></div>

          <div>
            <div className="md:hidden block text-right " onClick={()=>{setActive(!isActive)}} >
               <button>icon</button></div>
            <ul className={isActive?"h-0 w-[100%] bg-white":"hidden"}>
              {props.nav.map((item: any, index: number) => (
                <li className="flex-1 mr-2" key={index}>
                  <NavLink
                    to={item}
                    className={({ isActive }) =>
                      isActive ? activeClassName : unactiveClassName
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}


            </ul> </div>

        </header>
        <main className=" rounded-md mt-4">
          <Outlet />
        </main>
        <footer className="fixed bottom-0">
          <a href="https://www.facebook.com/cuong.nguyenduc.52206654">git</a> fb{" "}
        </footer>
      </div>
    </div>
  );
};

export default Layout;
