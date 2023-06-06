import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { searchData ,inputHandler , submitHandler } from './Slice/Mealslice'


function Header() {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.meal
  })
  console.log(data.searchedData )
  console.log(data.input )

  useEffect(() => {
    if (data.searchInput !== "") {
      dispatch(searchData(data.searchInput));
    }
  }, [data.searchInput, dispatch]);
  
  console.log(data.searchInput)
  return (
    <header>
      <h1>Khana khajana</h1>
      <form onSubmit={(e) => {e.preventDefault(); dispatch(submitHandler())}}>
        <input placeholder='Search your favourite food' value={data.input} onChange={(e) => dispatch(inputHandler(e.target.value))}></input>
        <button type='submit'>🔍</button>
      </form>
    </header>
  )
}

export default Header