console.log(window.innerHeight);

// var, let, const
const a = 5;
//const khai báo biến không thay đổi được
let b = 10;
//let khai báo biến thay đổi được 
//scope tuyf thuoojc vaof nowi nos ddc khai baos
b=2;
//console.log(b);

//console.log(c);
var c = 10;
//khai báo biến kiểu global

// const firstObject = {
//     name: 'Nguyen Thanh Minh',
//     age: 22,
//     favoriteFoods:['fish', 'donut'],
// };
// console.log(firstObject.name);

//firstObject.name = 'new name';
//console.log(firstObject);

//Array
const firstArray = [1,2,3,4,5,6];
console.log(firstArray.length);
console.log(firstArray[0]);

//Function
function firstFunction (number1, number2){
    console.log(number1 + number2);
};

firstFunction(5,11);

const secondFunction = (number1, number) => {
    console.log((number1 + number2) * 10/100);
};

const firstObject = {
    name: 'Nguyen Thanh Minh',
    age: 22,
    favoriteFoods:['fish', 'donut'],
    dob: (number1, number2) => {
        console.log((number1 + number2) * 10/100);
    },
};

console.log(firstObject.dob);
firstObject.dob(5,11);

console.log('this is a string'.length);
console.log(3.3333333333.toFixed(2));
console.log(Number('5'));
console.log(Boolean('5'));

//Kiểm tra kiểu dữ liệu
console.log(typeof 'sdfdsf');

//falsy value: undifided, null, 0,''

//truly value: 'hsjs', 2312, -21219, {},[];

//Date
const firstDate = new Date('11/1/2019');
console.log(firstDate.getDate());
console.log(firstDate.getMonth());

//Regex
const firstRegex = /add/;
firstRegex.test('addsadsa');
console.log(firstRegex.test('addsadsa'));

//error
console.log(new Error());

//callback
setTimeout(() => {
    console.log('after 5 seconds');
}, 5000);

//bất đồng bộ trên javascript 1 2 after 2 seconds
console.log(1);
setTimeout(() => {
    console.log('after 2 seconds');
}, 2000);
console.log(2);

//vòng lặp
const  myArray = [1,2,3,4,5];
for(const item of myArray){
    console.log(item);
}

myArray.forEach((item) =>{
    console.log(item);
});

