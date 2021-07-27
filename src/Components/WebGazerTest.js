// import webgazer from "webgazer";
import LoadScriptTag from './LoadScriptTag';

const WebgazerInit = (props) => {
  console.log(props)
  const onLoaded = () => {
    const { webgazer } = window;
    props.callbacks.forEach(callback => callback(webgazer))

  }

  return (
    <LoadScriptTag id="wg" src={"https://webgazer.cs.brown.edu/webgazer.js?"} initCode={onLoaded} />
  );
}
const defaultFastInitCallback = (data, timestamp) => console.log(data, timestamp);

export const fastInit = (webgazer, callback = defaultFastInitCallback) => {
  webgazer
    .setGazeListener((data, timestamp) => {
      callback(data, timestamp)
    })
    .begin();

  webgazer.showVideo(true);
}

export default WebgazerInit;