// // let userName = "Shakir";

// // console.log("Thanks, " + userName + "!");

// // let t1 = 'Sha';
// // let t2 = 'kir';

// // let ft = t1.concat(t2);
// // console.log(ft);

// // // let age = prompt("What's your name?")
// // // console.log(typeof age);
// // // console.log(Number(age));

// // // let tellMeYourName = prompt("What's your name?")
// // // console.log(tellMeYourName);

// // // let x = prompt("Where do you live?")
// // // let correctAnswer = "pakistan"

// // // if (x == correctAnswer){
// // //     console.log("Correct Answer");
// // // } else {
// // //     console.log("Wrong Answer");
// // // }

// // let name1 = 'shakir'

// // if (name1 == 'shakir') {
// //     console.log("Remove this person");
// // }

// // let learning = "coding"

// // if (learning == "coding") {
// //     console.log("I love coding");
// // } else {
// //     console.log("Please teach me.");
// // }

// // let x = prompt("Where do you live?");
// // let correctAnswer = "Pakistan";

// // if (x == correctAnswer) {
// //     console.log("Correct Answer");
// // } else if (x == "Pakistan") {
// //     console.log("Close");
// // } else {
// //     console.log("Wrong Answer");
// // }

// // //  Ticket Application

// // let country = prompt("Where do you live?")
// // let age = Number(prompt("What's your age?"))

// // if (country.toLowerCase() === "pakistan") {
// //     if (age >= 18) {
// //         console.log("Here is your ticket");
// //     } else {
// //         console.log("Age restriction");
// //     }
// // } else {
// //     console.log("Invalid country");
// // }

// let fruits = []

// fruits.push("Mango");
// console.log(fruits);

// let fruits1 = ['Banana', 'Mango', 'Orange'];

// fruits1.pop();
// console.log(fruits1);

// let allFruits = fruits1.pop();
// console.log(allFruits);

// fruits1.shift();
// console.log(fruits1);

// let fruitsShift = fruits1.shift()
// console.log(fruitsShift);

// fruits1.unshift("graps");
// console.log(fruits1);

// let fruits1Unshift = fruits1.unshift();
// console.log(fruits1Unshift);


// const myFruits = ["Mango", "Orange", "Banana", "Apple"]
// myFruits.splice(2,0,"Kiwi")
// console.log(myFruits);

// myFruits.splice(1,2,"Kiwi")
// console.log(myFruits);
// //                       slice(start.end)
// const mySlice = myFruits.slice(1,3);
// console.log(myFruits); 
// console.log(mySlice);

// const aRray = ['a','b','c','d','e']
// console.log(aRray.slice(1,3));

// // ============xxx==================

// const person =[
//     {
//     firstName : "Sajid",
//     lastName : "Ali",
//     age : 29,
//     "eye-color": "Blackish"
//     },
//     {
//         firstName : "Noushad",
//         lastName : "Ali",
//         age : 25,
//         "eye-color": "Blueish"
//     },
//     {
//         firstName : "Asif",
//         lastName : "Ali",
//         age : 28,
//         "eye-color": "pinkish"
//     },
//     {
//         firstName : "Shakir",
//         lastName : "Ali",
//         age : 31,
//         "eye-color": "Greenish"
//     },

//     ];

// console.log(person[0]);
// console.log(person[1]);
// console.log(person[2]);
// console.log(person[3]);
// // console.log(person["eye-color"]);
// // console.log(person.age);


// // ===========xxx===========

// let cleanestCities = ["Karachi","Lahore","Islamabad","Peshawar"]
// cleanestCities[0]

// for (let i = 0; i <=3 ; i++) {
//     console.log(cleanestCities[i]); //Print 1 by 1
//     // console.log(cleanestCities); //Prints all
// }
// // ============xxx==========

// let cleanestCities1 = ["Karachi","Lahore","Islamabad","Peshawar"]

// let matchFound = "no";

// for (let i = 0; i <=3 ; i++) {
//     if ("Islamabad" === cleanestCities1[i]){
//         matchFound = "yes";
//         console.log("It's One of the cleanest citi");
//     }
// };


// if (matchFound === "no") {
//     alert("It's not on the list")
// }

// let cityToChar = "pakistan"
// let firstChar = cityToChar.slice(0,1).toUpperCase();
// console.log(firstChar);

// let cityToChar1 = "pakistan"
// let firstChar1 = cityToChar1.slice(-1);
// console.log(firstChar1);
// // ==================

// let month = prompt("Enter a month");

// let charsInMonth = month.length;

// if (charsInMonth > 3) {
//     let monthAbbrev = month.slice(0.3);
//     console.log(monthAbbrev);
// }

// // ============

// var textt = "To be or not to be."
// var segIndex = textt.indexOf("be");
// var segIndex = textt.lastIndexOf("be");
// console.log(segIndex);
// // ===========

// var text1 = "my name is Shakir";

// var segIndex = text1.toLowerCase().lastIndexOf("shakir");

// console.log(segIndex);
// // ========

// let textReplace = "Visit Microsoft!";

// let result = text.replace("Microsoft", "W3School")
// console.log(result);
// // ========

// let textBlue = "Mr Blue has a blue house and a blue car";
// let resultBlue = textBlue.replace("blue","red");
// let resultBlue1 = textBlue.replace(/blue/, "red")
// console.log(resultBlue);
// console.log(resultBlue1);
// // =============
// let total = 25.154123

// let prettyTotal = total.toFixed(2);
// // let prettyTotal = total.toFixed(10)
// console.log(prettyTotal);
// // ===========

// const date = new Date();

// console.log(date);

// const date1 = new Date("2000", 11,3)
// console.log(date1);
// ==============

// function showGreetingMessage(){
//     console.log("Shakir, Welcome to our Website");
// }
 
// showGreetingMessage();

function showGreetingMessage(name="Hello"){
    console.log(`${name}, Welcome to our Website`);
}

// const showGreetingMessage = () => `${Name}, Welcome to our website`

showGreetingMessage(); 
showGreetingMessage("Shakir");
showGreetingMessage("Ali")

// function showGreetingMessage(name){
//     return `${name}, Welcome to our Website`;
// }
// //  Invoking a Function
// let message = showGreetingMessage("Shakir");
// console.log(message);

function addTwoNumber(x,y) {
    let result = x + y
    return result
}

let result2 = addTwoNumber(100,200)

if (result2 > 100) {
    console.log("Big Number");
}

// ============

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return(this.firstName + " " + this.lastName);
    }
};
console.log(person.fullName());
// ==============

const numbersOne = [1,2,3];
const numbersTwo = [4,5,6];

console.log(...numbersOne);

const numbersCombined = [...numbersOne, ...numbersTwo];

console.log(numbersCombined);
// =====================
const addUnlimitedNumber = (...numbers) => {
    let result = 0
    for (let i = 0; i < numbers.length; i++) {
    result = result + numbers[i];
    // result += numbers[i]
    }
    return result
}

const finelResult = addUnlimitedNumber(0, 2, 3, 45, 15, 16, 18)

console.log(finelResult);




