 function* luckyDraw() {
    yield "10% coupon";
    yield "20% coupon";
    yield "50% coupon";
    yield "Better Luck Next time";
 }

 let coupon = luckyDraw();

 console.log(coupon.next().value);
 console.log(coupon.next().value);
 console.log(coupon.next().value);
 console.log(coupon.next().value);
 