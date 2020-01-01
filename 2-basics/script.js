/****************************** 
* variable creation and working
*/

/*
var firstName = 'la';
var lastName = 'dav';
age = 19;   //this type of definition also works

console.log(firstName,lastName,age);

var job = false;    //boolean
console.log(job);

var alive;
console.log("alive status:"+alive);
*/



/****************************** 
* variable coercion(conversion) and (modification)
*/
/*
firstName = 'jonny';
lastName = 'wheller';
console.log(firstName + ' ' + lastName);
//displaying popup
alert('nothing to say just inruptting you ;)');

//getting input from the user
var newName = prompt('Enter the new Name:');

console.log(newName + ' ' + 'is a ' + age + ' old boy.did he have a job?' + job);
*/



/****************************** 
* Basic Operators
*/
/*
var laAge, ashAge;
year = 2019;
laYear = 1998;
ashYear = 1999;

laAge = year - laYear;
ashAge = year - ashYear;

console.log('la Age : ' + laAge + ' and Ash age :' + ashAge);

//Logical operators
laOlder = laAge > ashAge;
console.log('la is older than ash? ' + laOlder);

//typeof operator
console.log('type of laOlder : ' + typeof(laOlder));
console.log('type of laAge : ' + typeof laAge);
console.log('type of "saffv" : ' + typeof("saffv"));
console.log('type of random var : ' + typeof x);
*/



/**************************************
* Assignment and Associativity
*/
/*
var x, y;

x = y =(23 - 6) * 2 - 12;
console.log(x, y);

x +=10;
console.log(x);

x++;
console.log(x);
*/



/**************************************
* CODING CHALLENGE 1 ->BMI COMPARISION bt mark and john
* BMI(BODY MASS INDEX) = MASS/HEIGHT^2
* MASS IS IN KG'S AND HEIGHT IN METRE'S
*/
/*
var johnMass = prompt("john's weight(in kg's)?");
var johnHeight = prompt("john's height(in mt's)?");
markMass = prompt("mark's weight(in kg's)?");
var markHeight = prompt("mark's height(in mt's)?");

//caluculating BMI for comparision
var johnBmi = johnMass / (johnHeight * johnHeight);
var markBmi = markMass / (markHeight * markHeight);
console.log(markBmi,johnBmi);

var res = johnBmi < markBmi;

console.log('Mark\'s BMI is higher than john\'s ? ' + res);
*/



/*************************************
* if else conditional decision making
*/
/*
var johnMass = prompt("john's weight(in kg's)?");
var johnHeight = prompt("john's height(in mt's)?");
markMass = prompt("mark's weight(in kg's)?");
var markHeight = prompt("mark's height(in mt's)?");

//caluculating BMI for comparision
var johnBmi = johnMass / (johnHeight * johnHeight);
var markBmi = markMass / (markHeight * markHeight);
console.log(markBmi,johnBmi);

if(markBmi > johnBmi)
    {
        console.log('Mark\'s BMI is higher than john\'s. ');
    }
else
    {
        console.log('John\'s BMI is higher than Mark\'s. ');
    }
*/



/******************************
*  Boolean logic -> && || ! (can't use)-> AND OR NOT
*/
/*
var name = 'ash';
var age = 122;

if (age < 13)
    console.log(name + ' is a boy.');
else if (age >= 13 && age < 20)
    console.log(name + ' is a teenager.');
else if (age >= 20 && age < 30)
    {
        console.log(name + ' is a young man.');
    }
else
    {
        console.log(name + ' is a man.');
    }
*/



