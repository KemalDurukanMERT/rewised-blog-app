import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Blogsx = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.markdownrdc);
  return (
    <div>
      <div className="h1">Blogs</div>
      <div className="blog-area d-flex flex-wrap justify-content-center gap-3 mt-5">
        {blogs.map((blog, index) => {
          return (
            <div key={index} className="outer">
              <div className="cover"></div>
              <div
                className="blog shadow p-3 d-flex h-100 flex-column justify-content-between align-items-start"
                id="cardx"
              >
                <div className="blog-title h4">{blog.title}</div>
                <div className="blog-image align-self-center">
                  <img
                    src={
                      blog.image
                        ? blog.image
                        : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
                    }
                    alt=""
                    width={"200px"}
                  />
                </div>
                <div className="blog-author">
                  <i>{blog.author}</i>
                </div>
                <Link
                  to={`${blog.id}`}
                  className="btn-right btn btn-read mt-3 align-self-end"
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogsx;
