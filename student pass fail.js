function checkResult(mark) {
    if (mark >= 35) {
        document.write(mark + " - Pass<br>");
    } else {
        document.write(mark + " - Fail<br>");
    }
}

checkResult(72);
checkResult(20);
