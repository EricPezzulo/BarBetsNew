import "./App.css";
import React from "react";
import Header from "./Header";
import UserExperience from "./UserExperience";
import AdminPortal from "./AdminPortal";
import Promotion from "./Promotion";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Banner from "./Banner";

function App() {
  return (
    <div className="container">
      <Banner />
      <Header />
      <UserExperience />
      <AdminPortal />
      <AboutUs />
      {/* <Promotion /> */}
      <Footer />
    </div>
  );
}
export default App;
