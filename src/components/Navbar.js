import React from 'react';
// import '../styles/nav.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>

   <nav className='flex items-center bg-black  text-white p-6 hover:shadow-amber-500/40 shadow-lg shadow-cyan-500/50 justify-between'>
        <h1 className='text-xl cursor-pointer underline shadow-lg shadow-amber-500/50 hover:decoration-orange-600'>
          <Link to="/">Md Mozzafar Ahmed</Link>
          </h1>
        <ul className='flex list-none uppercase'>
            <li className='cursor-pointer mr-4 font-italic underline decoration-sky-600 hover:decoration-orange-400 shadow-lg shadow-cyan-500/50'>
              <Link to="/">Home</Link>
              </li>
              
                    <li className='cursor-pointer mr-4 font-italic underline decoration-sky-600 hover:decoration-orange-400 shadow-lg shadow-cyan-500/50'>
                      <Link to="/education">Education</Link>
                    </li>
                <li className='cursor-pointer mr-4 font-italic underline decoration-sky-600 hover:decoration-orange-400 shadow-lg shadow-cyan-500/50'>
                  <Link to="/skills">Skills</Link>
                </li>
            <li className='cursor-pointer mr-4 font-italic underline decoration-sky-600 hover:decoration-orange-400 shadow-lg shadow-cyan-500/50'>
              <Link to="/contact">Contact</Link>
            </li>
         </ul>
      </nav>

    </div>
  )
}

export default Navbar;