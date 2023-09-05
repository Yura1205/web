import '../style/login.css';
import React, { useState } from 'react';
import { LoginForm } from '../components/LoginForm';
import mapa from "../assets/map.svg";
import wave from "../assets/wave.png";

export const Login = () => {


  return (
    <div>
        <script src="https://kit.fontawesome.com/a81368914c.js"></script>
        <img className="fixed bottom-0 left-0 h-full z-[-1]" src={wave}/>
        <div className="container">
            <div className="img">
                <img src={mapa} alt="Viajero"/>
            </div>
            <div>
                <LoginForm />
            </div>
        </div>
    </div>
  )
}
