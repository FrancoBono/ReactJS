import "./NavBar.css"
import Logo from "../../assets/logo1.png"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <nav className='navegacion'>

            <ul className='list'>
            <img className='logo' src={Logo} alt='logo'></img>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Precios</a></li>
                <li><a href="#">Cursos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}