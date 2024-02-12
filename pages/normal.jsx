import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Back, Hint, Left, Mode, Recent, Input } from "../src/component";

export const Normal = () => {

  const randomnum = () => {
    let r = Math.floor(Math.random() * 100) + 1;
    console.log('random ' + r)
    return r
  };

  const back = useNavigate()
  const [readOnly, setReadOnly] = useState(false)
  const [random, setRandom] = useState(randomnum)
  let [min, setMin] = useState(1)
  let [high, setHigh] = useState(99)
  let [i, setI] = useState(1)
  let [left, setLeft] = useState(10)

  const check = () => {

    let input = document.getElementById("inputnum")
    let inputnum = parseInt(document.getElementById("inputnum").value);
    let runnumber = document.getElementById("runnumber");
    let outleft = document.getElementById("outleft");
    let diff = document.getElementById("diff");
    let gameset = document.getElementById("gameset");
    let back = document.getElementById("back");
    let enter = document.getElementById("enter");

    console.log(inputnum)
    // console.log(random)
    if (!inputnum) {
      runnumber.innerHTML =
        "[" + i + "] Please Enter a Number!";
      return;
    }
    if (i < 10) {
      if (inputnum < random) {
        runnumber.innerHTML =
          "[" + (i + 1) + "] The Number is more than " + inputnum;
        document.getElementById("more").innerHTML +=
          "[" + i + "] " + inputnum + "<br>";
        setMin(min = inputnum)
        console.log("more");
      } else if (inputnum > random) {
        runnumber.innerHTML =
          "[" + (i + 1) + "] The Number is less than " + inputnum;
        document.getElementById("less").innerHTML +=
          "[" + i + "] " + inputnum + "<br>";
        setHigh(high = inputnum)
        console.log("less");
      } else if (inputnum == random) {
        console.log("correct");
        gameset.innerHTML = "You Win!";
        gameset.style.color = "#67DB3F";
        input.style.background = "#67DB3F";
        diff.innerHTML = "The Number is " + random + "!"
        setReadOnly(true)
        runnumber.innerHTML =
          "Correct! You guess " + i + " number " + "<br>" + "to win this game!";
        enter.style.opacity = 0
        //   enter.innerHTML = "Play Again?";
        // enter.removeEventListener("click", check);
        // enter.addEventListener("click", () => { // เพิ่ม event listener ใหม่ที่ทำการ reload หน้าเว็บ
        //   reloadPage()
        // });
      }
      setLeft(left - 1)
      setI(i + 1)
      console.log("left " + left)
      console.log("i " + i)

      //รอบที่ 10
    } else if (i === 10) {
      setLeft(left = 0)
      if (inputnum < random) {
        runnumber.innerHTML =
          "[" + (i + 1) + "] The Number is more than " + inputnum;
        document.getElementById("more").innerHTML +=
          "[" + i + "] " + inputnum + "<br>";
        setMin(min = inputnum)
        console.log("more");
      } else if (inputnum > random) {
        runnumber.innerHTML =
          "[" + (i + 1) + "] The Number is less than " + inputnum;
        document.getElementById("less").innerHTML +=
          "[" + i + "] " + inputnum + "<br>";
        setHigh(high = inputnum)
        console.log("less");
      }
      if (!inputnum) {
        runnumber.innerHTML =
          "[" + i + "] Please Enter a Number!";
        return;
      }
      runnumber.innerHTML = "The Number is " + random + "!";
      input.style.background = "#E33B3B";
      setReadOnly(true)
      gameset.innerHTML = "You Lose!";
      gameset.style.color = "#E33B3B";
      diff.innerHTML =
        "The Number is " + random + "!";
      enter.style.opacity = 0
      // enter.innerHTML = "Try Again?";
      // enter.removeEventListener("click", check);
      // enter.addEventListener("click", () => { // เพิ่ม event listener ใหม่ที่ทำการ reload หน้าเว็บ
      //   reloadPage()
      // });
      console.log("i " + i)
      if (inputnum == random) {
        console.log("correct");
        diff.innerHTML =
          "The Number is " + random + "!";
        gameset.innerHTML = "You Win!";
        gameset.style.color = "#67DB3F";
        input.style.background = "#67DB3F";

        runnumber.innerHTML =
          "Correct! You guess " + i + " number " + "<br>" + "to win this game!";
        enter.style.opacity = 0
        //   enter.innerHTML = "Play Again?";
        //   enter.removeEventListener("click", check);
        // enter.addEventListener("click", () => { // เพิ่ม event listener ใหม่ที่ทำการ reload หน้าเว็บ
        //   reloadPage()
        // });
      }
    }


  }

  return (
    <div className='hw'>
      <Back />
      <Mode Name='Normal' min={min} high={high} Color='#FF8E25' />
      <Recent />
      <Hint round={i} />
      <div className="center" style={{ marginTop: '20px' }}>
        <Input readOnly={readOnly} />
        <button id="enter" className="submit btn" style={{ marginTop: '50px' }} onClick={check}>Enter</button>
      </div>
      <Left left={left} />
    </div>
  )
}
