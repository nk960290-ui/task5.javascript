function bouns (salary) {
    return function(bounusAmount){
        console.log("Total Salary :" + (salary+ bounusAmount))
    };
}
 bouns(50000)(5000);