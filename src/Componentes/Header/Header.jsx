import React ,{useState} from 'react'
import "./header.css"

function Header() {
const [menu, setMenu] = useState(false)
    function toqueMenu(){
        setMenu(!menu)
    }
return (
    <header className="header">
        <img src="../img/rmaqLogo1.jpg"
            className='imgLogo' title='Rmaq'
        ></img>
        <span className='pngOpen' onClick={toqueMenu}><img src="../img/menu.png" className='menuImg' alt="menu" /></span>
        <div className={menu ? 'active menuNav' : "menuNav"}>
        <a href="#">Rmaq</a>
        <a href="#">Maq. Automaticas</a>
        <a href="#">Maq. Semiautomaticas</a>
        <a href="#">Prestaciones</a>
        </div>
    </header>
)
}

export default Header