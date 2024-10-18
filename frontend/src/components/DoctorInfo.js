import "../styles/DoctorInfo.css"

export default function DoctorInfo({name, info, hod, numberOfStaff, qualifications, onClose}) {
    return (
        <div className="doctor--info">
            <div className="doctor--info--header">
                <h1 className="doctor--info--title">{name}</h1>
                <p className="doctor--info--close" onClick={onClose}>x</p>
            </div>
            <div className="doctor--info--content">
                <p className="doctor--info--desc">{info}</p>
                <img src={require(`./doctors/${name}.jpg`)} alt="Doctor image" className="doctor--info--image"/>
            </div>
            <div className="doctor--info--finals">
                <div className="doctor--info--final">
                    <h2 className="doctor--info--final--text">{`${qualifications[0]}`}</h2>
                </div>
                <div className="doctor--info--final">
                    <h2 className="doctor--info--final--text">{`Number of staff: ${numberOfStaff}`}</h2>
                </div>
            </div>
        </div>
    )
}
