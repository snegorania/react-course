import React, { useState } from "react";
import { EXAMPLES } from "../../data-with-examples";
import TabButton from "../TabButton/TabButton";
import "./Examples.css";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";

const menuItems = [
  { title: "Components", pointer: "components" },
  { title: "JSX", pointer: "jsx" },
  { title: "Props", pointer: "props" },
  { title: "State", pointer: "state" },
];

const Examples = () => {
  const [example, setExample] = useState(null);

  const handleClick = (newExample) => {
    setExample(newExample);
  };

  const content = example ? (
    <>
      <h3>{EXAMPLES[example].title}</h3>
      <p>{EXAMPLES[example].description}</p>
      <pre>
        <code>{EXAMPLES[example].code}</code>
      </pre>
    </>
  ) : (
    <p>Nothing have been selected.</p>
  );
  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={menuItems.map((el) => (
          <TabButton
            isActive={example === el.pointer}
            onClick={() => handleClick(el.pointer)}
            key={el.pointer}
          >
            {el.title}
          </TabButton>
        ))}
      >
        <div id="tab-content">{content}</div>
      </Tabs>
    </Section>
  );
};

export default Examples;
