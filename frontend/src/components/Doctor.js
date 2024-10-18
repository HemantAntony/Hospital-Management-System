import "../styles/Doctor.css"

export default function Doctor({name, dept, onClick}) {
    return (
        <div className="doctor" onClick={onClick}>
            <img src={require(`./doctors/${name}.jpg`)} alt="Doctor" className="doctor--image" />
            <h1 className="doctor--name">{name}</h1>
            <h2 className="doctor--dept">{dept}</h2>
        </div>
    )
}