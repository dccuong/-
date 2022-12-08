import React from "react";
import {Link, NavLink, Outlet } from "react-router-dom";

type Props = {nav:[]};

const Layout = (props: Props) => {
  let activeClassName = "bg-fuchsia-500 text-center block rounded py-2 px-4 text-white";
  let unactiveClassName ="text-center block rounded py-2 px-4 text-white bg-violet-500 hover:bg-fuchsia-500"
  return (
    <div className="font-josefin">
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-orange-200 to-pink-500 pt-[20px] mx-0 px-[20px]">
        <header className="...">
          <div className="flex">
            <div className="text-[40px] text-center block font-bold text-white font-dancing">
           <Link to="/"> PORTFOLIO</Link>  
            </div>
            <div>icon</div>
          </div>
          <ul className="flex">
            {props.nav.map((item:any,index:number)=>(
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
