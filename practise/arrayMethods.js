// // We can not return inside in foreach method
// const fruits = ['apple','Banana','Orange'];

// // for (let i = 0; i < fruits.length; i++) {
// //     console.log(fruits[i]);
    
// // }
// fruits.forEach((item) => console.log(item));

// fruits.forEach((item) => {
//     console.log(item)
// })
// // ==============================================
// // We use map method for returning

// const fruits2 = fruits.map((item) => {
//     console.log(item);
//     return item
// })
// console.log(fruits2);
// //  ===========================================

// // concat
// const array1 = ['a','b','c'];
// const array2 = ['d','e','f']
// const array3 = ['x','y','z']

// const allArray = array1.concat(array2)
// const allArray2 = array1.concat(array2, array3)

// console.log(allArray);
// console.log(allArray2);
// // ===============================================

// const countries = ['Nigeria', 'Ghana', 'Rawanda'];

// countries.push("Kenya");
// console.log(countries);

// countries.pop();
// console.log(countries);
// // ===================================================
// //  First element elemenate by shift 
// const array4 = [1,2,3]
// const firstElement = array4.shift()
// console.log(array4);

// // Add element in first
// console.log(firstElement);
// array4.unshift(2)
// console.log(array4);
// // ========================================================
// Splice add element in mid

// const fruitSplice = ['Apple','Banana','Orange','Mango'];
// fruitSplice.splice(2,0,'Lemon','Kiwi ')
// console.log(fruitSplice);
// // OR
// const fruitSplice1 = ['Apple','Banana','Orange','Mango'];
// const deletedArray = fruitSplice1.splice(2,1,'Lemon','Kiwi ')
// console.log(deletedArray);

//  slice return array

// const fruitSlice = ['apple','Banana','Orange','Mango'];
// const result = fruitSlice.slice(1,2)
// console.log(result);
// // =======================================

// // Join the element in array
// const fruitJoin = ['apple','Banana','Orange','Mango'];
// const result1 = fruitJoin.join(" ")
// console.log(result1);

// // ========================================
// //  every will see acc to func then return t/f
// const arrayEvery = [1,30,39,52,45,26,23];
// console.log(arrayEvery.every((currentValue) => currentValue < 40));
// console.log(arrayEvery.every((currentValue) => currentValue < 60));

// const arrayEvr = [2,32,19,48,22,49];

// console.log(arrayEvr.every((currentValue) => currentValue < 50));

// //===========================================
// // It will filter your element and return in array
// const words = ['spray','limit','elite','exuberant','destruction','limit']
// const result2 = words.filter(word => word === "limit")
// console.log(result2);

// const sk = ['aaa','vvv','aaa','bbb'];
// const rst = sk.filter(wo => wo === 'aaa');
// console.log(rst);
// const result3 = words.filter(word => word.length > 6)
// console.log(result3);
// const yourArray = ['pen','book','key','pen','chain'];
// const resultArray = yourArray.filter(word => word ==='pen')
// console.log(resultArray);
// // =============================================

// const fruitIndexOf = ['Apple','Banana','Orange','Mango','Apple'];
// const index = fruitIndexOf.indexOf("Orange");
// console.log(index);

// const lastIndex = fruitIndexOf.lastIndexOf("Apple")
// console.log(lastIndex);
// // ================================================

// const array11 =[1,2,3,4]
// let tempNum = 0

// array11.forEach((num) => {
//     tempNum += num
// })
// console.log(tempNum);

// const addNum = [1,2,3,4];
// let tempNum = 1

// addNum.forEach((num) => {
//     tempNum *= num
// })
// console.log(tempNum);

// const arr = [1,2,3,4];
// let temp = 0;

// arr.forEach((num)=> {
//     temp += num
// })
// console.log(temp);

// // ==================================================

// const array12 = [1,2,"3",4];

// const initialValue = 0;

// const sumWithInitial = array12.reduce((prev, curr) => prev + curr, 0)

// console.log(sumWithInitial);
// // =========================================================
// const arrayReverse = ['one','two','three']
// const resultR = arrayReverse.reverse();
// const resultRR = arrayReverse.slice().reverse();
// console.log('Orignal:', resultRR);
// console.log('arrayReverse:', resultR);
// // =====================================================

// const arraySort = [1,30,4,21,100000];
// const arrS = arraySort.sort();
// console.log(arrS);

// arraySort.sort((x,y) => x-y);
// console.log(arraySort);

// const arraySortOut = [1,30,4,21,100000];
// const test = arraySortOut.toString();

// console.log(test);
// console.log(typeof(test));
// ======================================================
// const arrayAt = [1,2,3,4,5,8]
// console.log(arrayAt.at(2));
// console.log(arrayAt.at(-1));

// =========================================

// const arrayFind = [5,12,10,8,130,44,2];
// const foundArray = arrayFind.filter(element => element > 10)
// console.log(foundArray);
// const found = arrayFind.find(element => element > 10);
// console.log(found);
// ======================================================

const arraySome = [5,12,10,8,130,44,2];

const foundSome = arraySome.some(element => element > 10);
console.log(foundSome);