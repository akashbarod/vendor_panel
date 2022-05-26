import React from "react";
import Index_Left from "../Container/leftContainer/Index";
import Index_Right from "../Container/rightContainer/Index";

const PackageHome = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <Index_Left />
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <Index_Right />
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageHome;
