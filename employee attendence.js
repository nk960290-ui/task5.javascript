let employeeName = prompt("Enter Employee Name");
let attendance = prompt("Enter Attendance (Present/Absent)");

let result = attendance == "Present" ? "Present" : "Absent";

console.log("Welcome " + employeeName);
console.log("Attendance: " + result);