let userName: string = "Romain";
let userAge: number = 24;
let isLogin: boolean = true;
let userNames: string[] = [];

userNames.push(userName);
console.log(userNames);

let person: object;
person = {
    firstName: "Dupont",
    age: 20,
    isLoggedIn: true,
};
// console.log(person.age);

let person1: {
    firstName: string,
    age: number,
    isLoggedIn: boolean
} = {
    firstName: "Dupont",
    age: 20,
    isLoggedIn: true,
};
console.log(person1.age);

let person2 = {
    firstName: "Dupont",
    age: 20,
    isLoggedIn: true,
};
console.log(person2.age);

let infos: [string, number] = ["Romain", 24];
