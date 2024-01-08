import React from "react";
import CoreConcept from "../CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../../data-with-examples";
import './CoreConcepts.css';
import Section from "../Section/Section";

const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title='Core Concepts'>
      <ul>
        {CORE_CONCEPTS.map((el) => (
          <CoreConcept {...el} key={el.title} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
