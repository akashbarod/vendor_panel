import React from "react";

const AdditionalData = () => {
  return (
    <>
      <div className="main-add-data-div">
        <div className="add-data-div">
          <p className="common-p">Additional Data</p>
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
            <p className="common-p">Total Course Duration</p>
          </div>
          <div className="col-8">
            <div className="all-month">
              <div>
                <input type="text" className="inp-text" />
                <p className="checked-condition">HH</p>
              </div>
              <div>
                <input type="text" className="inp-text" />
                <p className="checked-condition">MM</p>
              </div>
              <div>
                <input type="text" className="inp-text" />
                <p className="checked-condition"> SS</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <p className="common-p">Benefits of the course</p>
          </div>
          <div className="col-8">
            <textarea
              type="text"
              name=""
              className="text-area-data"
              id=""
              placeholder="Understand the fundamentals of healthy dieting . Create  a diet that is perfect for your needs and lifestyle."
            />
            <p className="checked-condition">
              List the knowledge and skills that students will learn after
              completing this course{" "}
            </p>
          </div>

          <div className="col-4">
            <p className="common-p">Requirements/Instructions</p>
          </div>
          <div className="col-8">
            <textarea
              type="text"
              name=""
              id=""
              className="text-area-data"
              placeholder="No prior health knowledge is required or assumed. A digital food scale will help but is not required."
            />
            <p className="checked-condition">
              Additional requirementsor special instructions for the students.
            </p>
          </div>

          <div className="col-4">
            <p className="common-p">Targeted Audience</p>
          </div>
          <div className="col-8">
            <textarea
              type="text"
              name=""
              className="text-area-data"
              id=""
              placeholder="Anyone wanting to learn the truth about dieting. Anyone with an open mind towards dieting. "
            />
            <p className="checked-condition">
              Specify the target audience that will benefit the most from the
              course.
            </p>
          </div>

          <div className="col-4">
            <p className="common-p">Materials Included</p>
          </div>
          <div className="col-8">
            <textarea
              type="text"
              name=""
              className="text-area-data"
              id=""
              placeholder="Anyone wanting to learn the truth about dieting. Anyone with an open mind towards dieting. "
            />
            <p className="checked-condition">
              4 Hours on demand video.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionalData;
