import { useEffect } from 'react';
import './App.css';
import WebgazerInit, { fastInit } from "./Components/WebGazerTest";

function App() {
  // const webgazer = useWebgazer();
  useEffect(() => {
    console.log(typeof fastInit);

    // console.log(webgazer);
    /* webgazer
      .setGazeListener((data, timestamp) => {
        console.log(data, timestamp);
      })
      .begin();

    webgazer.showVideo(true); */
  })
  return (
    <div>
      <WebgazerInit callbacks={[fastInit]} />
    </div>
  );
}

export default App;
