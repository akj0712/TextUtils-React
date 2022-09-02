import React, { useState } from "react";

export default function Textform(props) {
  const handleUpperClick = () => {
    // console.log("UpperClick " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE", "success")
  };

  const handleLowerClick = () => {
    // console.log("lowerclick " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success")

  };

  const handleCamleCaseClick = () => {
    // console.log("lowerclick " + text);
    let newText = text
      .toLowerCase()
      .trim()
      .split(/[.\-_\s]/g)
      .reduce((string, word) => string + word[0].toUpperCase() + word.slice(1));
    setText(newText);
    props.showAlert("Converted to camleCase", "success")

  };

  const handlePascalCaseClick = () => {
    // console.log("lowerclick " + text);
    let newText = (" " + text)
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
        return chr.toUpperCase();
      });
    setText(newText);
    props.showAlert("Converted to PascalCase", "success")

  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "New Text";  // Wrong way to change the state
  // setText("New Text");  //Correct way to change the state

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="7"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowerClick}>
          Convert To lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCamleCaseClick}>
          Convert To camleCase
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={handlePascalCaseClick}
        >
          Convert To PascalCase
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} char
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
