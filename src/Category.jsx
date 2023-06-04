import React, { useEffect } from 'react'
import {categoryData} from "./Slice/Mealslice"
import { useDispatch, useSelector } from 'react-redux'

function Category() {
  const dispatch = useDispatch()
  const data = useSelector((state) => {return state.meal})
  console.log(data.isLoading)


  useEffect(() => {
  
    dispatch(categoryData())
 
  } ,[dispatch])

  return (
    <div>
      {
        data.isLoading ? (<div className="loader"></div>) : ("")
      }
      {
        data.category.map((item , index) => {
          return(
            <div key={index}>
              <h1>{item.strCategory}</h1>
              <img src={item.strCategoryThumb}></img>
              <p>{item.strCategoryDescription}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Category