
import { Link, useParams } from "react-router-dom";
import { useSelector ,useDispatch} from 'react-redux';
import Category from './Category';
import Header from './Header';
import Price from "./Price";
import { useEffect, useState } from "react";
import { wishlistdata } from "../store/Slice";
// import Category from './Category';

function CategoryData() {
  const cart = useParams();
  const dispatch=useDispatch()
  let [data, setdata] = useState([]);
  let [incre, setincre] = useState('');


  let alldata = useSelector((state) => state.data.alldata);
  let temp = useSelector((state) => state.data.temp);

  useEffect(() => {
    if (temp.length > 0) {
      setdata(temp);
    } else {
      setdata(alldata);
    }
  }, [alldata, temp]);


  return (
    <>
      <Header></Header>
      <div className=' md:flex'>
      <div className='hidden md:block md:w-2/12 '>
          <div className="w-full"><Price /></div>
          <Category></Category>
        </div>
        <div className='md:hidden  '>
          <div className="w-full">
            <Price />
          </div>
        </div>
        <div className='md:w-10/12 flex flex-wrap '>
          {
            data.map((ele, ind) => {
              return (
                ele.category === cart.id ?incre++?
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
                    <button onClick={() => dispatch(wishlistdata({ ele: ele, ind: ind }))} className="relative inline-flex text-sm no-underline items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-100 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-100 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0" />
                      <span className="text-sm relative w-full text-left text-white transition-colors duration-100 ease-in-out group-hover:text-white">Add to Wishlist</span>
                    </button>
                  </div>
                </div>
              </div> :incre===0?<p>no data</p>:<></> :<></>
              )
            })
          }
        </div >
      </div>

    </>
  )
}
export default CategoryData