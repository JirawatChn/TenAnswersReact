import React, { useEffect, useRef, useState } from "react";
import { Back, Mode, Recent, Hint, Left, EnterInput } from "../src/component";

export const Easy = () => {

  const randomnum = () => {
    let r = Math.floor(Math.random() * 50) + 1;
    console.log('random ' + r)
    return r
  };

  const [readOnly, setReadOnly] = useState(false)
  const [random, setRandom] = useState(randomnum)
  let [min, setMin] = useState(1)
  let [high, setHigh] = useState(50)
  let [i, setI] = useState(1)
  let [left, setLeft] = useState(11)
  const [value, setValue] = useState('')
  const [repeat, setRepeat] = useState(1)
  const [list, setList] = useState([])
  const goto = useRef()

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 2) {
      setValue(inputValue)
    }
  }

  useEffect(() => {
    setLeft(left - 1)
  }, [i])

  const gameset = useRef()
  const enter = useRef()
  const runnumber = useRef()
  const diff = useRef()
  const more = useRef()
  const less = useRef()
  const input = useRef()
  let [inputnum, setInputnum] = useState(0)

  const checklast = (rep) => {
    console.log('repeat ' + list.includes(inputnum))
    if (i >= 2 && i <= 10) {
      if (list.includes(inputnum) && inputnum != []) {
        // console.log('test 2 '+list.includes(inputnum))
        console.log('repeat ' + repeat);
        setRepeat(repeat + 1)
        if (repeat == 1) {
          runnumber.current.innerHTML =
            "[" + (i + 1) + "] Your Number is repeat! ";
        } else if (repeat == 2) {
          runnumber.current.innerHTML =
            "[" + (i + 1) + "] This Number again? ";
        } else if (repeat == 3) {
          runnumber.current.innerHTML =
            "[" + (i + 1) + "] Change the Number! ";
        } else if (repeat >= 4 && repeat < 8) {
          runnumber.current.innerHTML =
            "[" + (i + 1) + "] ARE YOU OK?? ";
        } else if (repeat == 8) {
          runnumber.current.innerHTML =
            "[" + (i + 1) + "] Error????";
        }
      } else {
        runnumber.current.innerHTML =
          "[" + (i + 1) + "] The Number is " + rep + " " + inputnum;
      }
    }

    list.push(inputnum)
    console.log(list)

  }

  const morethan = () => {
    runnumber.current.innerHTML =
      "[" + (i + 1) + "] The Number is more than " + inputnum;
    more.current.innerHTML +=
      "[" + i + "] " + inputnum + "<br>";
    console.log("more");
    checklast("more than")
  }

  const lessthan = () => {
    runnumber.current.innerHTML =
      "[" + (i + 1) + "] The Number is less than " + inputnum;
    less.current.innerHTML +=
      "[" + i + "] " + inputnum + "<br>";
    console.log("less");
    checklast("less than")
  }

  const win = () => {

    console.log("correct");
    gameset.current.innerHTML = "You Win!";
    gameset.current.style.color = "#67DB3F";
    input.current.style.background = "#67DB3F";
    diff.current.innerHTML = "The Number is " + random + "!"
    setReadOnly(true)
    runnumber.current.innerHTML =
      "Correct! You guess " + i + " number " + "<br>" + "to win this game!";

    enter.current.innerHTML = "Play Again?";
    enter.current.removeEventListener("click", check);
    enter.current.addEventListener("click", () => { // เพิ่ม event listener ใหม่ที่ทำการ reload หน้าเว็บ
      window.location.reload()
    });
  }

  const check = () => {
    setInputnum(inputnum = input.current.value)
    console.log('inputnum ' + inputnum)
    // console.log(random)
    if (!inputnum) {
      runnumber.current.innerHTML =
        "[" + i + "] Please Enter a Number!";
      return;
    }
    if (i < 10) {
      if (inputnum < random) {
        morethan()
      } else if (inputnum > random) {
        lessthan()
      } else if (inputnum == random) {
        win()
      }
      setI(i + 1)
      console.log("left " + left)
      console.log("i " + i)

      //รอบที่ 10
    } else if (i === 10) {
      setLeft(left = 0)
      if (inputnum < random) {
        morethan()
      } else if (inputnum > random) {
        lessthan()
      }
      if (!inputnum) {
        runnumber.current.innerHTML =
          "[" + i + "] Please Enter a Number!";
        return;
      }
      runnumber.current.innerHTML = "The Number is " + random + "!";
      input.current.style.background = "#E33B3B";
      setReadOnly(true)
      gameset.current.innerHTML = "You Lose!";
      gameset.current.style.color = "#E33B3B";
      diff.current.innerHTML =
        "The Number is " + random + "!";
      enter.current.innerHTML = "Try Again?";
      enter.current.removeEventListener("click", check);
      enter.current.addEventListener("click", () => { // เพิ่ม event listener ใหม่ที่ทำการ reload หน้าเว็บ
        window.location.reload()
      });
      if (repeat == 9) {
        diff.current.innerHTML = "You repeat it 10 times?";
      }
      console.log("i " + i)
      if (inputnum == random) {
        win()
      }
    }
  }

  return (
    <div className='hw'>
      <Back goto={goto} />
      <Mode Name='Easy' min={min} high={high} Color='#67DB3F' gameset={gameset} diff={diff} />
      <Recent more={more} less={less} />
      <Hint round={i} runnumber={runnumber} />
      <EnterInput enter={enter} readOnly={readOnly} check={check} value={value} handleChange={handleChange} input={input} />
      <Left left={left} />
    </div>
  )
}
