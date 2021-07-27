// import webgazer from "webgazer";
import { Helmet } from 'react-helmet';
import { useEffect, useState } from "react";

const LoadScriptTag = ({ id, src, initCode = null }) => {
  if (!id) throw new Error("You must enter an id!");
  if (!src) throw new Error("You must enter an src!");
  const [isLoaded, setIsLoaded] = useState(false);
  if (isLoaded) {
    initCode();
  }
  useEffect(() => {
    document.querySelector(`script#${id}`).onload = onLoaded;
  }, [isLoaded])


  const onLoaded = () => {
    setIsLoaded(true);
  };


  return (
    <Helmet>
      <script id={id} src={src}></script>
    </Helmet>
  );
}

export default LoadScriptTag;
