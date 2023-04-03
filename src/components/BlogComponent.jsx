import React from "react";
import { BsSearch } from "react-icons/bs";
import Blogs from "./Blogs";

const BlogComponent = () => {
  return (
    <div className="blog-component">
      <div className="blog-header">
        <div className="header-left">
          <div className="header-pink">Blog Posts</div>
          <div className="header-dark">I think so, this is it.</div>
          <div className="header-description">
            Design begins after I begin to think about how to present an
            experience most successfully, whether a button I put in can solve a
            problem. The only point in design is not ui design, if the user does
            not have a good experience at the end of the product, the design
            will be considered unsuccessful in my opinion.
          </div>
          <div className="header-search">
            <BsSearch />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header-right">
          <div className="image-background"></div>
          <div className="header-image"></div>
        </div>
      </div>
      <div className="add-button">Add Blog</div>
      <div className="blogs">
        <Blogs />
      </div>
    </div>
  );
};

export default BlogComponent;
