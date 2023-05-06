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
import Createdonations from "./components/Donor/Profile/Createdonations";
import DonationItem from "./components/Donor/Profile/DonationItem";
import DonorProfileSideBar from "./components/Donor/Profile/DonorProfileSideBar";
import DonorProfileEditForm from "./components/Donor/Profile/DonorProfileEditForm";

import DonorProfile from "./components/Donor/Profile/DonorProfile";
import DonorEditProfile from "./components/Donor/Profile/DonorEditProfile";
import DonorAddDonations from "./components/Donor/Profile/DonorAddDonations";
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
        </Route>

      </Route>
      <Route path="/admin" element={<AdminDashboard />}>
        <Route index />
        <Route path="/admin/recipe" element={<AllRecipe />} />
        <Route path="/admin/add-recipe" element={<AddRecipe />} />

        <Route path="/admin/alldonors" element={<Alldonors />} />
      </Route>

      <Route path="/signup-donor" element={<Donorsignup />} />
      <Route path="/Login" element={<Login />} />

      {/* <Route path="/donor/add/donations" element={<DonorAddDonations />} /> */}
    </Routes>
  );
}

export default App;

// Miulesi

// routes
// import Donorsignup from "./Auth/Donorsignup";
// import Login from "./Auth/Login";
// import Alldonors from "./admin/Alldonors";
// import Createdonations from "./Profile/Createdonations";
// import DonationItem from "./Profile/DonationItem";
// import DonorProfileTopBar from "./Profile/DonorProfileTopBar";
// import DonorProfileSideBar from "./Profile/DonorProfileSideBar";
// import DonorProfileEditForm from "./Profile/DonorProfileEditForm";

// import DonorProfile from "./Profile/DonorProfile";
// import DonorEditProfile from "./Profile/DonorEditProfile";
// import DonorAddDonations from "./Profile/DonorAddDonations"

// <Routes>
//   <Route path="/donor/signup" element={<Donorsignup />} />
//   <Route path="/Login" element={<Login />} />
//   <Route path="/admin/alldonors" element={<Alldonors />} />
//   <Route path="/donor/create/donations" element={<Createdonations />} />
//   <Route path="/donor/donation/item" element={<DonationItem />} />
//   <Route path="/donor/donorprofiletopbar" element={<DonorProfileTopBar />} />
//   <Route path="/donor/donorprofilesidebar" element={<DonorProfileSideBar />} />
//   <Route path="/donor/edit/form" element={<DonorProfileEditForm />} />

//   <Route path="/donor/myprofile" element={<DonorProfile />} />
//   <Route path="/donor/edit/myprofile" element={<DonorEditProfile />} />
//   <Route path="/donor/add/donations" element={<DonorAddDonations />} />
// </Routes>
