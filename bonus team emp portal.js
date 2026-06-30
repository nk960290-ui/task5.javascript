let employees = [
    { id: 101, name: "Rahul ram", salary: 25000 },
    { id: 102, name: "varun", salary: 45000 },
    { id: 103, name: "shakthivel", salary: 30000 }
];

employees.push({ id: 104, name: "Naveen", salary: 50000 });
console.log("Add Employee:");
console.log(employees);


console.log("View Employees:");
console.log(employees);

let emp = employees.find(e => e.id === 102);
console.log("Search by ID:");
console.log(emp);

let bonus = 5000;
console.log("Salary + Bonus:");
employees.forEach(e => {
    console.log(e.name + " : " + (e.salary + bonus));
});

employees.splice(2, 1);
console.log("After Remove:");
console.log(employees);

employees.sort((a, b) => a.salary - b.salary);
console.log("Sorted by Salary:");
console.log(employees);

let empName = employees.find(e => e.name === "Naveen");
console.log("Find by Name:");
console.log(empName);

let { id, name, salary } = employees[0];
console.log("Employee Details:");
console.log("ID:", id);
console.log("Name:", name);
console.log("Salary:", salary);





