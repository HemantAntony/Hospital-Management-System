import {React, useEffect, useState} from "react"
import axios from "axios"
import Department from "../components/Department"
import "../styles/Departments.css"
import DepartmentInfo from "../components/DepartmentInfo"

export default function Departments() {
    const [departmentsRaw, setDepartmentsRaw] = useState(null)
    useEffect(() => {
        const func = async () => {
            setDepartmentsRaw((await axios.get('http://localhost:5000/departments')).data)
        }
        func()
    }, [])

    let [currentDepartment, setCurrentDepartment] = useState(null)

    let departments
    if (departmentsRaw) {
        console.log(departmentsRaw)
        departments = departmentsRaw.map(department => {
            return <Department key={department.name} name={department.name} onClick={()=>{
                setCurrentDepartment(department)
            }}/>
        })    
    }
    return (
        <div className="departments">
            <div className="departments--grid">
                {departments}
            </div>
            {(currentDepartment !== null) && <DepartmentInfo name={currentDepartment.name} info={currentDepartment.info} hod={currentDepartment.hod} numberOfStaff={currentDepartment.numberOfStaff} onClose={()=>{
                setCurrentDepartment(null)
            }}/>}
        </div>
    )
}
