import React from 'react'
import {Routes, Route} from "react-router-dom"
import Layout from './components/Layout'
import Service from './components/Main/Service'
import AllRecipes from './components/Recipe/AllRecipes'
import AdminDashboard from './components/Admin/AdminDashboard'
import AllRecipe from './components/Admin/Recipe/AllRecipe'
import AddRecipe from './components/Admin/Recipe/AddRecipe'
import "./App.css"

function App() {
  return (
     <Routes>
        <Route path='/' element={<Layout />}>
          <Route index />
          <Route path='/services' element={<Service />} />
          <Route path='/recipe' element={<AllRecipes />} />
        </Route>
        <Route path='/admin' element={<AdminDashboard />}>
          <Route index />
          <Route path='/admin/recipe' element={<AllRecipe />} />
          <Route path='/admin/add-recipe' element={<AddRecipe />} />
        </Route>
     </Routes>
  )
}

export default App
