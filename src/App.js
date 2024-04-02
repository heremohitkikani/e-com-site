import './App.css';
import { Routes, Route } from "react-router-dom";

import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Home from './component/Home';

import { datahandler, datacategory } from './store/Slice';
import CategoryData from './component/CategoryData';
import SingleItem from './component/SingleItem';
import CartData from './component/CartData';
import Singlecart from './component/SingleCart';
import SearchData from './component/SearchData';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {

    axios.get('https://dummyjson.com/products?limit=100&skip=0')
      .then(function (response) {

        console.log(response.data.products);
        dispatch(datahandler(response.data.products))
      })
      .catch(function (error) {
        console.log(error);
      })
    axios.get('https://dummyjson.com/products/categories')
      .then(function (response) {
        dispatch(datacategory(response.data))
      })
      .catch(function (error) {
        console.log(error);
      })

  }, [])

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SearchData" element={<SearchData />} />
        <Route path="/category/:id" element={<CategoryData />} />
        <Route path="/SingleItem/:id" element={<SingleItem />} />

        <Route path="/Cartdata" element={<CartData />} />
        <Route path="/Cartdata/:id" element={<Singlecart />} />


      </Routes>
    </div>
  );
}

export default App;
