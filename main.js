let cat = new Cat("Jerry", 20, 10, true, "moewmoew");
let mouse = new Mouse("Tom", 10, 15, true, "chitchit");

console.log(cat);
console.log(mouse);

if (!cat.catch()) {
    console.log("Mèo bắt được chuột")
}
console.log("Mèo ăn chuột")
cat.eat();
console.log(cat);
console.log(mouse);
console.log("Mèo đã ăn xong")


