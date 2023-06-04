import React, { useState } from 'react'
import {Store} from './App/Store'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Category from './Category'
import { Provider } from 'react-redux'
import "./App.css"

function App() {
 
  return (
    <div>
      <Provider store={Store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Category/>}></Route>
      </Routes>
      </BrowserRouter>
      </Provider>

    </div>
  )
}

export default App
