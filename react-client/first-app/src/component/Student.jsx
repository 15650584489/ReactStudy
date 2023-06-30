import React from "react";
export default function Student(){
    const studentData = [
        {
            id:'001',
            name:'张三',
            age:18
        }
    ]
    return(
        <ul>
            {studentData.map(student => {
                return (
                    <li key={student.id}>{student.name}</li>
                )
            })}
        </ul>
    )
}