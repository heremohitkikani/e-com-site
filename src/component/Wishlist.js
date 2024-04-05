
import { Link  } from "react-router-dom";
import {useDispatch,  useSelector } from 'react-redux';
import Category from './Category';
import Price from "./Price";
import { useEffect, useState } from "react";
import { removiewishlist } from "../store/Slice";
import Header from "./Header";
// import Category from './Category';

function Wishlist() {
  const dispatch = useDispatch()
  let [data, setdata] = useState([]);
  let wishlistdata = useSelector((state) => state.data.wishlistdata);
  let temp = useSelector((state) => state.data.temp);
  console.log(temp);
  // useEffect(()=>{
  // },[])
  // console.log(alldata);
//   useEffect(() => {
//     if (temp.length > 0) {
//       setdata(temp);
//     } else {
//       setdata(alldata);
//     }
//   }, [alldata, temp]);


  return (
    <>
    <Header></Header>
      <div className='md:flex'>
     
        {
            wishlistdata.length===0?<h2 className="text-2xl font-bold">wishlist is empty</h2>:
            <div className=' md:container flex flex-wrap '>
          {
            wishlistdata.map((ele, ind) => {
              return (
                <>
                  <div className="xl:w-1/4 lg:w-4/12 md:w-1/2 p-4 w-full truncate">
                    <div className="bg-gray-100 p-6 rounded-lg w-full  ">
                      <div className="truncate rounded-lg w-full">
                        <Link to={`/SingleItem/${ele.id}`} className="truncate">
                        <img className="h-40 rounded w-full object-cover object-center  hover:scale-125 transition" src={ele.thumbnail} alt="content" />
                      </Link></div>
                      <h3 className="tracking-widest mt-6 text-orange-500 text-sm font-medium title-font">{ele.brand}</h3>
                      <h2 className="text-base text-gray-900 font-semibold title-font mb-4">{ele.title}</h2>
                      <div className='flex items-center justify-between'>
                        <h3 className="tracking-widest text-orange-500 text-sm font-medium title-font">$ {ele.price}</h3>
                        <button onClick={() => dispatch(removiewishlist({ ele: ele, ind: ind }))}  className="relative inline-flex text-sm no-underline items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-100 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                          </span>
                          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-100 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0" />
                          <span className="text-sm relative w-full text-left text-white transition-colors duration-100 ease-in-out group-hover:text-white">Remove Wishlist</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }

        </div >
        }
      </div>

    </>
  )
}
export default Wishlist