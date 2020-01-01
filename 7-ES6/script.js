////////////////////////////////////////
// let and const

/*
// in ES5
var firstName5 = "elly";
var age5 = 20;
firstName = "hlly";
console.log(firstName5, age5);

// in ES6

const firstName6 = "elly";
let age6 = 20;
//firstName6 = "hlly";    // firstname of a person never changes
console.log(firstName6, age6);
*/

// in ES5 (funtion scope)
/*
function alive5(situation) {
    
    if(situation) {
        var firstName = 'ash';
        var yearOfBirth = 1990;
    }
    console.log("thank god " + firstName + " that are alive, since " + yearOfBirth);
}

alive5(true);

// in ES6 (block scope)
function alive6(situation) {
    
    const firstName = 'ash';
    let yearOfBirth = 1990;
    if(situation) {
        console.log("thank god " + firstName + " that are alive, since " + yearOfBirth);
    }
    
}

alive6(true);
*/

//example 

/*
// in ES5
var i = 20;

for(var i = 0; i < 5; i++) console.log(i);

console.log(i);

//ES6
let i = 20;

for(let i = 0; i < 5; i++) console.log(i);

console.log(i);
*/


/////////////////////////////////////////
// Blocks and IIFE (both are used for data privacy)

// ES6  Block
/* 
{
    let a = 1;
    const b = 2;
    var c = 3;
}

//console.log(a + b);
console.log(c);

// ES5 IIFE(using for data privacy)

(function() {
    var d = 3;
});

console.log(d);
*/


////////////////////////////////////////////
// Strings ES6   (`) is called a backtick/backquote

/*
let firstName = `ash`;
let lastName = 'wilder';
const yearOfBirth = 1998;
function calcAge(year) {
    return (2019 - year);
}

console.log(`i'm ${firstName} ${lastName} , i'm ${calcAge(yearOfBirth)} years old.`);

// new functions

let n = `${firstName}`;

console.log(n.startsWith(`a`));
console.log(n.endsWith(`ash`));
console.log(`${firstName} `.repeat(5));
*/

////////////////////////////////////////////
// Arrow function - 1
/*

// ES5

var yrs = [1990,1995,1978,1998];
var ages5 = yrs.map(function(el) {
    return 2019 - el;
});

console.log(ages5);

// ES6

//form 1
let ages = yrs.map(el => 2019 - el);
console.log(ages);

//form 2
ages = yrs.map((el, index) => `age at element ${index + 1}: ${2019 - el}`);
console.log(ages);

//form 3 (when mutltiple statement a written, we need explicit return and statementd must be in {})
ages = yrs.map((el, index) => {
    const year = new Date().getFullYear();
    let age = year - el;
    return  `age at element ${index + 1}: ${age}`;
})
console.log(ages);

// when no argument are then simply use ()=>
ages = yrs.map(() => `no arguments example.ages`);
console.log(ages);
*/


////////////////////////////////////////////
// Arrow fuction - 2 (arrow fun refer to the this of surrounding object irrespective of being a fuction or method)

/*
// ES5

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = "the box number " + self.position +" in the list, having  the " + self.color +" color.";
            alert(str);
        })
    }
}
box5.clickMe();

// ES6

let box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = "the box number " + this.position +" in the list, having the " + this.color +" color.";
            alert(str);
        });
    }
}
box6.clickMe();

let box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        var self = this;
        document.querySelector('.green').addEventListener('click', () => {
            var str = "the box number " + self.position +" in the list, having the " + self.color +" color.";
            alert(str);
        });
    }
}
box66.clickMe();

*/
// -Example
/*
function Person(name) {
    this.name = name;
}
// ES5 

Person.prototype.myFriends5 = function(friends) {
    var arr;
    
    arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    
    console.log(arr);
};

new Person('ladav').myFriends5(['ash', 'tru', 'noob']);


 // ES6

Person.prototype.myFriends5 = function(friends) {
    let arr;
    
    arr = friends.map( el => { return `${this.name} is friends with ${el}`; });
    
    console.log(arr);
};

new Person('ladav').myFriends5(['ash', 'tru', 'noob']);
*/


////////////////////////////////////////////
// Destructuring
////////////////////////////////////////////

