import { useEffect } from 'react';
import './App.css';
import { WebgazerInit, fastInit } from "./Components/WebGazerTest";
import { useWebgazer } from './hooks';

function App() {
  const webgazer = useWebgazer();
  useEffect(() => {
    if (webgazer !== null) {
      fastInit(webgazer);
    }
  }, [webgazer])
  return (
    <div>
      {/* <WebgazerInit callbacks={[fastInit]} /> */}
    </div>
  );
}

export default App;
