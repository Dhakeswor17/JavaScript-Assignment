//console.log("Hello world")
// comments
/*document.write("inside the body")
document.write("line 2")*/
//document.write("External Documents");

//ARITHEMETIC OPERATOR 

/*var x = 10;
var y =20;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);

var z = x+y;
console.log(z);

// string
var a = "10";
var b = 'xyz';
var p = x+b;
console.log(p);

//NaN
var S = a-b;
console.log("Result is: "+(S));

//increment and decrement

var x = 10;
var y = x--;
 console.log(x);
 console.log(a ++);
 console.log(++a);

 //Comparison Operator

 /* 
 !==          x!==10
 >
 >
 <=
 >=
 =
 ==
 ===            data type value 
 */

// POP UP 
//alert
//confirm
/*
 alert("click ok");
 confirm("Click confirm to process");
 var z =prompt("enter you  name ");
 console.log(z);

 // add number 
 var num1 = prompt("Enter the first number");
 var num2 = prompt("Enter the second number"); 
 var sum = num1 + num2;
 console.log(sum);
 
 

 //condition
 
 const isOldEnough = age>= 18;
// if (isOldEnough)
const age = 15;
   
  if (age>= 18){
  console.log('Sarah can start driving liscense');
} else
 {
   const yearLeft = 18- age;
   console.log(`Sarah is too young.wait another ${yearLeft} years:)`);
 }

 //const birthYear = 2012;

 //let century;
 //if (birthYear <= 2000); {
   //century = 20;
 //} else { 
  // century = 21;
  //}

  // console.log(century);

  //LOGICAL OPERATOR

  /*const age = 18;
if (age === 18); 
// if strongly exactly than should be use ===
// == is loose exactly equal

 console.log('You just became an adults :D');

const favourite = prompt("what's your favourite number?");
console.log(favourite);
if ( favourite  == 23)
{ console.log ('23 is an amazing numbers!')

}
// for age 16
// A. age is greate or equal  20 false 
//b. age is less than 30.  true


const hasDriverLicense = true;
const hasGoodVision = false;
console.log(hasDriverLicense && hasGoodVision);

console.log(hasDriverLicense||hasGoodVision);
console.log(!hasDriverLicense);
const shouldDrive =  hasDriverLicense && hasGoodVision;
 if(shouldDrive) { 
   console.log('You are able to drive!')
   }
   else{

  console.log( 'Someone else should drive')
   }
  const hasDriveLicense = true;
  const hasGoodVision = true;
  console.log(hasDriveLicense&& hasGoodVision);
  console.log(hasDriveLicense|| hasGoodVision);
  console.log(!hasDriveLicense);

  const isTired = false;
  console.log(hasDriveLicense&& hasGoodVision&&isTired);

  if (hasDriveLicense&& hasGoodVision&&isTired)
  {
    console.log('you can Drive');
  }
  else {
    console.log('someone else should drive');
    */
   
    //SWITCH
    /*
    const day = 'sunday';
 switch(day){
   case 'Monday':
     console.log('Plan for course structure');
     console.log('go for cooding meetup')
     break
     case'tuesday':
     console.log('Go for work');
     break
     case 'Wednesday':
     console.log('write a cood example');
     break
     case'Tuesday':
     case'Friday':
     console.log('record the video');
     break
     case'saturday':
     case'sunday':
     console.log('This is holiday so that you can enjoy your time')
     break
     default:
       console.log('Not a valid days');
 }
 const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');


 //LOOP
 //for loop, while, do-while

 

var loop = prompt("Enter a number")
for (var i = 1; i<=loop; i++){
    console.log(i);
}

//WHILE

let n = prompt("enter a number");
let i = 1;
 while(i<n){
     console.log("Number is " +i);
 }
 for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
 
//do while
let n =2;
let i = 3;
do{
  console.log(i);
}
 while(i<n){
     console.log("Number is " +i);
 }

//FUNCTION
//function display()  {      
  //alert("this is my first Function")

//};
//display();

function multiply(x,y){
  return x*y;
}
var result = multiply(10,20);
console.log(result);
// cLOSER
function fun1(){
  var a  = "hello";
  function fun2(){
    var b = "Dhakeswor";
    console.log(a+" "+b);

  }
  return fun2();

}
fun1();

//local and global variable

//Event Handling
//onmouseover
//onmouseout

//ARREY
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//object


const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');

  //OBJECT
  const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
  */


