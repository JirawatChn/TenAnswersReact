import React from "react";
import { useNavigate } from "react-router-dom";

export const Back = ({ goto }) => {
    const back = useNavigate()

    return <button ref={goto} className="back btn" style={{ marginLeft: '10px', marginTop: '15px', marginBottom: '0px' }} onClick={() => { back('/') }}>Back</button>
}

export const Mode = ({ Name, min, high, Color, gameset, diff }) => {

    return (
        <div>
            <div ref={gameset} className="center" style={{ fontSize: '40px', color: Color, fontWeight: 'bold', marginTop: '0px' }}>{Name}</div>
            <div ref={diff} className="center" style={{ fontSize: '25px', fontWeight: 'bold', marginTop: '0px' }}>{min}-{high}</div>
        </div>
    )
}

export const Recent = ({ more, less }) => {
    return (
        <div>
            <div className="container">
                <div className="box" style={{ marginTop: '20px', marginBottom: '0px' }}>more than </div>
                <div className="box" style={{ marginTop: '20px', marginBottom: '0px' }}>less than  </div>
            </div>
            <div className="container-2">
                <div ref={more} className="round" style={{ marginTop: '-10px' }}></div>
                <div ref={less} className="round" style={{ marginTop: '-10px' }}></div>
            </div>
        </div>
    )
}

export const Hint = ({ round, runnumber }) => {
    return (
        <div ref={runnumber} className="center" style={{ marginTop: '20px', fontSize: '20px' }}>[{round}] Enter Number</div>
    )
}

export const EnterInput = ({ readOnly, check, enter, value, handleChange, input }) => {
    return (
        <div className="center" style={{ marginTop: '20px' }}>
            <input ref={input} type="number" className="input" readOnly={readOnly} value={value} onChange={handleChange} />
            <button ref={enter} className="submit btn" style={{ marginTop: '30px' }} onClick={check}>Enter</button>
        </div>
    )
}

export const Left = ({ left }) => {
    return <div className="left" style={{ marginTop: '30px' }} >{left} left</div>
}


