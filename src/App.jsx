import React from 'react'
import Store from './App/Store'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './Header'
import Category from './Category'
import Singlecategory from './Singlecategory'

function App() {
  return (
    <Provider store={Store}>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Category />}></Route>
            <Route path='/category' element={<Singlecategory />}></Route>
        </Routes>
        </BrowserRouter>

    </Provider>
  )
}

export default App
