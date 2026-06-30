function yearlySalary(monthlySalary) {
    return monthlySalary * 12;
}

let salary = yearlySalary(45000);
document.writeln("Yearly Salary : $" + salary);