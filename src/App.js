import React, {useState} from 'react';
import TextBox from './TextBox';
import TopBar from './TopBar';
import ResultPage from './ResultPage';
import './App.css';


function App() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState({
    'wordCount' : '---',
    'numberOfLetters' : '---',
    'longestWord' : '---',
    'averageLength' : '---',
    'readingDuration': '---',
    'medianWordLength': '---',
    'medianWord': '---',
    'commonWords': '---',
    'language': '---',
  });

  return (
    <div className="App">
      <TopBar/>
      <TextBox result={result} setResult={setResult}/>
      <ResultPage result={result}/>
    </div>
  );
}

export default App;
