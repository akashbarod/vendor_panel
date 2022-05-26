import React from "react";
import "../../Style/rightdesc.css";

const Publish = () => {
  return (
    <>
      <div className="publish-div">
        <div className="arrow-main-div">
          <p>Publish</p>
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
        <div className="arrow-main-div">
          <button className="same-btn">Save Draft</button>
          <button className="same-btn">Preview</button>
        </div>
        <div className="icon-div">
          <p>
            <span>
              <i class="fa fa-map-pin" aria-hidden="true"></i>
            </span>{" "}
            &nbsp; Status:{" "}
            <span className="bold-text">
              Draft <span className="edit">Edit</span>
            </span>
          </p>
          <p>
            <span>
              <i class="fa fa-eye" aria-hidden="true"></i>
            </span>{" "}
            &nbsp; Visibility:{" "}
            <span className="bold-text">
              Public <span className="edit">Edit</span>
            </span>
          </p>
          <p>
            <span>
              <i class="fa fa-calendar" aria-hidden="true"></i>
            </span>{" "}
            &nbsp; Publish:{" "}
            <span className="bold-text">
              Immediately <span className="edit">Edit</span>
            </span>
          </p>
        </div>

        <div className="arrow-main-div">
          <p className="edit">Move to trash</p>
          <button className="publish-btn">Publish</button>
        </div>
      </div>
    </>
  );
};

export default Publish;
