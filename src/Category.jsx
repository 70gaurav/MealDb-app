import React, { useEffect } from 'react'
import { categories } from './Slice/categorySlice'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './App/Loader'

function Category() {
    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return state.meal
    })

    useEffect(() => {
        dispatch(categories())
    }, [dispatch])


    console.log(data.categories)
    return (
        <>
        <div>
            {
                data.isLoading ? (
               <Loader />
                ) : ("")
            }
            

        </div>
        <div className='categories'>
        {
                data.categories.map((item , index) => {
                        return (
                            <div className='box'>
                                <h1>{item.strCategory}</h1>
                                <img src={item.strCategoryThumb} alt="" />
                            </div>
                        )
                })
            }
        </div>
        </>
    )
}

export default Category