/************************************
* Ternary operator and switch statement
*/
/*
//  ternary operator
var name = 'Ash';
var age = 19;

var drink = age > 18 ? 'beer' : 'juice';

console.log(name + ' drink\'s ' + drink);

// switch 

var job = 'teacher';

switch(job)
    {
        case 'teacher':     
        case 'instructor':
        case 'tutor'://multiple case for one block
            console.log(name + ' teach\'s at infomaths.');
            break;
        case 'driver':
            console.log(name + ' is a night rider.');
            break;
        case 'player':
        case 'footballer':
            console.log(name + ' is a professional footballer.');
            break;       
        default:
            console.log(name + ' is useless.');
    }

age = 19

switch(true)    //will work always
    {
        case age < 13:
            console.log(name + ' is a boy.');
            break;
        case age >= 13 && age < 20:
            console.log(name + ' is a teenager.');
            break;
        case age >= 20 && age < 30:
            console.log(name + ' is a young man.');
            break;
        default:
            console.log(name + ' is a man.');
    }
*/



/************************************
* Truthy and falsy values and Equality operators
*/

/*falsy : undefined, null, 0, ''(emmpty string), NaN(not a number) -> these values evaluate's to false in conditional check*/
/*
var height;     //undefined

if(height)
    console.log("height is not defined.");
else
    console.log("height is " + height);

height = 0;     // simple 0 = false
if(height)
    console.log("false.");
else
    console.log("height is " + height);

height  = null;
if(height)
    console.log("height is null.");
else
    console.log("height is " + height);

//equality operator == and ===
//== check value after coercion(type conversion)
//=== check value value and type both(no coercion)
height = '0';      // height is a string 
console.log("height == 0 : " + (height == 0)); //true
console.log('height === 0 : ' + (height === 0));//false
*/



/**************************************
* CODING CHALLENGE 2
* three players mike, jhon, mary play basketball in different teams. check who's avg score is the highest
and change the score and try again, don't forget to consider the case of draw.
*/
/*
var mike1 = 89, mike2 = 120, mike3 = 103;
var john1 = 116, john2 = 94, john3 = 123;
var mary1 = 97, mary2 = 135, mary3 = 105;

var AVGmike = (89 + 120 + 103) / 3;
var AVGjohn = (116 + 94 + 123) / 3; //333
var AVGmary = (93 + 135 + 105) / 3; //323
console.log("mike :" + AVGmike + ' mary :' + AVGmary + ' john :' + AVGjohn);

var winner;

if(AVGjohn > AVGmary && AVGjohn > AVGmike)
    {
        console.log('winner is john');
    }
else if(AVGmary > AVGmike && AVGmary > AVGjohn)
    {
        console.log('winner is mary');
    }
else if(AVGmike > AVGjohn && AVGmike > AVGmary)
    {
        console.log('winner is mike');
    }
else
    {
        console.log("There is a draw.");
    }
*/


/**************************************
* Functions
* keeping the code 'DRY' means dont repeat the same code.
*/
/*
function ageCalculator(birth)
{
    return (2019 - birth);
}

var mike = ageCalculator(1949);
var john = ageCalculator(1997);
var jane = ageCalculator(1998);
console.log(mike, john, jane);

function yearsUntilRetirement(birth, name)
{
    var age = ageCalculator(birth);
    var retirement = 65 - age;
    if(retirement <= 0)
        {
            console.log(name + ' is already retired.');
        }
    else
        {
            console.log(name + ' will be retired in ' + retirement + ' years.');
        }
}
yearsUntilRetirement(1949,'mike');
yearsUntilRetirement(1997,'john');
yearsUntilRetirement(1998,'jane');
*/



/********************************
* Functions Statements and Expressions
*/

// function declaration
// function whatdoyoudo(job, firstName) {}
/*
//  function expression
var whatdoyoudo = function(job, firstName)
{
    switch(job)
        {
            case 'teacher':
                return(name + ' teaches students.');
            case 'designer':
                return name + ' design\'s beautiful websites.';
            default:
                return name + ' do something.'
                
        }
}
console.log(whatdoyoudo('teacher', 'ash'));
console.log(whatdoyoudo('designer', 'arsh'));
*/
/*an expression of any type will always return something ex-2+3(on console) returns 5
function test(){console.log(7);}
  try this on console
    whatdoyoudo('teacher', 'ash')
    then
    try normal function
    test()
    you will see a undefined written.
*/



