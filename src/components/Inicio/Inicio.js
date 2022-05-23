import React from "react";
import './Inicio.css';
import img from '../../portfolio-bodoni-white.svg';


function Inicio(){
    return (
        <div className="inicio">
            <img src={img}/>
            <div className="violeta"></div>
            <div className="rosa"></div>
        </div>
            
    )
};

export default Inicio;