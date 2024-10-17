import "../styles/NavBar.css"

export default function NavBar() {
    return (
        <div className="navbar">
            <img src="logo.png" alt="Logo" className="navbar--logo"></img>
            <ul className="navbar--items">
                <li className="navbar--item">Home</li>
                <li className="navbar--item">Departments</li>
                <li className="navbar--item">Doctors</li>
                <li className="navbar--item">Appointments</li>
            </ul>
            <img src="account.png" alt="Account" className="navbar--account"></img>
        </div>
    )
}