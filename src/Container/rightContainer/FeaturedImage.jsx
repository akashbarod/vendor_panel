import React from "react";

const FeaturedImage = () => {
  return (
    <>
      <div className="publish-div">
        <div className="arrow-main-div">
          <p>Featured Image</p>
          <div className="publish-arrow">
            <p>
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </p>
            &nbsp;
            <p>
              <i class="fa fa-chevron-up" aria-hidden="true"></i>
            </p>
            &nbsp;
            <p>
              <i class="fa fa-caret-up" aria-hidden="true"></i>
            </p>
          </div>
        </div>
        <hr />
        <div>
          <img src="/data.jpg" alt="" srcset="" className="data-image" />
        </div>

        <div>
          <p className="click">Click the image or edit </p>
        </div>

        <div>
          <p className="remove">Remove featured image</p>
        </div>
      </div>
    </>
  );
};

export default FeaturedImage;
