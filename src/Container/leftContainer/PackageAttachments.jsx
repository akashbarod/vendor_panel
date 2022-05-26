import React from "react";

const PackageAttachments = () => {
  return (
    <>
      <p className="pkg-desc-two">Package Attachments</p>
      <div className="primary-div">
        <div className="secondary-div">
          <div className="button-div bd">
            <p>Package Builder</p>
            <div className="expand-div">
              <p className="exp-col">Expand all | Collapse all</p> &nbsp; &nbsp;
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
          <div className="button-div bd">
            <p>Stacks</p>
            <div className="button-div">
              <p>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </p>
              &nbsp;
              <p>
                <i class="fa fa-trash-o" aria-hidden="true"></i>
              </p>
              &nbsp;
              <p>
                {" "}
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
              </p>
            </div>
          </div>

          <div className="bd bd-one">
            <button className="new-content-btn">
              <span>
                <i class="fa fa-plus-square-o" aria-hidden="true"></i>
              </span>{" "}
              Add New Content
            </button>
          </div>

          <div className="cont-div">
            <p>Add Content</p>
            <div className="row">
              <div className="col-6">
                <p>Content Name</p>
              </div>

              <div className="col-6">
                <input type="text" className="inpp"/>
                <p className="checked-condition">Topic titles are displayed</p>
              </div>

              <div className="col-6">
                <p>Content Summary</p>
              </div>

              <div className="col-6">
                <input type="text" className="inpp"/>
                <p className="checked-condition">The idea of the summary is short</p>
                <button className="update-lesson">Add Topic</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default PackageAttachments;
