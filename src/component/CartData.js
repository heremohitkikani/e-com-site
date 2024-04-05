import React from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, removecart } from '../store/Slice';
import { Link } from 'react-router-dom';

function CartData() {
    const dispatch = useDispatch();

    let cartdata = useSelector((state) => state.data.cartdata);
    let incre = useSelector((state) => state.data.incre);
    let allprice = useSelector((state) => state.data.allprice);
    let totalprice = useSelector((state) => state.data.totalprice);
    let netprice = useSelector((state) => state.data.netprice);
    let nettotal = useSelector((state) => state.data.nettotal);

    const increm = (ind, price, disc) => {
        dispatch(increment({ ind: ind, price: price, disc: disc }))
    }
    const decrem = (ind, price, disc) => {
        dispatch(decrement({ ind: ind, price: price, disc: disc }))
    }
    const removedata = (i, price, ind) => {
        console.log(i);
        dispatch(removecart({ ind: ind, id: i, price: price }))
    }

    return (
        <div>
            <Header></Header>
            {/* <div className='fixed top-24 bg-white md:hidden  h-[500px] border-2 border-gray-300 me-5 p-4 w-[350px]'>
                    <h6>TOTAL = $ {totalprice.toFixed(2)} </h6>
                    <h6>NET TOTAL = $ {nettotal.toFixed(2)}  </h6>
                </div> */}
            {
                cartdata.length === 0 ? <h2 className="text-2xl font-bold">cart is empty</h2> :

                    <div className='container md:flex'>
                        <div className='md:w-8/12'>
                            {
                                cartdata.map((ele, ind) => {
                                    return (
                                        <div className='border-2 border-gray-300 md:me-5 py-4 ps-4 mb-4 md:mb-0'>
                                            <div className='md:flex'>
                                                <div className=' basis-4/12 pe-4 '>
                                                    <Link to={`${ele.id}`}>
                                                        <img src={ele.thumbnail} className='w-full '></img>
                                                    </Link>
                                                </div>
                                                <div className='8/12 text-sm md:text-base'>
                                                    <h6>{ele.title}</h6>
                                                    <h6 className='mt-2'>Brand :  {ele.brand}</h6>
                                                    <h6 className='mt-2'>Price : $ {ele.price}   || Des : {ele.discountPercentage} %</h6>
                                                    <h6 className='mt-2'>Total = $ {allprice[ind]}   || Net = $ {netprice[ind].toFixed(2)}  </h6>


                                                    <div className='px-auto'>
                                                        <button onClick={() => removedata(ele, ele.price, ind)} className='bg-orange-500 text-sm text-white p-1 mt-3 '>REMOVE FROM CART</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ms-1 ">
                                                <button onClick={() => increm(ind, ele.price, ele.discountPercentage)} className='border border-gray-400 px-3 me-3'>+</button>
                                                <input type="text" value={incre[ind]} className='border border-gray-400 mt-3 w-20 text-center'></input>
                                                <button onClick={() => decrem(ind, ele.price, ele.discountPercentage)} className='border border-gray-400 px-3 ms-3'>-</button>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                        <div className='sticky  top-0 h-[200px] md:h-[500px] border-2 border-gray-300 me-5 p-4 md:w-[350px]'>
                            <h6>TOTAL = $ {totalprice.toFixed(2)} </h6>
                            <h6>NET TOTAL = $ {nettotal.toFixed(2)}  </h6>
                        </div>
                    </div>
            }
        </div>
    )
}
export default CartData
