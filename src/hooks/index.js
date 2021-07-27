import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import LoadScriptTag from '../Components/LoadScriptTag';
// import { WebgazerInit, fastInit } from "../Components/WebGazerTest";

export const useWebgazer = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoaded = () => {
    setIsLoaded(true);
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.id = "wg";
    script.async = false;
    script.src = "https://webgazer.cs.brown.edu/webgazer.js?";
    document.head.appendChild(script);
    document.querySelector("#wg").onload = onLoaded;
    return () => document.head.removeChild(script)
  }, [isLoaded])

  return isLoaded ? window.webgazer : null;
};