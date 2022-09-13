import React from "react";
import {NavLink} from 'react-router-dom';
import './NavBar.css'


export default function NavBar (){
    return (
        <div id="NavBar" className="Nav">
            <div className="Logo">
                <NavLink
                    activeStyle={{color: '#b3b3b3', fontWeight: "bold"}}
                    className='Link'
                    to='/'>
                        <span className="pokelogo">WELCOME</span>
                </NavLink>
            </div>
            <div className="Nav_Links">
            <div>
                <NavLink
                    activeStyle={{color: '#b3b3b3', fontWeight: "bold"}}
                    className='Link'
                    to='/Home'>
                    <span>Home</span>
                </NavLink>
            </div>
            <div>
                <NavLink
                    activeStyle={{color: '#b3b3b3', fontWeight: "bold"}}
                    className='Link'
                    to='/newpokemon'>
                    <span>Create Pokemon</span>
                </NavLink>
            </div>
            </div>
        </div>
    )
}