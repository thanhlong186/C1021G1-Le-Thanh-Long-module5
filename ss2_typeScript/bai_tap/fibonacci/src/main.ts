// let num1: number = 0;
// let num2: number =  1;
// let num3: number=0;
// let count = 0;
// for (let i = 0; i < 10; i++) {
//         console.log(num3);
//         count += num3;
//         num3 = num1 + num2;
//         num1 = num2;
//         num2 = num3;
// }
// console.log("Tổng các số fibonacci là: ", count)

function fibonacci (value: number): number {
        if (value == 0 || value == 1) {
                return value;
        }
                return fibonacci(value - 1) + fibonacci(value - 2);
}
for (let i = 0; i < 5; i++) {
        console.log(fibonacci(i));
}





