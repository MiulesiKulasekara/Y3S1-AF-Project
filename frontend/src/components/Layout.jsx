import {Outlet} from "react-router-dom"
import React from 'react'
import Navbar from "./Navbar"

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
