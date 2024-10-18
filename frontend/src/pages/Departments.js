import {React, useState} from "react"
import Department from "../components/Department"
import "../styles/Departments.css"
import DepartmentInfo from "../components/DepartmentInfo"

export default function Departments() {
    const departmentsRaw = [
        {
            name: "Anaesthesia",
            info: `        Welcome to the Anaesthesia Department! Our team of highly skilled anaesthesiologists is dedicated to ensuring your comfort and safety throughout your surgical experience. We utilize advanced techniques and state-of-the-art technology to provide tailored anaesthetic care for a wide range of procedures.

         From pre-operative assessments to post-operative pain management, we prioritize your well-being every step of the way. Our compassionate professionals work closely with surgeons and other specialists to deliver seamless, effective care.

         Your comfort is our mission, and we are here to answer any questions you may have about your anaesthesia options. Thank you for choosing our hospital for your healthcare needs.`,
            hod: 3,
            numberOfStaff: 10
        },
        {
            name: "Cardiology",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos et esse voluptatem eaque voluptate sequi tempore voluptas accusantium quis quidem odio quas fugit, a quae obcaecati velit voluptatum aut, consequuntur doloribus laborum? Earum, unde molestiae aperiam ut obcaecati quidem quam itaque nihil nostrum rerum excepturi pariatur illo sequi est eos.",
            hod: 6,
            numberOfStaff: 10
        },
        {
            name: "Dental",
            info: "Text",
            hod: 8,
            numberOfStaff: 10
        },
        {
            name: "Neurology",
            info: "Text",
            hod: 2,
            numberOfStaff: 10
        },
    ]

    let [currentDepartment, setCurrentDepartment] = useState(null)

    const departments = departmentsRaw.map(department => {
        return <Department key={department.name} name={department.name} onClick={()=>{
            setCurrentDepartment(department)
        }}/>
    })
    
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
