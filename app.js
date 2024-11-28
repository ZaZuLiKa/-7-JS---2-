//1. Დაბეჭდეთ რიცხვები 2 დან 8 მდე
for(let i=2;i<8;i++){
    console.log(i);
}
console.log("__________________________")
//2. 5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…)
for(let i=5;i<=35;i+=4){
    console.log(i);
}
console.log("__________________________")
//3. დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი
let ct=1;
for(let i=3;i<8;i++){
    ct*=i;
}
console.log(ct);
console.log("__________________________");
//4. Გამოაცხადეთ ობიექტი person რომელსაც აქვს firstName, lastName, age
// და დაბეჭდეთ person-სრული სახელი ( სახელი და გვარი)

let person={
    firstName:"Zaza",
    lastName:"Shavardenidze",
    Age:29
}
console.log(person.firstName,person.lastName)
console.log("__________________________");
//5. დაბეჭდეთ მეოთხე დავალებაში გამოცხადებული პერსონის თითოეული property value
for (key in person){
    console.log(person[key])
}
console.log("__________________________");
//6. დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"]; დაბეჭდეთ მასივის თითოეული წევრი
let fruits=["Apple", "Banana", "Orange"];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
console.log("__________________________");
//7. დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits
fruits.unshift("Grapes");
fruits.push("Pineapples")
console.log(fruits)
console.log("__________________________");
//8.დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯამი
let Sum=0;
for(let i=1;i<34;i++){
    Sum+=i;
}
console.log(Sum);