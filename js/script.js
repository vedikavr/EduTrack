function registerUser(){

let username =
document.getElementById(
"username"
).value.trim();

let email =
document.getElementById(
"email"
).value.trim();

let password =
document.getElementById(
"password"
).value.trim();

if(
username === "" ||
email === "" ||
password === ""
){

alert(
"Please fill all fields"
);

return;
}

localStorage.setItem(
"username",
username
);

localStorage.setItem(
"userEmail",
email
);

localStorage.setItem(
"userPassword",
password
);

alert(
"Registration Successful!"
);

window.location.href =
"login.html";
}

function loginUser(){

let email =
document.getElementById(
"email"
).value.trim();

let password =
document.getElementById(
"password"
).value.trim();

let savedEmail =
localStorage.getItem(
"userEmail"
);

let savedPassword =
localStorage.getItem(
"userPassword"
);

if(
email === savedEmail &&
password === savedPassword
){

window.location.href =
"dashboard.html";

}
else{

alert(
"Invalid Email or Password"
);

}
}

function togglePassword(){

let passwordField =
document.getElementById(
"password"
);

if(
passwordField.type ===
"password"
){

passwordField.type =
"text";

}
else{

passwordField.type =
"password";

}
}

function logoutUser(){

window.location.href =
"login.html";
}

function calculateAttendance(){

let attended =
parseInt(
document.getElementById(
"attended"
).value
);

let total =
parseInt(
document.getElementById(
"total"
).value
);

if(
isNaN(attended) ||
isNaN(total) ||
total <= 0
){

alert(
"Enter valid numbers"
);

return;
}

let percentage =
(attended / total) * 100;

document.getElementById(
"attendanceResult"
).innerHTML =
"Attendance: " +
percentage.toFixed(2) +
"%";

}
function saveAttendance(){

let subject =
document.getElementById(
"subject"
).value;

let attended =
document.getElementById(
"attended"
).value;

let total =
document.getElementById(
"total"
).value;

if(
subject === "" ||
attended === "" ||
total === ""
){
alert("Fill all fields");
return;
}

let percentage =
((attended/total)*100)
.toFixed(2);

let attendanceData =
JSON.parse(
localStorage.getItem(
"attendanceData"
)
) || [];

attendanceData.push({

subject,
attended,
total,
percentage

});

localStorage.setItem(
"attendanceData",
JSON.stringify(
attendanceData
)
);

location.reload();
}

function displayAttendance(){

let attendanceData =
JSON.parse(
localStorage.getItem(
"attendanceData"
)
) || [];

let tbody =
document.querySelector(
"#attendanceTable tbody"
);

if(!tbody) return;

tbody.innerHTML = "";

attendanceData.forEach(item => {

tbody.innerHTML += `

<tr>

<td>${item.subject}</td>

<td>${item.attended}</td>

<td>${item.total}</td>

<td>${item.percentage}%</td>

</tr>

`;

});

}
function saveMarks(){

let subject =
document.getElementById("subject").value;

let internal =
parseInt(
document.getElementById("internal").value
);

let external =
parseInt(
document.getElementById("external").value
);

if(
subject === "" ||
isNaN(internal) ||
isNaN(external)
){
alert("Fill all fields");
return;
}

let total =
internal + external;

let percentage =
(total / 200) * 100;

let grade = "D";

if(percentage >= 90){
grade = "A+";
}
else if(percentage >= 80){
grade = "A";
}
else if(percentage >= 70){
grade = "B";
}
else if(percentage >= 60){
grade = "C";
}

let marksData =
JSON.parse(
localStorage.getItem("marksData")
) || [];

marksData.push({

subject,
internal,
external,
total,
percentage:
percentage.toFixed(2),
grade

});

localStorage.setItem(
"marksData",
JSON.stringify(marksData)
);

location.reload();

}

function displayMarks(){

let marksData =
JSON.parse(
localStorage.getItem("marksData")
) || [];

let tbody =
document.querySelector(
"#marksTable tbody"
);

if(!tbody) return;

tbody.innerHTML = "";

marksData.forEach(item=>{

tbody.innerHTML += `

<tr>

<td>${item.subject}</td>
<td>${item.internal}</td>
<td>${item.external}</td>
<td>${item.total}</td>
<td>${item.percentage}%</td>
<td>${item.grade}</td>

</tr>

`;

});

}
function calculateCGPA(){

let semesters = [];

for(let i=1;i<=6;i++){

let value =
parseFloat(
document.getElementById(
"sem"+i
).value
);

if(!isNaN(value)){
semesters.push(value);
}

}

if(semesters.length===0){

alert(
"Enter at least one SGPA"
);

return;
}

let total = 0;

semesters.forEach(item=>{

total += item;

});

let cgpa =
total / semesters.length;

document.getElementById(
"cgpaResult"
).innerHTML =
"CGPA: " +
cgpa.toFixed(2);

}
function addTask(){

let task =
document.getElementById(
"task"
).value.trim();

if(task === ""){

alert(
"Enter assignment"
);

return;
}

let tasks =
JSON.parse(
localStorage.getItem(
"tasks"
)
) || [];

tasks.push(task);

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

document.getElementById(
"task"
).value = "";

displayTasks();

}

function displayTasks(){

let list =
document.getElementById(
"taskList"
);

if(!list) return;

list.innerHTML = "";

let tasks =
JSON.parse(
localStorage.getItem(
"tasks"
)
) || [];

tasks.forEach((task,index)=>{

list.innerHTML += `

<li>

${task}

<button
onclick="deleteTask(${index})">

Delete

</button>

</li>

`;

});

}

function deleteTask(index){

let tasks =
JSON.parse(
localStorage.getItem(
"tasks"
)
) || [];

tasks.splice(index,1);

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

displayTasks();

}
function saveProfile(){

let name =
document.getElementById(
"studentName"
).value;

let usn =
document.getElementById(
"usn"
).value;

let department =
document.getElementById(
"department"
).value;

let semester =
document.getElementById(
"semester"
).value;

if(
name === "" ||
usn === "" ||
department === "" ||
semester === ""
){

alert(
"Fill all fields"
);

return;
}

localStorage.setItem(
"profileName",
name
);

localStorage.setItem(
"profileUSN",
usn
);

localStorage.setItem(
"profileDepartment",
department
);

localStorage.setItem(
"profileSemester",
semester
);

alert(
"Profile Saved"
);

displayProfile();

}

function displayProfile(){

let name =
localStorage.getItem(
"profileName"
);

let usn =
localStorage.getItem(
"profileUSN"
);

let department =
localStorage.getItem(
"profileDepartment"
);

let semester =
localStorage.getItem(
"profileSemester"
);

if(
document.getElementById(
"displayName"
)
){

document.getElementById(
"displayName"
).innerHTML =
name || "-";

document.getElementById(
"displayUSN"
).innerHTML =
usn || "-";

document.getElementById(
"displayDepartment"
).innerHTML =
department || "-";

document.getElementById(
"displaySemester"
).innerHTML =
semester || "-";

}

}