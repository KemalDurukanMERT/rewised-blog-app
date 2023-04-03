import React, { useState } from "react";
import data from "../Data";

const Blogs = () => {
  const [category, setCategory] = useState("All");
  const categories = [
    "All",
    "UI Design",
    "UX Design",
    "Product Design",
    "Articles",
    "Tutorials",
    "News",
  ];
  return (
    <div className="blogs-main">
      <div className="category-nav">
        {categories.map((ctg) => {
          return (
            <div className={ctg === category ? "ctg ctg-selected" : "ctg"} onClick={(e)=> setCategory(`${ctg}`)}>
              {`${ctg}`}
            </div>
          );
        })}
      </div>
      <div className="blogs-area">
        {category === "All"
          ? data.map((blog) => {
              return (
                <div className="blog-card">
                  <div
                    className="blog-card-image"
                    style={{ background: `url(${blog.image})` }}
                  ></div>
                  <div className="blog-card-date">{blog.date}</div>
                  <div className="blog-card-title">{blog.title}</div>
                  <div className="blog-card-description">
                    {blog.description}
                  </div>
                  <div className="blog-card-button">READ MORE</div>
                </div>
              );
            })
          : data
              .filter((blog) => blog.category === category)
              .map((blog) => {
                return (
                  <div className="blog-card">
                    <div
                      className="blog-card-image"
                      style={{ background: `url(${blog.image})` }}
                    ></div>
                    <div className="blog-card-date">{blog.date}</div>
                    <div className="blog-card-title">{blog.title}</div>
                    <div className="blog-card-description">
                      {blog.description}
                    </div>
                    <div className="blog-card-button">READ MORE</div>
                  </div>
                );
              })}
      </div>
    </div>
  );
};

export default Blogs;
