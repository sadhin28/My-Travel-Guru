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
    <div className='header bg-center bg-cover'>
      <nav className="flex   items-center justify-between px-6 py-4 backdrop-blur-2xl text-black">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-2">
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
            className="px-4 py-2 rounded text-black"
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
      <header
        className="relative  opacity-70  bg-black h-screen bg-cover  bg-center text-white bg-opacity-0"

      >
      <div className='grid md:grid-cols-2 md:gap-0 gap-10  items-center justify-center justify-items-center'>
         <div className="p-10 md:relative top-40 md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold">COX'S BAZAR</h1>
          <p className="my-4 text-sm md:text-base">
            Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh.
          </p>
          <button className="bg-yellow-400 btn text-black px-5 py-2 rounded font-semibold">Booking →</button>
        </div>
          <div className=' flex gap-5 md:relative top-40'>
              {
                card.map(data=><DescriptionCard  data={data}></DescriptionCard>)
              }
              
          </div>
      </div>
      </header>
      
    </div>

  );
};

export default NavBar;