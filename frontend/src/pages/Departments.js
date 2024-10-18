import Department from "../components/Department"
import "../styles/Departments.css"

export default function Departments() {
    const departmentsRaw = [
        {
            name: "Anaesthesia",
            hod: 3
        },
        {
            name: "Cardiology",
            hod: 6
        },
        {
            name: "Dental",
            hod: 8
        },
        {
            name: "Neurology",
            hod: 2
        },
    ]

    const departments = departmentsRaw.map(department => {
        return <Department key={department.name} name={department.name} />
    })
    
    return (
        <div className="departments">
            {departments}
        </div>
    )
}
