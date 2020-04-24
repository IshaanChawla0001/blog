import React, {useState} from 'react'
import logo from '../../assets/home_header.png'
import '../css/header.css'
import {Link} from "react-router-dom";

function Header() {

    return (
        <div className = 'heading'>
            <header>

                <div className = 'logo' >
                    <h1>Homepage</h1>
                    <img className= "logoImage" src = {logo} alt = "No logo"  />
                </div>

            </header>
            <div>
            </div>
        </div>

    )
}



export default Header
