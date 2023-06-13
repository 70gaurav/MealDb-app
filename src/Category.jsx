import React, { useEffect } from 'react'
import { categories } from './Slice/categorySlice'
import { useDispatch, useSelector } from 'react-redux'

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
                    <div className='loader'>
                        <h1>Cooking in progress</h1>
                        <div id="cooking">
                            <div className="bubble"></div>
                            <div className="bubble"></div>
                            <div className="bubble"></div>
                            <div className="bubble"></div>
                            <div className="bubble"></div>
                            <div id="area">
                                <div id="sides">
                                    <div id="pan"></div>
                                    <div id="handle"></div>
                                </div>
                                <div id="pancake">
                                    <div id="pastry"></div>
                                </div>
                            </div>
                        </div>

                    </div>
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