import React from "react";
import { Link } from "react-router-dom";

const HeaderMain = () => {
  return (
    <main style={{ height: "500px" }} className="row d-flex align-items-center">
      <div className="col-md-4 col-sm-6 col-12 offset-md-1">
        <h3 className="text-warning">WE CARE ABOUT YOUR CAR</h3>
        <h1 className="text-light">It's time to come to repair your car.</h1>
        <Link to="/appointment" className="btn btn-brand">
          BOOK AN APPOINTMENT
        </Link>
      </div>
    </main>
  );
};

export default HeaderMain;
