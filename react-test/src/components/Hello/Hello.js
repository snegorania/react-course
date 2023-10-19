import React from "react";
import { useState } from "react";
import Output from "../Output/Output";

const Hello = () => {
    const [isHouse, setIsHouse] = useState(false);

    const toggle = () => {
        setIsHouse(true);
    }

    return (
        <div>
            <h2>Hello world!</h2>
            <p>It is good weather today</p>
            <button onClick={toggle}>Toggle House</button>
            {isHouse && <Output>House</Output>}
            {!isHouse && <Output>No House</Output>}
        </div>
    )
}

export default Hello