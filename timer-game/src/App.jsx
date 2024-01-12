import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <div id="content">
        <header>
          <h1>the <em>almost</em> final countdown</h1>
          <p>Stop the timer once you estimate that time is (almost) up</p>
        </header>
        <Player />
        <div id="challenges">
          <TimerChallenge title="Easy" targetTime={1}/>
          <TimerChallenge title="Not Easy" targetTime={5}/>
          <TimerChallenge title="Getting Tough" targetTime={10}/>
          <TimerChallenge title="Pros Only" targetTime={15}/>
        </div>
      </div>
    </>
  );
}

export default App;
