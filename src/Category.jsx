import React from 'react'

function Category() {
  const [data , setData] = useState([])
  axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then((result) => console.log(result) )
  return (
    <div>Category</div>
  )
}

export default Category