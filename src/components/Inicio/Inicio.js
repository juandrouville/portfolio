import React from "react";
import img from '../../portfolio-bodoni-white.svg';
import Animation from '../Animation/animation';

function Inicio(){
    return (
        <div>
            <img src={img}/>
            <Animation/>
        </div>
    )
};

export default Inicio;