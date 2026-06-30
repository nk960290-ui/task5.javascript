const employeepersonal = {
    name: "nandhakumar",
    age: 27
};

const employeeoffice ={
    department: "development",
    salary:50000
};

const employeeDeatails = {
    ...employeepersonal,
    ...employeeoffice
};

console.log(employeeDeatails);