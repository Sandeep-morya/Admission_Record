let admission=JSON.parse(localStorage.getItem("admission"))||[];
document.querySelector("form").addEventListener("submit",e=>{
    e.preventDefault();
    let student_data={
        name:e.target[0].value,
        email:e.target[1].value,
        number:e.target[2].value,
        gender:e.target[3].value,
        course:e.target[4].value
    }
    admission.push(student_data);
    localStorage.setItem("admission",JSON.stringify(admission));
    alert("Your Application is Sent to the Team")
    window.location.reload();
});
