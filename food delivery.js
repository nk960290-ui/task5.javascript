function orderreceived() {
    console.log("Order Received");
}

function processorder(step1, step2, step3, step4) {
    step1();
    step2();
    step3();
    step4();
}

function preparingfood() {
    console.log("preparing food");
}

function outfordelivery() {
    console.log("out for delivery");
}

function deliverd() {
    console.log("deliverd");
}

processorder(
    orderreceived,
    preparingfood,
    outfordelivery,
    deliverd
)