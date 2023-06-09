
import React, { useEffect } from 'react';
import { singleCategoryData } from './Slice/Mealslice';
import { useDispatch, useSelector } from 'react-redux';

function Singlecategory() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.meal);


  return (
    <div>
      
    </div>
  );
}

export default Singlecategory