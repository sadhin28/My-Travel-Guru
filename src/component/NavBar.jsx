import { NavLink } from 'react-router-dom';
import bgimg from '../assets/icons/Rectangle 1.png'
import { useState } from 'react';
const NavBar = () => {
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const links = [
        {
            name: 'News',
            link: '/'

        },
        {
            name: 'Destination',
            link: 'Destination'

        },
        {
            name: 'Blog',
            link: 'Blog'

        },
        {
            name: 'Contact',
            link: 'Contact'

        },
        {
            name: 'Login',
            link: 'Login'

        },
    ]
    return (
        <header
      className="relative header opacity-67 bg-black h-screen bg-cover bg-center text-white bg-opacity-0"
      
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-black bg-opacity-40">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-2">
          🧳 <span>Travel Guru</span>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <input
            type="text"
            placeholder="Search your Destination..."
            className="px-4 py-2 rounded text-black"
          />
         {
            links.map(link=><NavLink to={link.link}>{link.name}</NavLink>)
         }
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-6 py-4 space-y-4 text-white">
          <input
            type="text"
            placeholder="Search your Destination..."
            className="w-full px-4 py-2 rounded text-black"
          />
           <div className='grid gap-4 text-c'>
             {
            links.map(link=><NavLink to={link.link}>{link.name}</NavLink>)
            }
           </div>
        
        </div>
      )}

      {/* Hero Text */}
      <div className="absolute  top-1/2 left-6 md:left-12 transform -translate-y-1/2 max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold">COX'S BAZAR</h1>
        <p className="my-4 text-sm md:text-base">
          Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh.
        </p>
        <button className="bg-yellow-400 text-black px-5 py-2 rounded font-semibold">Booking →</button>
      </div>

      {/* Destination Cards */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 md:gap-6">
        {[
          { title: "COX’S BAZAR", img: "/src/assets/icons/Rectangle 1.png", highlight: true },
          { title: "SREEMANGAL", img: "/src/assets/icons/Rectangle 26.png" },
          { title: "SUNDARBANS", img: "/src/assets/icons/Rectangle 28.png" }
        ].map(({ title, img, highlight }) => (
          <div
            key={title}
            className={`w-32 md:w-40 h-52 md:h-64 rounded-xl overflow-hidden relative ${
              highlight ? 'border-4 border-yellow-400' : ''
            }`}
          >
            <img src={img} alt={title} className="w-full h-full object-cover opacity-80" />
            <div className="absolute bottom-3 left-3 font-bold text-white text-sm">{title}</div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        <button className="w-8 h-8 bg-white text-black rounded-full">‹</button>
        <button className="w-8 h-8 bg-white text-black rounded-full">›</button>
      </div>
    </header>
    );
};

export default NavBar;