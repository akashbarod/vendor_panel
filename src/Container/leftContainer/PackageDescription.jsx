import React from "react";
import "../../Style/description.css";

const PackageDescription = () => {
  return (
    <>
      <div>
        <p className="pkg-desc">Package Description:</p>
        <div className="common-package-desc-div">
          <div className="button-div">
            <div className="button-one">
              <button className="media-btn">
                <span>
                  <i class="fa fa-music" aria-hidden="true"></i>
                </span>{" "}
                &nbsp; Add Media
              </button>
            </div>
            <div className="button-two">
              <button className="visual-text-btn">Visual</button> &nbsp;
              <button className="visual-text-btn">Text</button>
            </div>
          </div>
          <div className="drop-row-common">
            <div className="drop-row">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle para-btn"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Paragraph
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
              &nbsp;
              <button className="common-btn-all">B</button>&nbsp;
              <button className="common-btn-all">I</button>&nbsp;
              <button className="common-btn-all">
                <span>
                  <i class="fa fa-align-left" aria-hidden="true"></i>
                </span>
              </button>
              &nbsp;
              <button className="common-btn-all">
                <span>
                  <i class="fa fa-align-left" aria-hidden="true"></i>
                </span>
              </button>
              &nbsp;
              <button className="common-btn-all">""</button>
            </div>
            <div>
              <i class="fa fa-arrows-alt" aria-hidden="true"></i>
            </div>
          </div>
          <div>
            <textarea name="" id="" cols="30" rows="10" className="text-area"></textarea>
          </div>

          <div className="para-footer-div">
            <p className="para-p">Word Count: 145</p>
            <p className="para-p">Last edited by admin on January 20, 2021 at 10:20am</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageDescription;
