import { cleanup } from "@testing-library/react";
import React, { useState, useEffect, useRef } from "react";

function Dropdown({ options, setSelected, selected, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const bodyClickHandler = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setIsOpen(false);
    };

    document.body.addEventListener("click", bodyClickHandler, {
      capture: true
    });

    return () => {
      document.body.removeEventListener("click", bodyClickHandler, {
        capture: true
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option !== selected) {
      return (
        <div
          key={option.value}
          className="item"
          onClick={() => {
            setSelected(option);
          }}
        >
          {option.label}
        </div>
      );
    }
    return null;
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label htmlFor="" className="label">
          {label}
        </label>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={`ui selection dropdown ${isOpen ? "visible active" : ""} `}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={"menu " + (isOpen ? `visible transition` : "")}>
            {renderedOptions}
          </div>
        </div>

        {label !== "Select a Language" ? (
          <div
            style={{
              marginTop: "50px",
              marginBottom: "25px",
              color: `${selected.value}`
            }}
          >
            <h1>This Text is : {selected.value}</h1>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default Dropdown;