/****************************************
* Array and some of it functions
*/
/*
//initializing or creating an array
var way1 = [1, 2, 3];
var way2 = new Array(1, 2, 3, 4, 5);

// mutate arrays data
way1[0] = 100;
console.log(way1);      //displays whole array
way1[way1.length] = 400;
console.log(way1);
console.log(way1[0]);

//different data types
var ash = ['ash', 'wilder', 1998, false];
console.log(ash);

// function

console.log(ash.indexOf('wilder'));
console.log(ash.indexOf(3));// -1 on failure
//inserting data
ash.push(20);
ash.push('cds');
ash.unshift('Mr.');
console.log(ash);

//removing data
ash.pop();
ash.shift();
ash.shift();
console.log(ash);

//basic use
var iscds = ash.indexOf('cds') === -1 ? 'Ash is a cds officer' : 'Ash is not cds officer';
console.log(iscds);
*/



/**************************************
* CODING CHALLENGE 3
*/
/*
var bills = [124, 48, 264];

console.log(bills);

function calculateBill(bill)
{
    
    if(bill < 50)
        return bill+bill*1/5;
    else if(bill >= 50 && bill < 200)
            return(bill+bill*3/20);
    else if(bill >= 200)
        return bill+bill*1/10;
}
var finalBills =[calculateBill(bills[0])
             ,calculateBill(bills[1])
            ,calculateBill(bills[2])];
console.log(finalBills);
*/



/**********************************************
* object and properties
*/
/*
//object literal (creation way 1)
var dav = {
    firstName : 'la',
    lastName : 'dav',
    birth : 1998,
    isMarried : false
};
console.log(dav);

//accessing values
console.log(dav.firstName);    //way1
console.log(dav['lastName']); //way2

//maniputlating data
dav.birth = 1999;
dav.isMarried = true;
console.log(dav);

var ash = new Object();   //empty object (creation way2)
ash.firstName = 'ash';
ash.lastName = 'wilder';
ash.birth = 1998;
ash.relation = true;
ash['isMarried'] = false;

console.log(ash);
*/



/*NOTE-> Remember we can have a array inside another array and objects inside array.
and we can also have an object and arrays inside object.
and we can defined functions inside objects and arrays.

#following code demonstrate, how we use function in arrays
var arr = [2, 'age', function(){return 9}()];
console.log(arr);
console.log(arr[2]);
*/


/************************************
* objects and method and 'this' keyword
* method is a function inside an object
* this means this object or the current object ex->ash.something == this.something
*/
/*
var ash =
    {
        firstName : 'ash',
        lastName : 'wilder',
        birth : 1998,
        calAge : function(year){//expression fun inside obj
            return (2019-1998);
        }
    }

var age = ash.calAge(1998); //calculating age
ash.age = age;      //storing it into ash
console.log(ash);

//we can rewrite the above written code in a more efficient way, using 'this' keyword

var ash2 = 
    {
        firstName : 'ash',
        lastName : 'wilder',
        year : 1998,
        calAge : function()
                    {
                        this.age = 2019 - this.year;
                    }
    }

console.log(ash);
*/



