import { useState, useCallback, useMemo } from 'react';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button';
import DemoList from './components/Demo/DemoList';


function App() {
  const [listTitle, setListTitle] = useState('My list');
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle) {
      setShowParagraph((prev) => !prev);
    }
  }, [allowToggle])

  const allowToggleHandler = useCallback(() => {
    setAllowToggle((prev) => !prev);
  }, [])

  const titleChangeHandler = useCallback(() => setListTitle('NewTitle'), []);
  const arr =useMemo(() => [3, 9, 10, 4, 5], [])
  return (
    <div className="app">
      <h1>Hi there</h1>
      <DemoList title={listTitle} items={arr}/>
      <Button onClick={titleChangeHandler}>Allow Toggle</Button>
      <DemoOutput show={showParagraph}/>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle paragraph</Button>
    </div>
  );
}

export default App;