/*
// ES5
var arr = ['dav', 29];
var name = arr[0];
var age = arr[1];

// ES6

// for array
let [name6, age6] = ['dav', 29];
console.log(name6);
console.log(age6);

// for objects (names should match)
let obj = {
    firstName: 'la',
    lastName: 'dav'
}
const {firstName, lastName} = obj; 
console.log(firstName);
console.log(lastName);

// for objects (if we want different names)
const {firstName: a, lastName: b} = obj;
console.log(a,b);

// Example

function calcAgeRetirement(yearOfBirth) {
    const age = new Date().getFullYear() - yearOfBirth;
    return [age, 60 - age];
}

const [age66, retirement] = calcAgeRetirement(1998);
console.log(`age is ${age66} and ${retirement} year's left for retirement.`);
*/

////////////////////////////////////////////
// Array - from method to convert from list to arr
////////////////////////////////////////////

/*
var boxes;
boxes = document.querySelectorAll('.boxes');

// ES5

var boxesArr = Array.prototype.slice.call(boxes);
boxesArr.forEach(function(cur) {
    cur.style.background = 'dodgerblue';
});

// ES6

const boxesArr = Array.from(boxes);
boxesArr.forEach(cur => cur.style.backgroundColor = 'dodgerblue' );
// or
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue' );
*/

/*** loops-we can't use break and continue in forEach and map in ES5***/

////////////////////////////////////////////
// for-of  Loop
////////////////////////////////////////////
/*
// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
for(var i = 0; i < 3; i++) {
    
    if(boxesArr5[i].className === "boxes blue") { continue; }
    boxesArr5[i].style.background = 'dodgerblue';
    boxesArr5[i].textContent = "i'm blue now.";
}
    
// ES6

let boxesArr6 = Array.from(boxes);

for(const cur of boxesArr6) {
    if(cur.className.includes("blue")) { continue; }
// or  if(cur.className.include() === 'boxes blue') { continue; }
    cur.style.background = 'dodgerblue';
    cur.textContent = "i'm blue now.";
}
*/

////////////////////////////////////////////
// 2 new useful Array methods in ES6(findIndex, find)
////////////////////////////////////////////
/*
// ES5

var ages = [12, 15, 17, 10, 20, 9];
var full = ages.map(function(cur) {
    return cur >= 18;
});

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6

const ages = [12, 15, 17, 10, 20, 9, 25]; // 20 and 25 both are greater than 18
console.log(ages.findIndex(cur => cur >= 18));  // output- 4
console.log(ages.find(cur => cur >= 18));        // output- 20
*/



////////////////////////////////////////////
// Spread operator (...)
////////////////////////////////////////////
/*
function addFourAges(a, b, c, d) {
    return(a + b + c + d);
}

var sum = addFourAges(18, 30, 12, 21);
console.log(sum);

// ES5
var ages5 = [18, 30, 12, 21];
var sum1 = addFourAges.apply(null, ages5);
console.log(sum1);

// ES6
let ages6 = [18, 30, 12, 21];
const sum2 = addFourAges(...ages6);
console.log(sum2);

// Examples with Array

let familySmith = ["jane", "mike", "billy"];
let familyMiller = ["betty", "ronny", "jughead"];
let familyAll = [...familySmith, "lily", ...familyMiller];
console.log(familyAll);

// Example with list

let h1 = document.querySelector('h1');
let boxes = document.querySelectorAll('.boxes');

let all = [h1, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/

////////////////////////////////////////////
// Rest Parameters (...)
////////////////////////////////////////////
/*
// ES5
function isFullAge() {
    //console.log(arguments);
    
    var arrArgs = Array.prototype.slice.call(arguments);
    arrArgs.forEach(function(cur) {
        console.log((2019 - cur) > 18);
    })
}

isFullAge(2006, 1998, 1988, 1999);
isFullAge(2006, 1998, 1988, 1999, 2009, 2005, 1967);

// ES6
function isFullAge(...years) {
    years.forEach(cur => console.log((2019 - cur) > 18));
}

isFullAge(2006, 1998, 1988, 1999);
isFullAge(2006, 1998, 1988, 1999, 2009, 2005, 1967);
*/

//// Example
/*
// ES5
function isFullAge5(limit) {
    //console.log(arguments);
    
    var arrArgs = Array.prototype.slice.call(arguments, 1);
    //console.log(arrArgs);
    arrArgs.forEach(function(cur) {
        console.log((2019 - cur) > limit);
    })
}

isFullAge5(21, 2006, 1998, 1988, 1999);

// ES6

function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2019 - cur) > limit));
}
isFullAge6(21, 2006, 1998, 1988, 1999);
*/

