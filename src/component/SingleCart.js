import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";

// import { carthandler } from './store/Slice';



import { FaStar } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { MdCategory } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { IoMdPricetag } from "react-icons/io";
import Header from './Header';

// import { carthandler } from '../store/Slice';



export default function Singlecart() {
  const params = useParams();
  let singledata = useSelector((state) => state.data.alldata)
  // const dispatch = useDispatch()
  console.log(singledata);
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
                <div className='lg:flex '>
                  <div className='lg:w-2/12 mx-auto'>
                    {
                      ele.images.map((ele) => {
                        return (

                          <div className='my-3 smallimg' >
                            <img src={ele} className='w-20 h-20 mx-auto ' onClick={() => dataimage(ele)} style={{ cursor: 'pointer' }} ></img>
                          </div>

                        )
                      })
                    }
                  </div>
                  <div className='lg:w-6/12 flex items-center '>
                    <img src={img ? img : ele.thumbnail} className=' mx-auto max-h-[300px] object-contain' ></img>
                  </div>
                  <div className='lg:w-4/12'>
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
                      <i  className='ms-2 text-red-700'><MdCategory></MdCategory> </i>
                    </div>
                    

                    <Link to='/CartData' className='bg-orange-400 text-white p-2 '><button className='mt-7'>BACK TO CART</button></Link>

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