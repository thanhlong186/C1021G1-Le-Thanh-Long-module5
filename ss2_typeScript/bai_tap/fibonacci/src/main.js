var num1 = 0;
var num2 = 1;
var num3 = 0;
var count = 0;
for (var i = 0; i < 10; i++) {
    console.log(num3);
    count += num3;
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
}
console.log("Tổng các số fibonacci là: ", count);
