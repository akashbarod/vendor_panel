import React from "react";

const Tag = () => {
  return (
    <>
      <div className="publish-div">
        <div className="arrow-main-div">
          <p>Tags</p>
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

        <div className="">
          <input type="text"  className="search-text"/>
          <button className="add-btn">Add</button>
        </div>

        <div>
          <p>Separate Tags with commas</p>
        </div>

        <div className="all-icon-text">
          <p>
            <span>
              <i class="fa fa-times-circle-o" aria-hidden="true"></i>
            </span>{" "}
            Adobe Photoshop
          </p>
          <p>
            <span>
              <i class="fa fa-times-circle-o" aria-hidden="true"></i>
            </span>{" "}
            App Development
          </p>
          <p>
            <span>
              <i class="fa fa-times-circle-o" aria-hidden="true"></i>
            </span>{" "}
            Health & Fitness
          </p>
        </div>

        <div>
          <p className="add-new"> Choose from the most used tags</p>
        </div>
      </div>
    </>
  );
};

export default Tag;
