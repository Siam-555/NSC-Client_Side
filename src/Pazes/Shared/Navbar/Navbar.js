import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const listItem = <>
    <li><Link to='/home'>Home</Link></li>
    <li><Link to='/home'>About</Link></li>
    <li><Link to='/home'>contact</Link></li>
  </>;
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {listItem}
          </ul>
        </div>
        <Zoom>
          <Link to='/home' className="btn btn-ghost normal-case text-xl">নরসিংদী বিজ্ঞান কলেজ</Link>
        </Zoom>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {listItem}
        </ul>

        {/* <li tabindex="0">
            <a>
              Parent
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li> */}

      </div>
      <div className="navbar-end">
        {/* <Link to='/home' className="btn">Get started</Link> */}
        <Link to='/login'><BsPersonCircle /></Link>
      </div>
    </div>
  );
};

export default Navbar;