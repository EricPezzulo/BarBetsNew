import "./App.css";
import React from "react";
import Header from "./Header";
import UserExperience from "./UserExperience";
import AdminPortal from "./AdminPortal";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import ContactUs from "./ContactUs";

function App() {
  return (
    <div className="app">
      <Banner />
      <Header />
      <UserExperience />
      <AdminPortal />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}
export default App;
