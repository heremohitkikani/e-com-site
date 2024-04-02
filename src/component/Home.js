import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header';
import Item from './Item';

function Home() {
    let alldata=useSelector((state)=>state.data.alldata)
    console.log(alldata);
  return (
    <>
    <Header></Header>
    <Item></Item>
    </>
  )
}

export default Home
