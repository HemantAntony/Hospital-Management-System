import {React, useState, useEffect} from "react"
import axios from "axios"
import Doctor from "../components/Doctor"
import "../styles/Doctors.css"

export default function Doctors() {
    const [doctorsRaw, setDoctorsRaw] = useState(null)
    useEffect(() => {
        const func = async () => {
            setDoctorsRaw((await axios.get('http://localhost:5000/doctors')).data)
        }
        func()
    }, [])

    let doctors
    if (doctorsRaw) {
        doctors = doctorsRaw.map(doctor => <Doctor name={doctor.name} dept={doctor.dept} onClick={()=>setCurrentDoctor(doctor)}/>)    
    }

    let [currentDoctor, setCurrentDoctor] = useState(null)
    console.log(currentDoctor)
    
    return (
        <div className="doctors">
            <div className="doctors--grid">
            {doctors}
            </div>
            {/* {(currentDoctor !== null) && } */}
        </div>
    )
}
