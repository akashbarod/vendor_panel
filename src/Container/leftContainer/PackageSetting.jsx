import React from "react";

const PackageSetting = () => {
  return (
    <>
      <p className="pkg-desc-two">Package Settings</p>
      <div className="grade-div">
        <p className="pkg-desc-two">Grade: </p>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            1
          </label>
        </div>
        <div>
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            2
          </label>
        </div>
        <div>
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            3
          </label>
        </div>
        <div>
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            4
          </label>
        </div>
        <div>
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            5
          </label>
        </div>
      </div>

      <div>
        <p className="pkg-desc-two">Category</p>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle category-drop"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            
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
      </div>

      <div>
        <p className="pkg-desc-two">Thumbnail</p>
        <input type="file" id="myfile" name="myfile" />
      </div>
    </>
  );
};

export default PackageSetting;
