import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterdata } from '../store/Slice';

function Price() {
  let [Min, setMin] = useState(0);
  let [Max, setMax] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let alldata = useSelector((state) => state.data.alldata);
  let priceRange = [
    { min: 0, max: 2001 },
    { min: 0, max: 100 },
    { min: 100, max: 300 },
    { min: 300, max: 500 },
    { min: 500, max: 1000 },
    { min: 1000, max: 2000 },
  ]

  let dispatch = useDispatch();

  const handleSave = (e) => {
    const selectedMax = parseInt(e.target.value);
    const selectedMin = priceRange.find(ele => ele.max === selectedMax).min;

    setMax(selectedMax);
    setMin(selectedMin);

    const filterData = alldata.filter((ele) => ele.price >= selectedMin && ele.price <= selectedMax);
    dispatch(filterdata(filterData));
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }




  return (
    <div>
      <div
        className={`${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } fixed inset-y-0 right-0 z-10 bg-white md:hidden transition-transform duration-300 ${isMenuOpen ? 'ease-out' : 'ease-in'
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
          
            {/* <div className='flex text-2xl text-gray-600 items-center mb-4'>
              <div className='ms-2 flex items-center'>
                <Link to='/CartData' className='hover:scale-125 transition'>
                  <a href='' className='text-gray-500 hover:text-orange-400 transition'>
                    <FaRegHeart />
                  </a>
                </Link>
                <p className='m-0 ms-2'> | 0 |</p>
              </div>
              <div className='ms-2 flex items-center'>
                <Link to='/CartData' className='hover:scale-125 transition'>
                  <a href='' className='text-gray-500 hover:text-orange-500 transition'>
                    <BsFillCartPlusFill />
                  </a>
                </Link>
                <p className='m-0 ms-2'> | {cartlength}</p>
              </div>
            </div> */}
            {/* <Price /> */}
            {/* <Category></Category> */}
          </nav>
        </div>
      </div>
      <select onChange={(e) => handleSave(e)} className='w-full text-center border-2 text-white  bg-orange-500 py-2 rounded'>
        {priceRange.map((ele, ind) => (
          <option key={ind} value={ele.max}>
            <option key={ind} value={ele.max}>
              {ele.max === 2001 ? 'All Range' : `${ele.min} - ${ele.max}`}
            </option>
          </option>
        ))}
      </select>


      {/* <ul>
        {priceRange.map((ele, ind) => {
          return (
            <li key={ind}>
              <div onClick={() => { handleSave(ele.min, ele.max) }} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center'>
                <span className='w-1/3'>{ele.min}</span>
                <span className='w-1/3'>to</span>
                <span className='w-1/3'>{ele.max}</span>
              </div>
            </li>
          )
        })}
      </ul> */}
    </div>
  )
}

export default Price    