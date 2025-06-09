import { NavLink } from 'react-router-dom';
import logo from '../assets/icons/logo.png'
import { CiSearch } from "react-icons/ci";
const NavBar = () => {
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
        <div className='flex items-center py-4 gap-3 justify-between'>
            <img className='w-20' src={logo} alt="" />
            <form>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
                    <input type="search" className="grow" placeholder="Search" />
                   
                </label>
                
            </form>
            <ul>
                <li className='space-x-2 md:space-x-5 md:text-xl text-xs'>
                    {
                        links.map(link => <NavLink to={link.link} >{link.name}</NavLink>)
                    }
                </li>

            </ul>
        </div>
    );
};

export default NavBar;