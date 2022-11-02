import {react,useState} from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    const [click,setclick]=useState(false);
    return (
        <div>
            <header class="l-header ">
            <nav class={"nav bd-grid "}>
                <div>
                    <Link to="/" class="nav__logo text-xl">Ismail</Link>
                </div>

                <div class={click?"nav__menu show ":"nav__menu  "} id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item brand"><Link to="/" class="nav__link active">Home</Link></li>
                        <li class="nav__item brand"><a href="#about" class="nav__link">About</a></li>
                        <li class="nav__item brand"><a href="#skills" class="nav__link">Skills</a></li>
                        <li class="nav__item brand"><a href="#projets" class="nav__link">Work</a></li>
                        <li class="nav__item brand"><a href="#contact" class="nav__link">Contact</a></li>
                    </ul>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <i onClick={()=>{setclick(!click)}} class='bx bx-menu'></i>
                </div>
            </nav>
        </header>  
        </div>
    );
};

export default NavBar;