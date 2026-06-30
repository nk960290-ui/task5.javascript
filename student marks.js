function student(name,...marks) {
    let total =0;

    for(let  mark of marks) {
        total +=mark;
    }

    let average = total / marks.length;

    console.log("student :", name)
    console.log("total marks :", total)
    console.log("average :",average);
}

student("NANDHAKUMAR", 89,78,99,97,89);
 