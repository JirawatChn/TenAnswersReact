import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Back,Mode, Recent,Hint, Left, EnterInput } from "../src/component";

export const Easy = () => {

  const randomnum = () => {
    let r = Math.floor(Math.random() * 50) + 1;
    console.log('random ' + r)
    return r
  };

  const back = useNavigate()
  const [readOnly, setReadOnly] = useState(false)
  const [random, setRandom] = useState(randomnum)
  let [min, setMin] = useState(1)
  let [high, setHigh] = useState(50)
  let [i, setI] = useState(1)
  let [left, setLeft] = useState(11)
  const [value,setValue] = useState('')

  const handleChange = (e) =>{
    const inputValue = e.target.value;
    if(inputValue.length <= 2){
      setValue(inputValue)
    }
  }

  useEffect(()=>{
    setLeft(left - 1)
  },[i])

  const gameset = useRef()
  const enter = useRef()
  const runnumber = useRef()
  const diff = useRef()

  const check = () => {

    let input = document.getElementById("inputnum")
    let inputnum = parseInt(document.getElementById("inputnum").value);

    console.log(inputnum)
    // console.log(random)
    if (!inputnum) {
      runnumber.current.innerHTML =
        "[" + i + "] Please Enter a Number!";
      return;
    }
    if (i < 10) {
      if (inputnum < random) {
        runnumber.current.innerHTML =
          "[" + (i + 1) + "] The Number is more than " + inputnum;
        document.getElementById("more").innerHTML +=
          "[" + i + "] " + inputnum + "<br>";
        console.log("more");
      } else if (inputnum > random) {
        runnumber.current.innerHTML =
          "[" + (i + 1) + "] The Number is less than " + inputnum;
        document.getElementById("less").innerHTML +=
          "[" + i + "] " + inputnum + "<br>";
        console.log("less");
      } else if (inputnum == random) {
        console.log("correct");
        gameset.current.innerHTML = "You Win!";
        gameset.current.style.color = "#67DB3F";
        input.style.background = "#67DB3F";
        diff.current.innerHTML = "The Number is " + random + "!"
        setReadOnly(true)
        runnumber.current.innerHTML =
          "Correct! You guess " + i + " number " + "<br>" + "to win this game!";
        enter.current.style.opacity = 0
        //   enter.innerHTML = "Play Again?";
        // enter.removeEventListener("click", check);
        // enter.addEventListener("click", () => { // เพิ่ม event listener ใหม่ที่ทำการ reload หน้าเว็บ
        //   window.location.reload()
        // });
      }
      setI(i + 1)
      console.log("left " + left)
      console.log("i " + i)

      //รอบที่ 10
    } else if (i === 10) {
      setLeft(left = 0)
      if (inputnum < random) {
        runnumber.current.innerHTML =
          "[" + (i + 1) + "] The Number is more than " + inputnum;
        document.getElementById("more").innerHTML +=
          "[" + i + "] " + inputnum + "<br>";
        console.log("more");
      } else if (inputnum > random) {
        runnumber.current.innerHTML =
          "[" + (i + 1) + "] The Number is less than " + inputnum;
        document.getElementById("less").innerHTML +=
          "[" + i + "] " + inputnum + "<br>";
        console.log("less");
      }
      if (!inputnum) {
        runnumber.current.innerHTML =
          "[" + i + "] Please Enter a Number!";
        return;
      }
      runnumber.current.innerHTML = "The Number is " + random + "!";
      input.style.background = "#E33B3B";
      setReadOnly(true)
      gameset.current.innerHTML = "You Lose!";
      gameset.current.style.color = "#E33B3B";
      diff.current.innerHTML =
        "The Number is " + random + "!";
      enter.current.style.opacity = 0
      // enter.innerHTML = "Try Again?";
      // enter.removeEventListener("click", check);
      // enter.addEventListener("click", () => { // เพิ่ม event listener ใหม่ที่ทำการ reload หน้าเว็บ
      //   window.location.reload()
      // });
      console.log("i " + i)
      if (inputnum == random) {
        console.log("correct");
        diff.current.innerHTML =
          "The Number is " + random + "!";
        gameset.current.innerHTML = "You Win!";
        gameset.current.current.style.color = "#67DB3F";
        input.style.background = "#67DB3F";

        runnumber.current.innerHTML =
          "Correct! You guess " + i + " number " + "<br>" + "to win this game!";
        enter.current.style.opacity = 0
        //   enter.innerHTML = "Play Again?";
        //   enter.removeEventListener("click", check);
        // enter.addEventListener("click", () => { // เพิ่ม event listener ใหม่ที่ทำการ reload หน้าเว็บ
        //   window.location.reload()
        // });
      }
    }


  }

  return (
    <div className='hw'>
      <Back />
      <Mode Name='Easy' min={min} high={high} Color='#67DB3F'gameset={gameset} diff={diff}/>
      <Recent/>
      <Hint round={i} runnumber={runnumber}/>
      <EnterInput enter={enter} readOnly={readOnly} check={check} value={value} handleChange={handleChange}/>
     <Left left={left}/>
    </div>
  )
}
