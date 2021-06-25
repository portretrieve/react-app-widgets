import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const Translate = () => {
  const options = [
    { label: "Afrikaans", value: "af" },
    { label: "Dutch", value: "nl" },
    { label: "Hindi", value: "hi" }
  ];

  const [language, setLanguage] = useState(options[2]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="textInput">Enter Text: </label>
          <input
            type="text"
            id="textInput"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </div>
      </div>
      <br />
      <Dropdown
        label="Select a Language"
        options={options}
        selected={language}
        setSelected={setLanguage}
      />
      <br />
      <h3 className="ui header">Output :</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
