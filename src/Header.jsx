import React from 'react'
import pan from "./images/pan.png"
import {searchedData} from "./Slice/searchSlice"
import { useDispatch, useSelector } from 'react-redux'

function Header() {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.search
  } )
  console.log(data)
  return (
    <header>
      <div className='logo'>
        <img src={pan} alt="" />
      </div>
      <form>
       <input type="text" />
       <button type='submit'>Search</button>
      </form>
    </header>
  )
}

export default Header