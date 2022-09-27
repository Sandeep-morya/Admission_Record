let array = JSON.parse(localStorage.getItem("admission-rejected")) || [];
/*------Creating Table According to the Array of Objects-----*/
array.forEach((e) => {
  let tr = document.createElement("tr");

  let name = document.createElement("td");
  name.innerText = e.name;

  let email = document.createElement("td");
  email.innerText = e.email;

  let course = document.createElement("td");
  course.innerText = e.course;

  let gender = document.createElement("td");
  gender.innerText = e.gender;

  let number = document.createElement("td");
  number.innerText = e.number;

  tr.append(name, email, course, gender, number);
  document.querySelector("tbody").append(tr);
});
