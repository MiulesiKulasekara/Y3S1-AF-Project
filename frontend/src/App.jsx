import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Service from "./components/Main/Service";
import AllRecipes from "./components/Recipe/AllRecipes";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AllRecipe from "./components/Admin/Recipe/AllRecipe";
import AddRecipe from "./components/Admin/Recipe/AddRecipe";

import Donorsignup from "./components/Donor/Auth/Donorsignup";
import Login from "./components/Donor/Auth/Login";
import Alldonors from "./components/Admin/Donor/Alldonors";
import DonationItem from "./components/Donor/Profile/DonationItem";
// import DonorProfileSideBar from "./components/Donor/Profile/DonorProfileSideBar";
// import DonorProfileEditForm from "./components/Donor/Profile/DonorProfileEditForm";
// import DonorAddDonations from "./components/Donor/Profile/DonorAddDonations";
import AllDonations from "./components/Donor/Donations/AllDonations";
import Alldonations from "./components/Admin/Donor/Alldonations"

import DonorProfile from "./components/Donor/Profile/DonorProfile";
import DonorEditProfile from "./components/Donor/Profile/DonorEditProfile";
import Createdonations from "./components/Donor/Profile/Createdonations";
import DonationRequests from "./components/Donor/Profile/DonationRequests" 

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index />
        <Route path="/services" element={<Service />} />
        <Route path="/recipe" element={<AllRecipes />} />
        <Route path="/create-donations" element={<Createdonations />} />

        <Route path="/donor/profile" element={<DonorProfile />}>
          <Route path="/donor/profile/edit" element={<DonorEditProfile />} />
          <Route index element={<DonationItem />} />
          <Route path="/donor/profile/request" element={<DonationRequests />} />
        </Route>

      </Route>
      <Route path="/admin" element={<AdminDashboard />}>
        <Route index />
        <Route path="/admin/recipe" element={<AllRecipe />} />
        <Route path="/admin/add-recipe" element={<AddRecipe />} />

        <Route path="/admin/alldonors" element={<Alldonors />} />
        <Route path="/admin/alldonations" element={<Alldonations />} />
      </Route>

      <Route path="/signup-donor" element={<Donorsignup />} />
      <Route path="/Login" element={<Login />} />

      <Route path="/donationList" element={<AllDonations />} />
    </Routes>
  );
}

export default App;