////////////////////////////////////////////
// Default Parameters 
////////////////////////////////////////////
/*
// ES5
function smithFamily(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName = 'smith' : lastName;
    nationality === undefined ? nationality = 'american' : nationality;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
};

// ES6

function smithFamily(firstName, yearOfBirth, lastName = 'smith', nationality = 'american') {
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
};

var john = new smithFamily('john', 1998);
console.log(john);
var emily = new smithFamily('emily', 1988, 'miller', 'european');
console.log(emily);
*/


////////////////////////////////////////////
// Map data structure
////////////////////////////////////////////
/*
const question = new Map();

//// to add an item use (key,value) key can be anything 1,2,a,b,function name but not special characters
question.set('question', 'what is the official name of the latest major release of js?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'correct answer :D');
question.set(false, 'wrong, try again! :d');

////to fetch an item
console.log(question.get('question'));
//console.log(question.size);

////to delete an item

if(question.has(4)){
    //question.delete(4);
    //console.log("question a 4th option.");
}

////to clear the Map (delete all elements at once)

//question.clear();

//// we can loop through Map

//forEach
//question.forEach((value, key) => console.log(`the value of key ${key} is ${value}`));

//for - of
for(const [key, value] of question.entries()) {
    if(typeof(key) === 'number') {
        console.log(`Answer ${key} : ${value}`);
    }
}

// get input from user
const choice = parseInt(prompt("Enter choice:"));

if(choice <= 4 && choice >= 1) {
    console.log(question.get(question.get('correct') === choice));
    //or
    /*if(question.get(choice) === 'ES2015') console.log(question.get(true));
    else console.log(question.get(false));*/
    /*
} else {
    alert('invalid input try again!');
}
*/


////////////////////////////////////////////
// Classes
////////////////////////////////////////////
/*
// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person5.prototype.calcAge = function() {
    this.age = new Date().getFullYear() - this.yearOfBirth; 
}
var ash = new Person5('ash', 1998, 'vella');

// ES6

class Person6 
{
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calcAge() {
        this.age = new Date().getFullYear() - this.yearOfBirth; 
    }
    
    static greeting() {//static method are never inherited and can be called using class name only ex-Person5.greeting()
        console.log('hi there!');
    }
}

let tru = new Person6('tru', 1998, 'vella');
Person6.greeting();
//tru.greeting();   is invalid
*/

/////////////////////////////////////
//  class and subclass (Inheritance)
/*
// ES5
var Person5 = function(name, yearOfBirth, job) {        //as a super class
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person5.prototype.calcAge = function() {
    this.age = new Date().getFullYear() - this.yearOfBirth; 
}
var Teacher5 = function(name, yearOfBirth, job, subject, experiance) {  //as derived class
    Person5.call(this,name, yearOfBirth, job);
    this.subject = subject;
    this.experiance = experiance;
}

Teacher5.prototype = Object.create(Person5.prototype);
Teacher5.prototype.expIncreased = function() { this.experiance++; }

var ash = new Teacher5('ash', 1998, 'vella', 'maths', 3);
ash.expIncreased();
*/
/*
//ES6 
class Person6 
{
    constructor(name, yearOfBirth, job) {        //as a super class
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calcAge() {
        this.age = new Date().getFullYear() - this.yearOfBirth;
    }
}

class Teacher6 extends Person6      //as derived class of Person6(super class)
{
    constructor(name, yearOfBirth, job, subject, experiance) {  
        super(name, yearOfBirth, job);
        this.subject = subject;
        this.experiance = experiance;
    }
    
    incExperence() {
        this.experiance++;
    }
}

const ash = new Teacher6('ash', 1998, 'vella', 'maths', 3);
ash.calcAge();
ash.incExperence();
*/



