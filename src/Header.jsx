import React, { useEffect } from 'react'
import pan from "./images/pan.png"
import { searchedData, inputHandler, submitHandler } from "./Slice/searchSlice"
import { useDispatch, useSelector } from 'react-redux'
import Loader from './App/Loader'

function Header() {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.search
  })
  useEffect(() => {

    if (data.mealName.length > 0) {

      dispatch(searchedData(data.mealName))
    }

  }, [data.mealName])

  console.log(data.searchedMeal)

  console.log(data)
  return (
    <>
      <header>
        <div className='logo'>
          <img src={pan} alt="" />
        </div>
        <form onSubmit={(e) => { e.preventDefault(); dispatch(submitHandler()) }}>
          <input type="text" value={data.inputValue} onChange={(e) => dispatch(inputHandler(e.target.value))} />
          <button type='submit'>Search</button>
        </form>
      </header>
      <div>
        {
          data.searchedMeal && data.searchedMeal.length > 0 ? (<div>
            <div>
              {
                data.isLoading ? (
                  <Loader />
                ) : ("")
              }


            </div>


           <div className='searchmeals'>
           {
              data.searchedMeal.map((meal, index) => {
                return (
                  <div key={index} className='meal'>
                    <h1>{meal.strMeal}</h1>
                    <img src={meal.strMealThumb} alt="" />
                  </div>
                )
              })
            }
           </div>
          </div>) : ("")
        }
      </div>
    </>
  )
}

export default Header