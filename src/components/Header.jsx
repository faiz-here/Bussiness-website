import { Link } from 'react-router-dom'
import {HashLink} from "react-router-hash-link"

function Header() {
  return (
    <nav>
        <h1>XYZEE</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <Link to={"/Services"}>Services</Link>
        </main>
    </nav>
  )
}

export default Header