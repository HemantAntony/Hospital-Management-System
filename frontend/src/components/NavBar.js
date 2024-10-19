import "../styles/NavBar.css"
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div className="navbar">
            <img src="logo.png" alt="Logo" className="navbar--logo"></img>
            <ul className="navbar--items">
                <li className="navbar--item"><Link to="/">Home</Link></li>
                <li className="navbar--item"><Link to="/departments">Departments</Link></li>
                <li className="navbar--item"><Link to="/doctors">Doctors</Link></li>
                <li className="navbar--item"><Link to="/appointments">Appointments</Link></li>
            </ul>
            <Link to="/account">
            <img src="account.png" alt="Account" className="navbar--account"></img>
            </Link>
        </div>
    )
}