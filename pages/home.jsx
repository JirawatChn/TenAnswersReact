import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () =>{

    const goto = useNavigate()
    
    return (
        <div className="center">
            <div style={{fontSize: '40px',fontWeight: 'bold', marginTop: '100px'}} className="textin">Ten Answers</div>
            <button className="button btn" style={{marginTop: '120px'}} onClick={() => goto('/easy')}>Easy</button>
            <button className="button btn" style={{backgroundColor: '#FF8E25'}} onClick={() => goto('/normal')}>Normal</button>  
        </div>
    )
}
