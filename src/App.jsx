import React, { useState } from 'react'
import {Store} from './App/Store'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Category from './Category'
import { Provider } from 'react-redux'
import Header from './Header'
import "./App.css"
import Singlecategory from './Singlecategory'

function App() {
 
  return (
    <div>
      <Provider store={Store}>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Category/>}></Route>
        <Route path='/category' element={<Singlecategory/>}></Route>
      </Routes>
      </BrowserRouter>
      </Provider>

    </div>
  )
}

export default App
