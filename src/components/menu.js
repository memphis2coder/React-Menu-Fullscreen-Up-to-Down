 import React, {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom';
import { gsap } from 'gsap';
import "../globalStyles.css";
import './menu.css';

const Menu = ({state}) => {
    // reference to the DOM node
    let menu = useRef(null);

    // toggle menu open and close
    useEffect(() => {
         if (state.clicked === false) { // if its false menu is closed
            gsap.to(menu, {
                duration: 0.8,
                height: 0,
                ease: "power3.inOut"
            });
            gsap.to(menu, {
                duration: 1,
                css: {display: "none"}
            });
            console.log('close menu');
        } else if (state.clicked === true || 
            (state.clicked === true && state.initial === null)) 
            { // if its true open menu
            gsap.to(menu, {
                css: {display: "flex"},
            });
            gsap.to(menu, {
                duration: 0,
                height: "100%",
            });
            gsap.from(menu, {
                height: 0,
                duration: 1,
                ease: "power3.inOut"
            })
            console.log("open menu");
        }
    },[state]);

    // reference to the animation
    
    
    

    return (
        <div ref={el => (menu = el)} className="menu">
            <div className ="menu-layer">
                <div className="container">
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/team">Team</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Menu;
