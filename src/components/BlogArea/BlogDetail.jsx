import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Editor from "../../editor/Editor";
import { renewBlogs } from "../../redux/actions/markdownAction";

const BlogDetail = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleDelete = () => {
    let renew = blogs.filter(
      (blog) => blog.id !== Number(window.location.pathname.slice(7))
    );
    dispatch(renewBlogs(renew));
  };
  const { blogs } = useSelector((state) => state.markdownrdc);
  let blog = blogs.filter(
    (blog) => blog.id === Number(window.location.pathname.slice(7))
  )[0];
  const [document, setDocument] = useState(blog.text);

  const handleEdit = () => {
    const index = blogs.indexOf(blog)
    blogs[index] = {...blog, text: document}
    navigate("/blogs")
  }
  return (
    <div className="blog-detail-container d-flex flex-column justify-content-center align-items-center p-3">
      <h1 className="blog-detail-title text-center p-2 rounded">
        {blog.title}
      </h1>
      <div className="blog-detail-text w-75 mt-3">
        <Editor document={document} onChange={setDocument} />
      </div>
      <div className="blog-detail-author mt-5">
        Author: <i>{blog.author}</i>
      </div>
      <div className="align-self-end mt-3 d-flex gap-3">
        <Link
          to="/blogs"
          className="btn btn-danger"
          onClick={() => handleDelete()}
        >
          Delete
        </Link>
        <button disabled={document === blog.text} className="btn btn-primary"  onClick={()=>handleEdit()}>Save Editted Text</button>
      </div>
    </div>
  );
};

export default BlogDetail;
