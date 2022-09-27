let array = JSON.parse(localStorage.getItem("admission")) || [];

//although "all" is default selected  but for our sake of understanding we have given it a condition
let filter_data = document.querySelector("#filter");
if (filter_data.value == "all") {
  document.querySelector("tbody").innerHTML = null;
  display_table(array);
}
/*----------------- send_accepted function ------------*/
function send_accepted(i) {
  let val = JSON.parse(localStorage.getItem("admission-accepted")) || [];
  val.push(array[i]); //we will store the selected index in an Array
  localStorage.setItem("admission-accepted", JSON.stringify(val));
  // And now we will remove that index from the main Array
  array.splice(i, 1);
  localStorage.setItem("admission", JSON.stringify(array));
  //updated array has been sent to local storage
}
/*---------------- Same for the send_rejected() -----------------*/
function send_rejected(i) {
  let val = JSON.parse(localStorage.getItem("admission-rejected")) || [];
  val.push(array[i]);
  localStorage.setItem("admission-rejected", JSON.stringify(val));

  array.splice(i, 1);
  localStorage.setItem("admission", JSON.stringify(array));
}
/*---------------- Filter ---------------*/
filter_data.addEventListener("change", (e) => {
  document.querySelector("tbody").innerHTML = null;
  let current_selected = e.target.value;
  // we have stored the value that is curently selected in a varible

  if (current_selected == "all" /* || current_selected == ""*/) {
    display_table(array);
  } else {
    let filtered = array.filter((el) => el.course == current_selected);
    //filter() will return an array according to the given condtion
    //we will use that array to create table
    display_table(filtered);
  }
});

/*------- ⬇️ Function, that creates table (According to Any Array of Objects) is made here ⬇️------*/
function display_table(array) {
  array.forEach((e, i) => {
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

    let accept = document.createElement("td");
    accept.innerText = "Accept";
    accept.style.backgroundColor = "green";
    accept.style.color = "white";
    accept.addEventListener("click", (e) => {
      send_accepted(i);
      e.target.parentNode.remove();
    });

    let reject = document.createElement("td");
    reject.innerText = "Reject";
    reject.style.backgroundColor = "red";
    reject.style.color = "white";
    reject.addEventListener("click", (e) => {
      send_rejected(i);
      e.target.parentNode.remove();
    });

    tr.append(name, email, course, gender, number, accept, reject);
    document.querySelector("tbody").append(tr);
  });
}