////////////////////////////////////////////
// Coding Challenge
////////////////////////////////////////////
/*
class TownElement {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
    
}

class Park extends TownElement
{
    constructor(name, buildYear , treeCount, area) {
        super(name, buildYear);
        this.treeCount = treeCount;
        this.area = area;  //km2
    }
    
    treeDensity() {
        this.density = this.treeCount / this.area;
        console.log(`the ${this.name} has the tree density of ${this.density} trees per km.`);
    }
    
    calcAge() {
        this.age = new Date().getFullYear() - this.buildYear;
        return this.age;
    }
    
}

class Street extends TownElement
{
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;   //km
        this.size = size;
    }
    
    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`the ${this.name} is a ${classification.get(this.size)} Street of ${this.length}km length.`);
    }
    
}

function calc(arr) {     // to calculate avg and total of elements
        
    //reduce method is used to reduce an array to single value array.reduce((prev_Val, cur_val, index)=>{})

    const sum = arr.reduce((prev, cur) => prev + cur, 0);//0 is the starting value for prev(can be any number)
    return [sum, sum / arr.length];
    
    //example-> [3, 4, 5]-> 1st-> 0=pre, 3=cur ->0+3=3, 2nd 3=pre, 4=cur->3+4=7, 7=pre, 5=cur so on
}


const allParks = [new Park('national park', 2000, 200, 300), new Park('green park', 2005, 1600, 3000), new Park('WOC park', 2010, 500, 700)];
const allStreets = [new Street('oxford street', 2003, 2), new Street('green street', 2006, 3.5, 4), new Street('cambridge street', 2001, 5, 5), new Street('frogland Street', 1999, 1 , 2)];

function reportPark(p) {
    console.log(`----report parks----`);
    // tree density
    p.forEach( el => el.treeDensity());
    
    // avg age
    let ages = p.map(el => el.calcAge());
    let [sum, avg] = calc(ages);
    
    console.log(`the average age of all the town parks is ${avg} and the total of all ages is ${sum}`);
    
    // which park has more than 1000 trees
    p.forEach(el => {
        if(el.treeCount > 1000) {
            console.log(`the ${el.name} has more than 1000 trees.`);
        }
    })
}

function allLength(arrAllStreets) {
    return arrAllStreets.map(el => el.length);
}

function reportStreets(s) {
    console.log(`----report Streets----`);
    // total and avg length of all town streets
    let allLen = allLength(s);
    let [sum, avg] = calc(allLen);
    console.log(`the average age of all the town Streets is ${avg} and the total of all ages is ${sum}`);
    
    //classify sizes
    s.forEach(el => el.classifyStreet());
}

reportPark(allParks);
reportStreets(allStreets);
*/

/********CODING CHALLENGE 2*************
three players mike, jhon, mary play basketball in different teams. check who's avg score is the highest
and change the score and try again, don't forget to consider the case of draw.
***************************************/
/*
const mike = [20,30,40];
const john = [34,23,45];
const mary = [20,50,20];

let mikeAVG, jhonAVG, maryAVG;
mikeAVG = mike.reduce((pre,cur) => pre + cur, 0) / mike.length;
johnAVG = john.reduce((pre,cur) => pre + cur, 0) / john.length;
maryAVG = mary.reduce((pre,cur) => pre + cur, 0) / mary.length;

if(johnAVG > maryAVG && johnAVG > maryAVG)
    {
        console.log('winner is john');
    }
else if(maryAVG > mikeAVG && maryAVG > johnAVG)
    {
        console.log('winner is mary');
    }
else if(mikeAVG > johnAVG && mikeAVG > maryAVG)
    {
        console.log('winner is mike');
    }
else
    {
        console.log("There is a draw.");
    }
*/



/***********************************
*  CODING CHALLENGE 4
*  calculate bmi for john and mike using methods and also check both are equal(mass/height*height)
*/
/*
let john = new Map();
john.set('name','john');
john.set('mass',65);     // in kgs
john.set('height',1.6);  // in meters

let mike = new Map();
mike.set('name','mike');
mike.set('mass',75);     // in kgs
mike.set('height',1.5);  // in meters

function BMI(mapOBJ) {
    mapOBJ.set('BMI',mapOBJ.get('mass') / (mapOBJ.get('height') * mapOBJ.get('height')));
}

BMI(john);
BMI(mike);
console.log(`mikes BMI ${mike.get('BMI')}`);
console.log(`john BMI ${john.get('BMI')}`);

//comparing bmi's

if(john.get('BMI') > mike.get('BMI')) {
    console.log('john have a higher BMI ratio than mike.');
} else if(john.get('BMI') < mike.get('BMI')) {
    console.log('mike have a higher BMI ratio than john.');
} else {
    console.log('mike and john both have equal BMI ratio.');
}
*/

















