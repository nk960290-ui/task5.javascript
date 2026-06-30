function totalBill(price, quantity) {
    return price * quantity;
}

let bill= totalBill(180, 3);
document.write("Burger price : $180 <br>");
document.write("Burger quantity : 3 <br>");
document.write("Total Bill : $" + bill);