import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";



function Category() {
  let category = useSelector((state) => state.data.category);
  console.log(category);

  return (
    <div>
      <h5 style={{ fontFamily: 'forte', padding: '5px 0', borderTop: '2px solid rgb(85, 84, 84)', borderBottom: '2px solid rgb(85, 84, 84)' }} className='text-center mb-4'>CATEGORIES</h5>
      {
        category.map((ele, ind) => {
          
          return (

            <ul className='category'>
              <Link to={`/category/${ele}`} ><li className='text-center py-1 hover:bg-orange-600 transition hover:text-white'>{ele}</li> </Link>
            </ul>
          )
        })
      }
    </div>
  )
}

export default Category
