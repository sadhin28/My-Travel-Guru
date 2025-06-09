import NavBar from "./NavBar";
const Home = () => {
    return (
        <div className="home opacity-95 h-screen bg-center   bg-cover">
           <header className=" px-30 md:backdrop-blur-xl">
              <NavBar></NavBar>
           </header>
        </div>
    );
};

export default Home;