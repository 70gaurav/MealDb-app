import React, { useState } from 'react'
import axios from "axios"

function App() {
  const [data , setData] = useState([])
  axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then((result) => console.log(result) )
  return (
    <div>App</div>
  )
}

export default App
