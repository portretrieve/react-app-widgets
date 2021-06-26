import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          setSelected={setSelected}
          selected={selected}
          label="Select A Color"
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
