import "./AdminPortal.css";
import React from "react";
import Separator from "./Separator";

function AdminPortal() {
  return (
    <div className="adminPortal">
      <div className="adContainer">
        <h3 className="adminPortal__title">The Administrative Portal</h3>
        <p className="adminPortal__description">
          BarBets also provides an easy to use website for business owners and
          managers. After setting up an account for your establishment in the
          Administrative Portal, login and click &quot;Create Promotion&quot; to
          get started!
        </p>
        <div className="adminPortal__grid">
          <div className="adminPortal__pic">
            <img
              src="./assets/adminportal/website1.JPG"
              alt="BarBets Admin Portal view 1"
            />
          </div>
          <div className="adminPortal__pic">
            <img
              src="./assets/adminportal/website2.JPG"
              alt="BarBets Admin Portal view 2"
            />
          </div>
        </div>
        <Separator />
      </div>
    </div>
  );
}

export default AdminPortal;
