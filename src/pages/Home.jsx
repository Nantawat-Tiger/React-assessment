
import React from 'react';
import {Link,Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



function Home() {
    const location = useLocation();

    return (
      <div className="p-4">

         
      {location.pathname === '/' && (
        <h1 className="text-center text-5xl font-semibold mb-8">Generation Thailand  <br />React-Assessment </h1>
      )}
      {location.pathname === '/UserHomeSector' && (
        <h1 className="text-center text-5xl font-semibold mb-8">Generation Thailand  <br />Home-User Sector </h1>
      )}
      {location.pathname === '/AdminHomeSector' && (
        <h1 className="text-center text-5xl font-semibold mb-8">Generation Thailand  <br />Home-Admin Sector</h1>
      )}
        <nav>
          
            <div className=" flex justify-center items-center  space-x-10 mb-20" >
              <Link
                to="UserHomeSector"
                className=" text-white bg-blue-500 py-2 px-6 rounded-md font-bold text-2xl mt-10"
              >
                 User Home Sector
              </Link>
           
            
              <Link
                to="AdminHomeSector"
                className=" text-white bg-blue-500 py-2 px-6 rounded-md font-bold text-2xl mt-10"
              >
                 Admin Home Sector
              </Link>
            
          </div>
        </nav>
        <div>
        <Outlet />
        </div>
      </div>
    );
  }
  
  export default Home;
