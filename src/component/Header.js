import React, { useState } from 'react';
import { FaSearch, FaRegHeart, FaBars } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { searchdata } from '../store/Slice';
import { useDispatch, useSelector } from 'react-redux';
import Category from './Category';
import Price from './Price';

function Header() {
  let navigate = useNavigate();
  let cartlength = useSelector((state) => state.data.cartdata.length);
  let wishlistdata = useSelector((state) => state.data.wishlistdata.length);
  let [search, setser] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchdata(search));
    navigate('/SearchData');
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className="md:container px-3  md:flex md:justify-between items-center   mx-auto w-full  py-3 drop-shadow-lg mb-10">
        <div className="flex items-center justify-between">
          <Link to='/'>
            <img src={require(`../images/header-logo.png`)} className='h-[70px] hover:scale-125 transition'></img>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <FaBars className="h-6 w-6 fill-current" />
            </button>
          </div>
        </div>

        {/* Search input */}
        <div className='items-center bg-gray-200 rounded md:flex hidden'>
          <form onSubmit={(e) => { handleSubmit(e) }} method='post' className='flex'>
            <input
              type='text'
              value={search}
              onChange={(e) => { setser(e.target.value) }}
              placeholder="Search here..."
              size={29}
              className='p-2 text-gray-500 bg-gray-200 rounded-l'
            />
            <button type="submit" className='p-2 text-gray-500 hover:bg-gray-300 rounded-r transition'>
              <FaSearch />
            </button>
          </form>
        </div>

        {/* Icons */}
        <div className='hidden md:flex text-2xl text-gray-600 items-center'>
          <div className='ms-2 flex items-center'>
            <Link to='/Wishlist' className='hover:scale-125 transition'>
              <a href='' className='text-gray-500 hover:text-orange-400 transition'>
                <FaRegHeart />
              </a>
            </Link>
            <p className='m-0 ms-2'> | {wishlistdata} |</p>
          </div>
          <div className='ms-2 hidden md:flex items-center'>
            <Link to='/CartData' className='hover:scale-125 transition'>
              <a href='' className='text-gray-500 hover:text-orange-500 transition'>
                <BsFillCartPlusFill />
              </a>
            </Link>
            <p className='m-0 ms-2'> | {cartlength}</p>
          </div>
        </div>
      </div>

      {/* Off-canvas menu for small devices */}
      <div
        className={`${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed inset-y-0 right-0 z-10 bg-white md:hidden transition-transform duration-300 ${
          isMenuOpen ? 'ease-out' : 'ease-in'
        }`}
      >
        <div className="h-full overflow-y-auto">
          <nav className="p-4">
            <div className="flex justify-end mb-4">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Off-canvas menu items */}
            <div className='flex items-center bg-gray-200 rounded mb-4'>
              <form onSubmit={(e) => { handleSubmit(e) }} method='post' className='flex w-full'>
                <input
                  type='text'
                  value={search}
                  onChange={(e) => { setser(e.target.value) }}
                  placeholder="Search apps, games, movies, and more"
                  className='p-2 text-gray-500 bg-gray-200 rounded-l w-full'
                />
                <button type="submit" className='p-2 text-gray-500 hover:bg-gray-300 rounded-r transition'>
                  <FaSearch />
                </button>
              </form>
            </div>
            <div className='flex text-2xl text-gray-600 items-center mb-4'>
              <div className='ms-2 flex items-center'>
                <Link to='/Wishlist' className='hover:scale-125 transition'>
                  <a href='' className='text-gray-500 hover:text-orange-400 transition'>
                    <FaRegHeart />
                  </a>
                </Link>
                <p className='m-0 ms-2'> | {wishlistdata} |</p>
              </div>
              <div className='ms-2 flex items-center'>
                <Link to='/CartData' className='hover:scale-125 transition'>
                  <a href='' className='text-gray-500 hover:text-orange-500 transition'>
                    <BsFillCartPlusFill />
                  </a>
                </Link>
                <p className='m-0 ms-2'> | {cartlength}</p>
              </div>
            </div>
            <Category></Category>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header