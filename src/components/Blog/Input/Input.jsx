import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Editor from "../../../editor/Editor";
import {
  setBlog,
  setmarkdownVisible,
} from "../../../redux/actions/markdownAction";
import ExampleDocument from "../../../utils/ExampleDocument";

let inputs = document.getElementsByTagName("input");

const Input = () => {
  const [document, updateDocument] = useState(ExampleDocument);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const saveBlog = () => {
    if (title && author && document) {
      const newBlog = {
        title: title,
        author: author,
        image: image,
        text: document,
        id: new Date().valueOf(),
      };
      dispatch(setBlog(newBlog));
      console.log(newBlog);
      setTitle("");
      setAuthor("");
      setImage("");
      for (let i = 0; i < inputs.length; ++i) {
        inputs[i].value = "";
      }
      dispatch(setmarkdownVisible());
    }
  };
  return (
    <>
      <form className="former d-flex flex-column gap-3 justify-content-center align-items-start">
        <div className="former-inner">
          <div className="input-group">
            <input
              required
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              className="inputx rounded-pill"
            />
            <label className="user-label">Title</label>
          </div>
          <br />
          <div className="input-group">
            <input
              required
              type="text"
              id="author"
              onChange={(e) => setAuthor(e.target.value)}
              className="inputx rounded-pill"
            />
            <label className="user-label">Author</label>
          </div>
          <br />
          <div className="input-group">
            <input
              type="text"
              id="image"
              onChange={(e) => setImage(e.target.value)}
              className="inputx rounded-pill"
            />
            <label className="user-label">Image URL</label>
          </div>
          <br />
        </div>
        <Editor document={document} onChange={updateDocument} />
        <div className="button-save align-self-end d-flex column-gap-3 ">
          <div
            className="btn btn-secondary"
            onClick={() => {
              updateDocument(ExampleDocument);
              dispatch(setmarkdownVisible());
            }}
          >
            Discard
          </div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={() => saveBlog()}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default Input;
