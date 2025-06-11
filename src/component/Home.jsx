import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
const Home = () => {
    return (
       <div className="border-l-neutral-700  bg-cover bg-center header">
          <div className=" opacity-70 bg-gray-900 h-screen bg-center   bg-cover">
            <header className="opacity-100  text-blue-500">
               <NavBar></NavBar>
            </header>
            <main className="text-white">
               <Outlet></Outlet>
            </main>
        </div>
       </div>
    );
};

export default Home;