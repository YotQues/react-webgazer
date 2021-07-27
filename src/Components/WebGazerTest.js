import LoadScriptTag from './LoadScriptTag';

// Initialize as a component
export const WebgazerInit = (props) => {
  const onLoaded = () => {
    const { webgazer } = window;
    props.callbacks.forEach(callback => callback(webgazer));
  }
  return (
    <LoadScriptTag id="wg" src={"https://webgazer.cs.brown.edu/webgazer.js?"} initCode={onLoaded} />
  );
};

//Default callbacks:
const defaultFastInitCallback = (data, timestamp) => console.log(data, timestamp);

//Methods and snippets:
export const fastInit = (webgazer = webgazer, callback = defaultFastInitCallback) => {
  webgazer
    .setGazeListener((data, timestamp) => {
      callback(data, timestamp)
    })
    .begin();
  webgazer.showVideo(true);
}