/***********************************
*  CODING CHALLENGE 4
*  calculate bmi for john and mike using methods and also check both are equal
*/
/*
var mike =
    {
        name : 'mike',
        mass : 65,          // in kg's
        height : 1.67,      // in metres
        calBMI : function()
                {
                    return (this.BMI = this.mass / (this.height * this.height)); 
                }
    }
var john =
    {
        name : 'john',
        mass : 70,          // in kg's
        height : 1.67,      // in metres
        calBMI : function()
                {
                    return (this.BMI = this.mass / (this.height * this.height)); 
                }
    }
john.calBMI();  //remember BMI variable will be created  after the execution of calBMI
mike.calBMI();
if(mike.BMI > john.BMI)
    {
        console.log('mike have higher BMI ' + mike.BMI);
    }
else if(mike.BMI < john.BMI)
    {
        console.log('john have higher BMI ' + john.BMI);
    }
else
    {
        console.log('mike and john have equal BMI.');
        console.log(mike.BMI, john.BMI);
    }

*/
/* the above logic can simply written as
if(mike.calBMI() > john.calBMI())
    {
        console.log('mike have higher BMI ' + mike.BMI);
    }
else if(mike.BMI < john.BMI)
    {
        console.log('john have higher BMI ' + john.BMI);
    }
else
    {
        console.log('mike and john have equal BMI.');
        console.log(mike.BMI, john.BMI);
    }
*/



/**********************************
* looping or iteration statements  and
* continue and break
*/
/*
var ash = ['ash', 'wilder', 1998, false,'cds'];

//for loop
console.log('for->');
for (var i = 0; i < ash.length ; i++)
    console.log(ash[i]);

//while loop
var i = ash.length-1;
console.log('while->');
while (i >= 0)
{
    console.log(ash[i]);
    i--;
}

//continue when data other then a string occur
console.log('continue->');
for (var i = 0; i < ash.length ; i++)
{
    if(typeof(ash[i]) !== 'string') continue;
    console.log(ash[i]);
}

//break when data other then a string occur
console.log('break->');
for (var i = 0; i < ash.length ; i++)
{
    if(typeof(ash[i]) !== 'string') break;
    console.log(ash[i]);
}
*/



/********************************
* CODING CHANLLENGE 5
*/
/*
//john's family 
var john =
    {
        bill : [124, 48, 268, 180, 42],
        tip : new Array(),
        finalBill : [],
        calcTip : function()
                  {
                      for(var i = 0 ; i < this.bill.length ; i++)
                          {
                              if(this.bill[i] < 50)
                                  this.tip[i] = this.bill[i]*0.20;
                              else if(this.bill[i] >= 50 && this.bill[i] < 200)
                                  this.tip[i] = this.bill[i]*0.15;
                              else if(this.bill[i] >= 200)
                                  this.tip[i] = this.bill[i]*0.10;
                              this.finalBill[i] = this.bill[i] + this.tip[i];
                          }
                  }
    }

john.calcTip();
console.log(john);





//mike's family 
var mike =
    {
        bill : [77, 375, 110, 45],
        tip : new Array(),      //empty array
        finalBill : [],         //empty array
        calcTip : function()
                  {
                      for(var i = 0 ; i < this.bill.length ; i++)
                          {
                              var percentage;
                              if(this.bill[i] < 100){
                                  percentage = 0.20;
                              }
                              else if(this.bill[i] >= 100 && this.bill[i] < 300){
                                  percentage = 0.10;
                              }
                              else if(this.bill[i] >= 300){
                                  percentage = 0.25;
                              }
                              
                              this.tip[i] = this.bill[i] *   percentage;
                              this.finalBill[i] = this.bill[i] + this.tip[i];
                          }
                  }
    }

mike.calcTip();
console.log(mike);

//average of bill tips
function AVG(tipArr)
{
    var sum = 0;
    for(var i = 0 ; i < tipArr.length ; i++)
        {
            sum = sum + tipArr[i];
            console.log();
        }
    return (sum/tipArr.length);
}

var johnTipAVG = AVG(john.tip);
var mikeTipAVG = AVG(mike.tip);
if(johnTipAVG > mikeTipAVG)
    {
        console.log('john\'s avg tip is ' + johnTipAVG + ' where as mike\'s avg tip is ' + mikeTipAVG);
    }
else
    {
        console.log('mike\'s avg tip is ' + mikeTipAVG + ' where as john\'s avg tip is ' + johnTipAVG);
    }
*/




















