import React from "react";
import CourseCategories from "./CourseCategories";
import FeaturedImage from "./FeaturedImage";
import Publish from "./Publish";
import Tag from "./Tag";

const Index = () => {
  return (
    <>
      <Publish />

      <CourseCategories />

      <Tag />

      <FeaturedImage />
    </>
  );
};

export default Index;
