import "../styles/Department.css"

export default function Department({name}) {
    return (
        <div className="department">
            <img src={require(`./departments/${name}.png`)} alt={name} className="department--image"></img>
            <h1 className="department--name">{name}</h1>
        </div>
    )
}
