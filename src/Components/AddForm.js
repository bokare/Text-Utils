import React, { useState } from "react";

const AddForm = ({ mode, showAlert }) => {
  const [text, setText] = useState("");
  const toUpper = () => {
    console.log("clicked button", text);
    let newTexts = text.toUpperCase();
    setText(newTexts);
    showAlert("sucess :", "Text Changed to UpeerCase");
  };
  const toLower = () => {
    console.log("clicked button", text);
    let newTexts = text.toLowerCase();
    setText(newTexts);
    showAlert("sucess :", "Text Changed to LowerCase");
  };
  const handleChange = (event) => {
    console.log("input changed");
    setText(event.target.value);
  };
  const copy = () => {
    console.log("input copyid");
    navigator.clipboard.writeText(text);
    showAlert("sucess :", "Text is Copied");
  };
  const paste = () => {
    // let newTexts = text.toLowerCase();
    console.log("read");
    navigator.clipboard.readText().then(
      (cliptext) => setText(cliptext),
      (err) => console.log(err)
    );
  };
  const clearText = () => {
    console.log("input clear");
    setText("");
    showAlert("sucess :", "Text has been Cleared");
  };

  return (
    <>
      <div className={`mb-3 text-${mode === "light" ? "dark" : "light"}`}>
        <h1>Add Text</h1>
        <textarea
          className={`form-control bg-${
            mode === "dark" ? "primary-subtle" : "white"
          }`}
          id="floatingTextarea"
          rows="8"
          value={text}
          placeholder="Enter the text here to change to Uppercase "
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="btn btn-primary mx-2 my-3"
          onClick={toUpper}
          disabled={text.length === 0}
        >
          Change To UpperCase
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-2 my-3"
          onClick={toLower}
          disabled={text.length === 0}
        >
          Change To LowerCase
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-2 my-3"
          onClick={copy}
          disabled={text.length === 0}
        >
          Copy
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-2 my-3"
          onClick={clearText}
          disabled={text.length === 0}
        >
          Clear
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-2 my-3"
          onClick={paste}
        >
          Paste
        </button>

        <h2>Text Summaary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          - words And {text.length} of Character
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "No Text For Preview Please Add Text!"}</p>
      </div>
    </>
  );
};

export default AddForm;
