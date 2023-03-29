import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMarkdown,
  setmarkdownVisible,
} from "../redux/actions/markdownAction";
import "../components/BlogArea/Blogs.scss";
import Blogsx from "../components/BlogArea/Blogsx";
import Input from "../components/Blog/Input/Input";

let inputs = document.getElementsByTagName("input");

const Blogs = () => {
  const dispatch = useDispatch();
  const { markdownVisible, blogs } = useSelector((state) => state.markdownrdc);

  return (
    <div className="blogs">
      {console.log(blogs)}
      <div className="main-container p-3 d-flex flex-column justify-content-center align-items-center">
        <div className="typewriter mt-3">
          <div className="slide">
            <i />
          </div>
          <div className="paper" />
          <div className="keyboard" />
        </div>
        <div
          className="btn btn-add w-25 align-self-end mt-5"
          onClick={() => {
            dispatch(setmarkdownVisible());
            dispatch(setMarkdown(""));
            for (let i = 0; i < inputs.length; ++i) {
              inputs[i].value = "";
            }
          }}
        >
          {markdownVisible ? (
            "Close"
          ) : (
            <div>
              <i
                className="fa fa-pencil mx-3"
                style={{ fontSize: "24px", color: "white" }}
              ></i>
              Add Blog
            </div>
          )}
        </div>

        <div
          className={
            markdownVisible ? "d-flex flex-column align-items-center mt-3" : "d-none"
          }
        >
          <Input />
        </div>
        <div className={!markdownVisible ? "w-100 mt-3" : "d-none"}>
          <Blogsx />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
