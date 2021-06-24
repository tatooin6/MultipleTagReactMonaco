import React, { useState } from "react";

import Editor from "@monaco-editor/react";
import files from "./files";

function App() {
  const [fileName, setFileName] = useState("controller.java");

  const file = files[fileName];

  return (
    <>
      <button
        disabled={fileName === "controller.java"}
        onClick={() => setFileName("controller.java")}
      >
        controller.java
      </button>
      <button
        disabled={fileName === "style.css"}
        onClick={() => setFileName("style.css")}
      >
        style.css
      </button>
      <button
        disabled={fileName === "index.html"}
        onClick={() => setFileName("index.html")}
      >
        index.html
      </button>
      <Editor
        height="80vh"
        theme="vs-dark"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
      />
    </>
  );
}

export default App;
