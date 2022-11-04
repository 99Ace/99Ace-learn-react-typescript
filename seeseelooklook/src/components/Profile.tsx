type personDetail = {
    student: {
        fname: string,
        lname: string,
        age: number,
        gender: string
    }
}
const Person = (props: personDetail) => {
    return <>
        <h1>Profile</h1>
        <p>Name : {props.student.fname} {props.student.lname}</p>
        <p>Gender : {props.student.gender}</p>
        <p>Age : {props.student.age}</p>
    </>
}
export default Person;