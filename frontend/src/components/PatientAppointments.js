import "../styles/PatientAppointments.css"
import { useState } from "react"
import axios from "axios"

export default function PatientAppointments() {
    const jwt = sessionStorage.getItem("jwt")
    const [appointment, setAppointment] = useState({
        doctor: "",
        time: "",
        summary: ""
    })
    
    function textfieldChanged(event) {
        const {name, value} = event.target
        setAppointment(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function onSubmit(event) {
        event.preventDefault()
        const func = async () => {
            await axios.post('http://localhost:5000/appointment', appointment, {headers: {Authorization: "Bearer " + jwt}})
        }
        func()
    }
    
    return (
        <form className="patient--appointment">
            <label htmlFor="doctor">Doctor</label>
            <input type="text" id="doctor" name="doctor" onChange={textfieldChanged}></input>
            <label htmlFor="time">Time</label>
            <input type="text" id="time" name="time" onChange={textfieldChanged}></input>
            <label htmlFor="summary">Summary</label>
            <input type="text" id="summary" name="summary" onChange={textfieldChanged}></input>
            <input type="submit" name="login--submit" onClick={onSubmit} />
        </form>
    )
}