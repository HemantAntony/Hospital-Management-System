import AccountNeeded from "../components/AccountNeeded";
import PatientAppointments from "../components/PatientAppointments";
import DoctorAppointments from "../components/DoctorAppointments";
import "../styles/Appointments.css"

export default function Appointments() {
    const isDoctor = sessionStorage.getItem('doctor')
    const jwt = sessionStorage.getItem('jwt')
    console.log("Token exists: ", sessionStorage.getItem('doctor'))
    
    return (
        <div className="appointments">
            { !jwt && <AccountNeeded />}
            { jwt && (isDoctor === "false") && <PatientAppointments />}
            { jwt && (isDoctor === "true") && <DoctorAppointments />}
        </div>
    )
}
