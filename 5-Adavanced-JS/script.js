////////////////////////////////////////
//// function constructor

/*
var Person = function(name, dateOfBirth, nature, nikeName)
{
    this.name =  name;
    this.dateOfBirth = dateOfBirth;
    this.nature = nature;
    this.nikeName = nikeName;
}

Person.prototype.calcAge = function ()
    {
        return (2019 - this.dateOfBirth);
    }
Person.prototype.catagory = 'general';

var ladav = new Person('ladav', 1998, 'always in anxeity', 'la');
var arsh = new Person('arsh', 1997, 'chill', 'fish');
var tru = new Person('trugamer', 1999, 'never get provoked', 'tru');

console.log(tru.catagory, ladav.catagory, arsh.catagory);
*/


///////////////////////////////////////////////
//// the Object.create method
/*
var personProto = {
    calcAge: function(){
        console.log( 2019 - this.yearOfBirth );
}
    
}

var ladav = Object.create(personProto);
ladav.name = 'la';
ladav.yearOfBirth = 1998;

var arsh = Object.create(personProto,{
    name: { value: 'arsh' },
    yearOfBirth: { value: 1999 }
});

ladav = arsh;


var vehicleProto = {
    noOfTyres: 4,
    color: 'black',
    setColor: function(colors){
        this.color = colors;
    },
    getCost: function(){
        return(this.cost);
    }
}

var bmw = Object.create(vehicleProto);
*/





/////////////////////////////////////////////
// passing function as argument
/*
var num = [2,343,1213,32432,2321];
function arrCalc(arr ,calc)
{
    console.log(calc(arr));
}
function calc(arr)
{
    var sum = 0;
    for(var i=0 ; i<arr.length ; i++)   sum += arr[i];
    return(sum);
}


arrCalc(num, calc);
*/





/*
///////////////////////
// IIFE

(function()
{
    var score = Math.random() * 10;
    if(score >= 5) console.log('true');
    else console.log('false');
})();
*/
/*
var Personproto = {
  calcAge: function(){
      return(2019 - this.yearOfBirth);
  }  
};

var john = Object.create(Personproto,{
    name: {value: 'john'},
    age: {value: -1},
    yearOfBirth: {value: 1998},
    calcAge: {value: function(){
      return(2019 - this.yearOfBirth);
  } }
});
console.log(john.calcAge());

*/



//////////////////////////////////////////////////////////////
//  CALL, BIND AND APPLY
//////////////////////////////////////////////////////////////
/*
var ash = {
    name: "ashwilder",
    yearOfBirth: 1998,
    job: "teacher",
    calcAge: function(){
        this.age = (2019 - this.yearOfBirth);
    },
    

    
    presentation: function(timeOfDay,style){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + " ladies and gentlemen. I'm " + this.name + ' i\'m a ' + this.job + ' and i\'m ' + this.age +' years old.');
        }
        else{
            console.log('Good ' + timeOfDay + " friends, Whats up. I'm " + this.name + ' i\'m a ' + this.job + ' and i\'m ' + this.age +' years old.');
        }
    }
}

var mohi = {
    name: "mohini",
    yearOfBirth: 1997,
    job: "designer",
    age: -1
};

var ashFriendly = ash.presentation.bind(ash,'morning');

ashFriendly('fromal');

*/
/*
var ash = {
    name: "ashwilder",
    yearOfBirth: 1998,
    job: "teacher",
    calcAge: function(){
        this.age = (2019 - this.yearOfBirth);
    },
    

    
    presentation: function(ar){
        if("formal" === ar[0]){
            console.log('Good ' + ar[1] + " ladies and gentlemen. I'm " + this.name + ' i\'m a ' + this.job + ' and i\'m ' + this.age +' years old.');
        }
        else{
            console.log('Good ' + ar[1] + " friends, Whats up. I'm " + this.name + ' i\'m a ' + this.job + ' and i\'m ' + this.age +' years old.');
        }
    }
}

ash.presentation.apply(ash, ["formal","m"]);
*/



//////////////////////////////////
// CODING CHALLENGE
(function(){      //IIFE
    
    var Question = function(ques, options, ans){
         this.ques = ques;
         this.options  = options;
         this.ans = ans;
    }

    Question.prototype.disQues = function()
    {
        console.log(this.ques + ":");
        for(var i = 0; i < this.options.length; i++){
            console.log(i + ": " + this.options[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(choice, updateScore)
    {
        var sc;
        
        if(choice === this.ans){
            console.log("Correct answer!");
            sc = updateScore(true);
        }
        else{
            console.log("Wrong Answer! Try again :)");
            sc = updateScore(false);
        }
        
        this.disScore(sc);
    }
    
    function score()
    {
        var sc = 0;
        return function(correct){
            if(correct) sc++;
            return sc;
        }
    }
    var keepScore = score();
    
    Question.prototype.disScore = function(score)
    {
        console.log('Your current Score :' + score);
        console.log("------------------------------------------------");
    }
    
    var ques1= new Question("what is your hobby?", ["gym","coding","don't know"], 1);
    var ques2 = new Question("favorite animal?", ["dogs","cats","cows"], 0);
    var ques3 = new Question("how much 5+5 is?", ["10","12","9"], 0);

    var questions = [ques1, ques2, ques3];
    function nextQues()
    {
        var curQues = Math.floor(Math.random() * questions.length);
        questions[curQues].disQues();

        var choice = prompt("Enter choice:");
        
        if(choice !== 'exit'){
            questions[curQues].checkAnswer(parseInt(choice), keepScore);
            nextQues();
        }
    }
    
    nextQues();
})();


/*
while(flag)
    {
        
        getInput(curQues);
        
        if(choice)
    }*/





















