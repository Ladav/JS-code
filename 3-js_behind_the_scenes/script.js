///////////////////////////////////////////////
//  using 'this' keyword
////
//function always come under global object where as method come under object scope
console.log(this);  //constain ref to global object

var ash = 
    {
        name: 'ashwilder',
        birth: 1998,
        calcAge: function()
                {
                    console.log(this);  //call to ash
                    console.log('age ' + (2019 - this.birth));
                    
                    /*function getAge()
                    {
                        console.log(this);//call global

                    }
                    getAge(); */
                }
    }

ash.calcAge();

var la = 
    {
        name: 'ladav',
        birth: 1998,
    }

la.calcAge = ash.calcAge;  // method borrowing
la.calcAge();



















