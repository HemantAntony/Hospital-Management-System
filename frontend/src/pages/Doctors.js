import {React, useState} from "react"
import Doctor from "../components/Doctor"
import "../styles/Doctors.css"

export default function Doctors() {
    const doctorsRaw = [
        {
            id: 1,
            name: "John Smith",
            dept: "Surgery",
            summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore eaque. Totam, distinctio. Aliquid blanditiis error aliquam temporibus, natus quas commodi culpa. Dolor minima consectetur laboriosam fugit autem fuga similique harum sit tempore porro nulla temporibus corporis fugiat suscipit, repudiandae quidem officiis unde nemo est dignissimos, itaque quam at quae?",
            qualifications: [
                ["BS", "Harvard"],
                ["MD", "Harvard"],
                ["Residency", "Unv Hospital"]
            ]
        },
        {
            id: 2,
            name: "John Smith",
            dept: "Surgery",
            summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore eaque. Totam, distinctio. Aliquid blanditiis error aliquam temporibus, natus quas commodi culpa. Dolor minima consectetur laboriosam fugit autem fuga similique harum sit tempore porro nulla temporibus corporis fugiat suscipit, repudiandae quidem officiis unde nemo est dignissimos, itaque quam at quae?",
            qualifications: [
                ["BS", "Harvard"],
                ["MD", "Harvard"],
                ["Residency", "Unv Hospital"]
            ]
        },
        {
            id: 3,
            name: "John Smith",
            dept: "Surgery",
            summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore eaque. Totam, distinctio. Aliquid blanditiis error aliquam temporibus, natus quas commodi culpa. Dolor minima consectetur laboriosam fugit autem fuga similique harum sit tempore porro nulla temporibus corporis fugiat suscipit, repudiandae quidem officiis unde nemo est dignissimos, itaque quam at quae?",
            qualifications: [
                ["BS", "Harvard"],
                ["MD", "Harvard"],
                ["Residency", "Unv Hospital"]
            ]
        },
    ]
    
    const doctors = doctorsRaw.map(doctor => <Doctor name={doctor.name} dept={doctor.dept} onClick={()=>setCurrentDoctor(doctor)}/>)    

    let [currentDoctor, setCurrentDoctor] = useState(null)
    
    return (
        <div className="doctors">
            <div className="doctors--grid">
            {doctors}
            </div>
            {/* {(currentDoctor !== null) && } */}
        </div>
    )
}
