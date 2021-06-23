import React, { useState } from "react";

function Accordion({ abc: items }) {
  const [activeIndex, setActiveIndex] = useState("");

  const onTitleClick = (index) => {
    if (!activeIndex) {
      setActiveIndex(index);
    } else {
      setActiveIndex("");
    }
  };

  let renderedList = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div
          className={"title " + { active }}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content + ${active}`}>
          <p> {item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedList}</div>;
}

export default Accordion;
