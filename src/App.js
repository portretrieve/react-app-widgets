import React, { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React",
    content: "React is a Javascript Library"
  },
  {
    title: "Why use React?",
    content: "React is one of the favourites"
  },
  {
    title: "How to use React",
    content: "Use it by creating components"
  }
];

const options = [
  {
    label: "The Color Red",
    value: "red"
  },
  {
    label: "The Color Green",
    value: "green"
  },
  {
    label: "A shade of Blue",
    value: "blue"
  }
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  const showRoutes = () => {
    switch (window.location.pathname) {
      case "/":
        return <Accordion items={items} />;
        break;
      case "/search":
        return <Search />;
        break;
      case "/dropdown":
        return (
          <Dropdown
            options={options}
            setSelected={setSelected}
            selected={selected}
            label="Select A Color"
          />
        );
        break;
      case "/translate":
        return <Translate />;
        break;
      default:
        break;
    }
  };
  return (
    <div className="app">
      <div className="routes">
        <a href="/">Accordion</a>
        <a href="/search">Search</a>
        <a href="/dropdown">DropDown</a>
        <a href="/translate">Translate</a>
      </div>
      <hr />
      <div className="ui container">{showRoutes()}</div>
    </div>
  );
};

export default App;
