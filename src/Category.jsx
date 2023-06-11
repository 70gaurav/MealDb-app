import React, { useEffect } from 'react';
import { categoryData,singleCategoryData } from './Slice/Mealslice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Category() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.meal);
  console.log( data.singleCategory)

  useEffect(() => {
    dispatch(categoryData());
  }, [dispatch]);

  return (
    <div className='category' >
      <h1>Categories</h1>
      {data.isLoading ? <div className="loader"></div> : ''}
      <div className="category-container">
        {data.category.map((item, index) => (
       
            <div className="item" key={index} >
            <Link to="/category" onClick={() => dispatch(singleCategoryData(item.strCategory))}>{item.strCategory}</Link>
            <img src={item.strCategoryThumb} alt={item.strCategory} />
          </div>
        
        ))}
      </div>
    </div>
  );
}

export default Category;
