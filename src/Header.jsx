import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { searchData, inputHandler, submitHandler, randomData } from './Slice/Mealslice'


function Header() {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.meal
  })
  console.log(data.searchedData)
  console.log(data.input)

  useEffect(() => {
    if (data.searchInput !== "") {
      dispatch(searchData(data.searchInput));
    }
  }, [data.searchInput, dispatch]);

  console.log(data.searchInput)
  console.log(data.randomMeal)
  return (
    <>
      <header>
        <h1>Khana khajana</h1>
        <form onSubmit={(e) => { e.preventDefault(); dispatch(submitHandler()) }}>
          <input placeholder='Search your favourite food' value={data.input} onChange={(e) => dispatch(inputHandler(e.target.value))}></input>
          <button type='submit'>🔍</button>
        </form>
      </header>
      {
        data.searchedData ? (<div className='searchedMeal'>
          <img src={data.searchedData[0].strMealThumb}></img>
        </div>) : ("")
      }
      {
        data.randomMeal ? (<div className='searchedMeal'>
          <h3>{data.randomMeal.strMeal
          }</h3>
          <img src={data.randomMeal.strMealThumb}></img>
        </div>) : ("")
      }
      <div className='pop' >
        <p>Random meal</p>
        <a href=""><img src="image.png"onClick={(e) => {e.preventDefault();dispatch(randomData())}}></img></a>
      </div>
    </>
  )
}

export default Header