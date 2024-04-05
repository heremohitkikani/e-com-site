import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { MdCategory } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { IoMdPricetag } from "react-icons/io";
import Header from './Header';

import { carthandler, wishlistdata } from '../store/Slice';

export default function SingleItem() {
  const params = useParams();
  let singledata = useSelector((state) => state.data.alldata)
  let status = useSelector((state) => state.data.status)
  const dispatch = useDispatch()
  console.log(singledata);
  // let [Goto, setGoto] = useState(false);
  let [img, setimg] = useState('')

  const dataimage = (e, ind) => {
    // // setimg(e)
    setimg(e)
  }
  return (
    <div>
      <Header></Header>
      <div className='container'>
        {

          singledata.map((ele, ind) => {
            return (
              ele.id == params.id ?
                <div className='lg:flex'>
                  <div className='lg:w-2/12   flex md:block md:no-wrap justify-between md:mx-auto'>
                    {
                      ele.images.map((ele) => {
                        return (

                          <div className=' smallimg '>
                            <div className=' my-3 w-10 md:w-28  md:mx-auto'>
                              <img
                                src={ele}
                                className='w-full'
                                onClick={() => dataimage(ele)}
                                style={{ cursor: 'pointer' }}
                                alt="description"
                              />
                            </div>
                          </div>


                        )
                      })
                    }
                  </div>
                  <div className='lg:w-6/12 flex items-center mt-4 md:pe-5'>
                    <img src={img ? img : ele.thumbnail} className=' mx-auto max-h-[300px] object-contain' ></img>
                  </div>
                  <div className='lg:w-4/12 text-sm md:text-base'>
                    <h5 className='mt-3' style={{ fontFamily: 'forte' }}> {ele.title} : -</h5>
                    <p className='mt-3' style={{ lineHeight: '30px' }}><font style={{ borderBottom: '2px solid black', paddingBottom: '5px', fontFamily: 'forte' }}>About product : </font>"{ele.description}"</p>
                    <div className='flex items-center mt-5'>
                      <h6 className=''>Price : {ele.price} ₹ ||  Des : {ele.discountPercentage} %</h6>
                      <i className='ms-2 text-orange-500'><IoMdPricetag  ></IoMdPricetag  > </i>
                    </div>
                    <div className='mt-5 flex items-center'>
                      <h6 className='m-0'>Rating : {ele.rating}  </h6>
                      <i className='ms-2'><FaStar></FaStar></i>
                    </div>
                    <div className='flex items-center mt-5'>
                      <h6 className=''>Stock : {ele.stock} . . .</h6>
                      <i className='ms-2 text-blue-500'><AiOutlineStock ></AiOutlineStock > </i>
                    </div>
                    <div className='flex items-center mt-5'>
                      <h6 className=''>Brand : {ele.brand}</h6>
                      <i className='ms-2 text-purple-600'><SiBrandfolder></SiBrandfolder> </i>
                    </div>
                    <div className='flex items-center mt-5'>
                      <h6 className=''>Category : {ele.category} </h6>
                      <i className='ms-2 text-red-700'><MdCategory></MdCategory> </i>
                    </div>
                    <button onClick={() => dispatch(wishlistdata({ ele: ele, ind: ind }))} className="mt-6 me-3 relative inline-flex text-sm no-underline items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-100 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-100 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0" />
                      <span className="text-sm relative w-full text-left text-white transition-colors duration-100 ease-in-out group-hover:text-white">Add to Wishlist</span>
                    </button>
                    {/* {
                      Goto=== false?<button onClick={() => dispatch(carthandler({ ele: ele, ind: ind }))} className='bg-orange-500 text-white py-2 px-3 mt-4 me-2'>add to cart</button>:<Link to='/cartdata'> <button className='bg-orange-500 text-white py-2 px-3 mt-4 me-2'>go to cart</button></Link>
                    } */}

                    <button onClick={() => dispatch(carthandler({ ele: ele, ind: ind }))} className="mt-5 md:mt-0 relative inline-flex text-sm no-underline items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-100 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-100 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0" />
                      <span className="text-sm relative w-full text-left text-white transition-colors duration-100 ease-in-out group-hover:text-white">{status}</span>
                    </button>
                    {/* <button onClick={() => dispatch(carthandler({ ele: ele, ind: ind }))} className='bg-orange-500 text-white py-2 px-3 mt-4 me-2'>{
                      status
                    }</button> */}


                    {/* {
                      ele.status == 1 ? <button onClick={() => dispatch(carthandler(ele, ind1))} className='bg-orange-500 text-white py-2 px-3 mt-4 me-2'>Add to cart</button> :<Link to='/cartdata'> <button className='bg-orange-500 text-white py-2 px-3 mt-4 me-2'>go to cart</button></Link>
                  } */}

                  </div>

                </div>
                : <></>
            )
          })
        }
      </div>
    </div>
  )
}
