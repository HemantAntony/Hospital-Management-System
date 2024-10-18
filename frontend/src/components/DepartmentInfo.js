import "../styles/DepartmentInfo.css"

export default function DepartmentInfo({name, info, hod, numberOfStaff, onClose}) {
    return (
        <div className="department--info">
            <div className="department--info--header">
                <h1 className="department--info--title">{name}</h1>
                <p className="department--info--close" onClick={onClose}>x</p>
            </div>
            <p className="department--info--desc">{info}</p>
            <div className="department--info--finals">
                <div className="department--info--final">
                    <h2 className="department--info--final--text">{`Head of Department: ${name}`}</h2>
                </div>
                <div className="department--info--final">
                    <h2 className="department--info--final--text">{`Number of staff: ${numberOfStaff}`}</h2>
                </div>
            </div>
        </div>
    )
}
