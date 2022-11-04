import {Student} from './types/Profile.type'
type personListProps = {
    students: Student[]
}
const PersonList = (props: personListProps) => {
    return <div>
        {
            props.students.map((student, index) => {
                return <div key={index}><div />
                    <h1>Profile</h1>
                    <p>Name : {student.fname} {student.lname}</p>
                    <p>Gender : {student.gender}</p>
                    <p>Age : {student.age}</p>
                </div>
            })
        }

    </div>
}
export default PersonList;