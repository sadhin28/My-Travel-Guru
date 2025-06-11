import { NavLink } from 'react-router-dom';
import navimg from '../assets/icons/logo.png'
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-slick';
import DescriptionCard from './DescriptionCard';
import img1 from '../assets/icons/Rectangle 1.png'
import img2 from '../assets/icons/Sreemongol.png'
import img3 from '../assets/icons/sundorbon.png'
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
  const card = [
    {
      title: 'Cox’s  Bazar',
      image:  img1
    },
    {
      title: 'Sreemangal',
      image: img2
    },
    {
      title: 'Sundarbans',
      image: img3
    },
  ]

  return (
    <div className=''>
      <nav className="flex backdrop-blur-2xl text-white  items-center justify-between px-6 py-4  ">
        {/* Logo */}
        <div className="text-2xl  bg-amber-300 rounded-2xl p-3 font-bold flex items-center gap-2">
          <img src={navimg}
            className='w-20'
            alt="" />
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden  text-2xl focus:outline-none"
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex  items-center space-x-6">
          <input
            type="text"
            placeholder="Search your Destination..."
            className="w-full px-4 py-2 rounded text-white border"
          />
          {
            links.map(link => <NavLink to={link.link}>{link.name}</NavLink>)
          }
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden  duration-300 backdrop-blur-3xl text- bg-opacity-90 px-6 py-4 space-y-4 text-white">
          <input
            type="text"
            placeholder="Search your Destination..."
            className="w-full px-4 py-2 rounded text-white border"
          />
          <div className='grid gap-4 text-c'>
            {
              links.map(link => <NavLink to={link.link}>{link.name}</NavLink>)
            }
          </div>

        </div>
      )}
      
    </div>

  );
};

export default NavBar;