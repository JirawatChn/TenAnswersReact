import React, { useEffect, useRef, useState } from "react";
import { Back, Mode, Recent, Hint, Left, EnterInput } from "../src/component";

export const Easy = () => {

  let [guess,setGuess] = useState(1)
  setGuess(guess + 1)

  guess++

  setGuess(guess + 1)

  const playN50 = () =>{

  }
return(
  <div>
    <div>asdsad</div>
    <button onClick={playN50}></button>
  </div>
)
}