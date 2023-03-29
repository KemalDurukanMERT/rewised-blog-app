import "./App.css";
import Editor from "./editor/Editor";
import ExampleDocument from "./utils/ExampleDocument";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { useState } from "react";
import AppRouter from "./router/AppRouter";

function App() {
  // const [document, updateDocument] = useState(ExampleDocument);

  return (
    <div>
      <AppRouter/>
    </div>
    // <>
    //   <Navbar bg="dark" variant="dark">
    //     <Navbar.Brand href="#">
    //       Text Editor
    //     </Navbar.Brand>
    //   </Navbar>
    //   <div className="App">
    //     <Editor document={document} onChange={updateDocument} />
    //   </div>
    // </>
  );
}

export default App;
