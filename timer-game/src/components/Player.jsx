import { useRef, useState } from "react";

export default function Player() {
  const input = useRef();
  const [userName, setUserName] = useState('');

  const handleClick = () => {
    setUserName(input.current.value);
    input.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {userName.length ? userName : "unknown entity"}</h2>
      <p>
        <input type="text" ref={input} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
