/* -------------------------------------------------------------------------- */
/* ------------------------------ IMPORTANT!!! ------------------------------ */
/* ------------------ This component will insert a script ------------------- */
/* ---------------- into the head tag of your html document!! --------------- */
/* ----------------- Use only with a trusted script source!! ---------------- */
/* ---------------------- The authors of this code will --------------------- */
/* ----------------- not be responsible of any damage caused ---------------- */
/* ----------- by any third party code ran using this component!! ----------- */
/* -------------------------------------------------------------------------- */
/* ------------------------------ Fun Hacking! ------------------------------ */
/* -------------------------------------------------------------------------- */

import { Helmet } from 'react-helmet'; // react-helmet manipulates the HTML5 "head" tag of a rendered component.
import { useEffect, useState } from "react";

const LoadScriptTag = ({ id, src, initCode = null }) => {
  //Receives as props:
  //// id: Required for calling the created script in the DOM.
  //// src: Required for fetching of the desired script.
  //// initCode: A function to invoke when the script is loaded --> NOT required for the component to work.

  //This component will not work properly without supplying an "src" and an "id".
  if (!id) throw new Error("You must enter an id!");
  if (!src) throw new Error("You must enter an src!");

  // When the script is loaded this boolean will change to true.
  const [isLoaded, setIsLoaded] = useState(false);

  // Call the supplied initCode function
  if (isLoaded) {
    if (initCode !== null) initCode();
  }

  useEffect(() => {
    document.querySelector(`script#${id}`).onload = onLoaded;
  }, [isLoaded, id])

  // Toggle the state of "isLoaded" to "true" when the script finishes to load from the source.
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
