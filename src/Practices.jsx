
export const Practices =()=>{
    let student = [1];
    return (
        <>
        <p>{!student.length && "No student found"}</p>
        <p>Number of Student :{student.length}</p>
        </>
    )
}