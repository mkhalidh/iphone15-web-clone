import React from 'react'
import { navLists } from '../constants'
import { appleImg, bagImg, searchImg } from '../utils'
import { Link, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
  const handleNavClick = (nav) => {
    if (nav === 'Home') {
      window.location.reload(); // reload the page when "Home" is clicked
    }
  }

  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width '>
        <img src={appleImg} alt='Apple' width={14} height={18} />
        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav) => (
            <div
              key={nav}
              className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'
              onClick={() => handleNavClick(nav)} // Handle click for "Home"
            >
              {nav !== 'Home' && (
                <Link
                  to={nav} // This should match the component name/id where we want to scroll
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  {nav}
                </Link>
              )}
              {nav === 'Home' && nav} {/* No scroll for Home */}
            </div>
          ))}
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} alt='search' width={18} height={18} />
          <img src={bagImg} alt='bag' width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
