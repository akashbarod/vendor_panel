import React from "react";
import "../../Style/description.css";

const Video = () => {
  return (
    <>
      <div className="main-add-data-div madd">
        <div className="add-data-div">
          <p className="common-p">Video</p>
          <div className="expand-div">
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

        <div className="row">
          <div className="col-4">
            <p className="common-p">Course intro video</p>
          </div>

          <div className="col-8">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle category-drop"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                You Tube
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="checked-condition">
                Select your preferred video type.
              </p>
            </div>
          <div>
            <input type="text" />
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
