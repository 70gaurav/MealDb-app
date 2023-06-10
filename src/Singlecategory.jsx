
import React from 'react';
import { singleCategoryData } from './Slice/Mealslice';
import { useDispatch, useSelector } from 'react-redux';

function Singlecategory() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.meal);


  return (
    <div>
       <div className='category' >
      {data.isLoading ? <div className="loader"></div> : ''}
      <div className="category-container">
      {
        Singlecategory ? (
          <div className="category-container">
            <h1>{strMeal}</h1>
            <img src={strMealThumb} alt="" />
          </div>
        ) : ("")
      }
      </div>
    </div>
    </div>
  );
}

export default Singlecategory