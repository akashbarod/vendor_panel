import React from "react";

const Lesson = () => {
  return (
    <>
      <div>
        <p className="pkg-desc">Lesson</p>
        <div className="common-package-desc-div">
          <div className="stack-div">
            <p>What are Stacks</p>
          </div>
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
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="text-area"
            ></textarea>
          </div>

          <div className="para-footer-div">
            <p className="para-p">P</p>
          </div>

          <div>
            <p>Feature Image</p>
            <button className="upload-btn">Upload Feature Image</button>
          </div>
          <div>
            <input type="text" name="" id="" className="enter-text" placeholder="Enter here.."/>
          </div>
          <div>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle select-sports"
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
                    Video
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Games
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    AR/VR
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="checked-condition">
              Select your preferred video type
            </p>
          </div>

          <div>
            <input type="text" />
          </div>

          <div>
            <p className="video-time">Video Playback Time</p>
            <div className="common-time-div">
              <div>
                <input type="text" className="all-inp" />
                <p className="checked-condition">HH</p>
              </div>
              <div>
                <input type="text" className="all-inp" />
                <p className="checked-condition">MM</p>
              </div>
              <div>
                <input type="text" className="all-inp" />
                <p className="checked-condition">SS</p>
              </div>
            </div>
          </div>

          <div>
            <button className="upload-btn">Upload Attachment</button>
          </div>

          <div class="form-check fc">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="form-check-label label-course"
              for="flexCheckDefault"
            >
              Enable Course Preview
            </label>
            <p className="checked-condition">
              If checked, any users/guest can view this lesson without enroll
              course
            </p>
          </div>
        </div>
      </div>

      <div>
        <button className="update-lesson">Update Lesson</button>
      </div>
    </>
  );
};

export default Lesson;
