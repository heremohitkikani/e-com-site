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
  const id = useParams();
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
              ele.id == id.id ?
                <div className='flex '>
                  <div className='basis-2/12 mx-auto'>
                    {
                      ele.images.map((ele) => {
                        return (

                          <div className='my-3 getimg-hover ' >
                            <img src={ele} className='w-24 h-24 mx-auto ' onClick={() => dataimage(ele, ind)} style={{ cursor: 'pointer' }} ></img>
                          </div>

                        )
                      })
                    }
                  </div>
                  <div className='basis-6/12'>
                    <img src={img ? img : ele.thumbnail} className='mx-auto' style={{ borderRadius: '20px', width: '60%',height:'', objectFit: 'cover',backgroundPosition: 'center' }}></img>
                  </div>
                  <div className='basis-4/12'>
                    <h5 className='mt-3' style={{ fontFamily: 'forte' }}> {ele.title} : -</h5>
                    <p className='mt-3' style={{ lineHeight: '30px' }}><font style={{ borderBottom: '2px solid black', paddingBottom: '5px', fontFamily: 'forte' }}>About product : </font>"{ele.description}"</p>
                    <h6 className='mt-3'>Price : $ {ele.price}  ||  Des : {ele.discountPercentage} % <i style={{ color: '#F14B17' }} className='ms-2'><IoMdPricetag  ></IoMdPricetag  > </i></h6>
                    <h6 className='mt-3'>Rating : {ele.rating}  <i style={{ color: '#D8B338' }} className='ms-2'><FaStar></FaStar></i></h6>
                    <h6 className='mt-3'>Stock : {ele.stock} . . . <i style={{ color: '#2B5C85' }} className='ms-2'><AiOutlineStock ></AiOutlineStock > </i></h6>
                    <h6 className='mt-3'>Brand : {ele.brand}<i style={{ color: '#2B5C85' }} className='ms-2'><SiBrandfolder></SiBrandfolder> </i></h6>
                    <h6 className='mt-3'>Category : {ele.category} <i style={{ color: '#CB6545' }} className='ms-2'><MdCategory></MdCategory> </i></h6>
                 <Link to='/CartData' className='bg-orange-400 text-white p-2 mt-5'><button>BACK TO CART</button></Link>
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
