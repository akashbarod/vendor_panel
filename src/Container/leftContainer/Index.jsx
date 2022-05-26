import React from "react";
import AdditionalData from "./AdditionalData";
import Lesson from "./Lesson";
import PackageAttachments from "./PackageAttachments";
import PackageDescription from "./PackageDescription";
import PackageSetting from "./PackageSetting";
import Video from "./Video";

const Index = () => {
  return (
    <>
      <div className="package-title-div">
        <p className="package-title">Package Title</p>
        <input type="text" className="pt-input"/>
      </div>

      <PackageDescription />

      <PackageSetting />

      <PackageAttachments />

      <Lesson />

      <AdditionalData />

      <Video/>
    </>
  );
};

export default Index;
