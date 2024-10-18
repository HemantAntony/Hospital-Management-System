import "../styles/Department.css"

export default function Department({name, onClick}) {
    return (
        <div className="department" onClick={onClick}>
            <img src={require(`./departments/${name}.png`)} alt={name} className="department--image"></img>
            <h1 className="department--name">{name}</h1>
        </div>
    )
}
