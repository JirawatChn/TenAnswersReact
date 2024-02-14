import React from "react";
import { useNavigate } from "react-router-dom";

export const Back = () => {
    const back = useNavigate()

    return <button id="back" className="back btn" style={{ marginLeft: '5px', marginTop: '15px', marginBottom: '0px' }} onClick={() => { back('/') }}>Back</button>
}

export const Mode = ({ Name, min, high, Color,gameset,diff }) => {

    return (
        <div>
            <div ref={gameset} className="center" style={{ fontSize: '40px', color: Color, fontWeight: 'bold', marginTop: '0px' }}>{Name}</div>
            <div ref={diff} className="center" style={{ fontSize: '25px', fontWeight: 'bold', marginTop: '5px' }}>{min}-{high}</div>
        </div>
    )
}

export const Recent = () => {
    return (
        <div>
            <div className="container">
                <div className="box" style={{ marginTop: '30px', marginBottom: '0px' }}>more than </div>
                <div className="box" style={{ marginTop: '30px', marginBottom: '0px' }}>less than  </div>
            </div>
            <div className="container-2">
                <div id="more" className="round" style={{ marginTop: '-10px' }}></div>
                <div id="less" className="round" style={{ marginTop: '-10px' }}></div>
            </div>
        </div>
    )
}
export const Hint = ({ round ,runnumber}) => {
    return (
        <div ref={runnumber} className="center" style={{ marginTop: '30px', fontSize: '20px' }}>[{round}] Enter Number</div>
    )
}

export const Left = ({left}) =>{
    return <div id="outleft" className="left" style={{ marginTop: '40px' }} >{left} left</div>
}

export const EnterInput = ({readOnly,check,enter,value,handleChange}) => {
    return (
        <div className="center" style={{ marginTop: '20px' }}>
        <input maxLength={2} id="inputnum" type="number" className="input" readOnly={readOnly} value={value} onChange={handleChange}/>
        <button ref={enter} className="submit btn" style={{ marginTop: '50px' }} onClick={check}>Enter</button>
        </div>
    )
}

    