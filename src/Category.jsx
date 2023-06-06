import React, { useEffect } from 'react';
import { categoryData } from './Slice/Mealslice';
import { useDispatch, useSelector } from 'react-redux';

function Category() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.meal);

  useEffect(() => {
    dispatch(categoryData());
  }, [dispatch]);

  return (
    <div className='category'>
      <h1>Category</h1>
      {data.isLoading ? <div className="loader"></div> : ''}
      <div className="category-container">
        {data.category.map((item, index) => (
          <div className="item" key={index}>
            <h1>{item.strCategory}</h1>
            <img src={item.strCategoryThumb} alt={item.strCategory} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
