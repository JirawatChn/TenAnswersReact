import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Easy = () => {

  const randomnum = () => {
    let r = Math.floor(Math.random() * 50) + 1;
    console.log('random ' + r)
    return r
  };
  function refreshPage() {
    window.location.reload(false);
  }

  const back = useNavigate()
  const [readOnly,setReadOnly] = useState(false)
  const [random, setRandom] = useState(randomnum)
  let [min, setMin] = useState(1)
  let [high, setHigh] = useState(50)
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
    if(i < 10){
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
    }else if(inputnum == random){
      console.log("correct");
      gameset.innerHTML = "You Win!";
      gameset.style.color = "#67DB3F";
      input.style.background = "#67DB3F";
      diff.innerHTML = "The Number is " + random + "!"
      setReadOnly(true)
      runnumber.innerHTML =
        "Correct! You guess " + i + " number " + "<br>" + "to win this game!";
        enter.innerHTML = "Play Again?";
      enter.removeEventListener("click", check);
      enter.addEventListener("click", () => { // เพิ่ม event listener ใหม่ที่ทำการ reload หน้าเว็บ
        window.location.href = window.location.href;
      });
    }
    setLeft(left - 1)
    setI(i + 1)
    console.log("left "+left)
    console.log("i "+i)

    //รอบที่ 10
    }else if(i === 10){
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
      runnumber.innerHTML ="The Number is " + random + "!";
      input.style.background = "#E33B3B";
      setReadOnly(true)
      gameset.innerHTML = "You Lose!";
      gameset.style.color = "#E33B3B";
      enter.innerHTML = "Try Again?";
      enter.removeEventListener("click", check);
      enter.addEventListener("click", () => { // เพิ่ม event listener ใหม่ที่ทำการ reload หน้าเว็บ
        window.location.href = window.location.href;
      });
      console.log("i "+i)
      if (inputnum == random) {
        console.log("correct");
        diff.innerHTML =
          "The Number is " + random + "!";
        gameset.innerHTML = "You Win!";
        gameset.style.color = "#67DB3F";
        input.style.background = "#67DB3F";
        
        runnumber.innerHTML =
          "Correct! You guess " + i + " number " + "<br>" + "to win this game!";
        enter.innerHTML = "Play Again?";
        enter.removeEventListener("click", check);
      enter.addEventListener("click", () => { // เพิ่ม event listener ใหม่ที่ทำการ reload หน้าเว็บ
        window.location.href = window.location.href;
      });
      }
    }


  }

  return (
    <div className='hw'>
      <button id="back" className="back btn" style={{ marginLeft: '5px', marginTop: '15px', marginBottom: '0px' }} onClick={() => { back('/') }}>Back</button>
      <div id="gameset" className="center" style={{ fontSize: '40px', color: '#67DB3F', fontWeight: 'bold', marginTop: '0px' }}>Easy</div>
      <div id="diff" className="center" style={{ fontSize: '25px', fontWeight: 'bold', marginTop: '5px' }}>{min}-{high} </div>
      <div className="container">
        <div className="box" style={{ marginTop: '30px', marginBottom: '0px' }}>more than </div>
        <div className="box" style={{ marginTop: '30px', marginBottom: '0px' }}>less than  </div>
      </div>
      <div className="container-2">
        <div id="more" className="round" style={{ marginTop: '-10px' }}></div>
        <div id="less" className="round" style={{ marginTop: '-10px' }}></div>
      </div>
      <div id="runnumber" className="center" style={{ marginTop: '30px', fontSize: '20px' }}>[{i}] Enter Number</div>
      <div className="center" style={{ marginTop: '20px' }}>
        <input id="inputnum" type="number" className="input" readOnly={readOnly}/>
        <button id="enter" className="submit btn" style={{ marginTop: '50px' }} onClick={check}>Enter</button>
      </div>
      <div id="outleft" className="left" style={{ marginTop: '40px' }} >{left} left</div>
    </div>
  )
}
