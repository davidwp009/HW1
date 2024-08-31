//const age = 15;
//console.log(age);
//2

//const userName = 'David';
//console.log(userName);
//3

//const isStudent = true;
//console.log(isStudent);
//4

//const isString = 'hello';
//console.log(isString);
//5

//let myNumber = 10;
//myNumber += 10;
//console.log(myNumber);
//6

//const myNull = null;
//console.log(myNull)
//7

//const name = prompt('Введіть ваше ім*я');
//alert('Вітаємо,' + name + '!');
//8

//const nameUser = confirm('Ви підтверджуєте дію?');
//if(nameUser){
//    alert('дякую за підтвердження!')
//}
//else{
//    alert('дію відмінено')
//}
//9

//alert('Увага дія небезпечна');
//const dangerous = confirm('ви підтверджуєте дію?');
//if(dangerous){
//    alert('дякую за підтвердження!')
//}
//else{
//    alert('Дію відмінено')
//}

//HW2
//1
//const c = 30;
//const f = 1.8 * c + 32;
//console.log(f);

//2
//const days = 30;
//const hours = days * 24;
//const minutes = hours * 60;
//console.log(hours);
//console.log(minutes);

//3
//let h = 100;
//let e = 100;
//h -= 25;
//e -= 30;
//console.log(h);
//console.log(e);

//4
//let price = 100;
//let sum = price - price * 0.1;
// let sum = (price / 100) * 90;
//console.log(sum);

//5
//const n = 3.14;
//console.log(Math.floor(n));

//6
//const v = '5.7441hg11';
//console.log(parseFloat(v));

//7
//const x = '3.1524pppr1';
//console.log(parseInt(x));

//8
//const a = 25;
//console.log(Math.sqrt(a));

//9
// const num = 20;
// const string = '15kj';
// console.log(parseInt(string))
// console.log(num.toString())
// console.log(typeof num.toString())

//HW-3
//1
//const result = 5 + 5 + '5';
//console.log(result); 

//2
//const email = 'davydperepichka2009@gmail.com';
//console.log(email.length);
//console.log(email.includes('@'));

//3
//const word1 = 'My';
//const word2 = 'name';
//const word3 = 'is';
//const fullName = `${word1} ${word2} ${word3} David`;
//console.log(fullName); 

//4
//const userName = 'David';
//const payment = '500';
//alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);


//HW-5
function checkOptions() {
    const select = document.getElementById('drinks')
    const selectedValue = select.options[select.selectedIndex].value;
    if (selectedValue === 'coffee') {
        alert("ви обрали каву")
    } else if (selectedValue === 'tea') {
        alert("ви обрали чай")
    } else if (selectedValue === 'juice') {
        alert ("ви обрали сік")
    }
}

//2
function checkDay() {
     const fieldDay = document.getElementById("text-day").value;
     switch (fieldDay) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thurtday":
        case "Friday":
            alert("робочий день") 
            break;
        case "saturday":
        case "sunday":
            alert ("вихідний день")
            break;
        default:
            alert("неправельно введеня інформація")                       
     }
}
//3
function checkMonth() {
    const fieldMonth = document.getElementById('month').value;
    if((fieldMonth < 3 && fieldMonth > 0) || fieldMonth === 12) {
        alert("winter");
    } else if (fieldMonth > 2 && fieldMonth < 6) {
        alert("spring");
    } else if (fieldMonth > 5 && fieldMonth < 9) {
        alert("summer");
    } else if (fieldMonth > 8 && fieldMonth < 12) {
        alert("autom");
    } else {
        alert("error")
    }
}
//4
function checkDaysInMonth() {
    const fieldMonthDay = document.getElementById('months-days').value;
    if(fieldMonthDay === 2) {
        alert ("28 or 29");
    } else if (
        fieldMonthDay === 1 ||
        fieldMonthDay === 3 ||
        fieldMonthDay === 5 ||
        fieldMonthDay === 7 ||
        fieldMonthDay === 8 ||
        fieldMonthDay === 10 ||
        fieldMonthDay === 12 
    ) {
        alert("31")
    }  else {
        alert("30")
    }
}
//5
function checkColor() {
    const fieldColor = document.getElementById("color").value;
    switch (fieldColor) {
        case 'red':
            alert('stop');
            break;
        case 'yellow':
            alert('weit');
            break;
        case 'green':
            alert('go');
            break
        default:
            alert('введіть колір світлофора')        
    }
}

//HW-6
//1
//let number = 1;
//while (number < 11) {
    //console.log(number);
    //number += 1;
//}
//2
//for (let i = 2; i <=20; i += 1){
//    if (i % 2 !== 0) {
//        continue;
//    }
//   console.log(i);
//}
//3
//for( let i = 1; i <= 10; i += 1){
//   console.log(`7 x ${i} = ${7 * i}`);
//}
//4
//const n = 5;
//for(let i = 0; i < n; i += 1){
//    if(i >= n) {
//       break;
//    }
//    console.log(i)
//}
//5
//let a = 1;
//while (a <= 20) {
//    if( a % 3 === 0) {
//        a += 1;
//        continue;
//    } 
//   console.log(a);
//    a += 1;
//}  

//HW-7
//const arr1 = [1, 2, 3];
//arr1[1] = 10;
//console.log(arr1); 
//2
//const arr2 = ['one', 'two', 'three'];
//arr2[arr2.length] = 'four';
//console.log(arr2);
//3
//const arr3 = [5, 4, 8, 9, 2, 6, 7,];
//let total = 0;
//for (let i = 0; i < arr3.length; i++){
 //   total += arr3[i]
//}
//console.log(total);
//4
//const arr4 = [1, 2, 3, 4, 5];
//for (let i = 0; i <arr4.length; i++){
//    console.log(arr4[i])
//}
//5
//const arr5 = ['hello', 'summer', 'school', 'hi', 'GoITens']
//for (let i = 0; i < arr5.length; i++){
//    if(arr5[i].length < 5) {
//        continue;
//    }
//    console.log(arr5[i]);
//}
//6
//const arr6=[52, 7, 85, 96, 95, 84, 41, 87, 32, 55];
//let max = arr6[0];
//for(let i = 1; i < arr6.length; i++) {
//    if (arr6[i] > max) {
//        max = arr6[i]
//    }
//}
//console.log(max);
//7
//onst arr7=[52, 7, 85, 96, 95, 84, 41, 87, 32, 55];
//for (let i = 0; i < arr7.length; i++){
//    if(arr7[i] % 2 ===0) {
 //       console.log(arr7[i])
 //   }
//}

//HW-8
//1


const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];   
let string = '';  

for (let i = 0; i < friends.length; i++){
    string += friends[i];
    if (i < friends.length - 1) {
        string += ", "
    }
}
console.log(string);