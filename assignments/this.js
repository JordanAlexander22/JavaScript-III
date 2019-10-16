/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - when in global scope "this" would be the window/console object 
* 2. Implicit Binding - function called by preceding dot. Object before dot is "this"
* 3. New Binding - refers the the specific instance of the object that is created and returned by the constructor function
* 4. Explicit Binding - when call or apply is used then "this" is explicitely defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayLastName(last) {
    console.log(this);
    return last;
  }
  sayLastName("covo");

// Principle 2

// code example for Implicit Binding

const hungryGirlfriend = {
    gettingHungry: 'I dont care where we eat but im starving',
    sayHello: function(name) {
      console.log(`${this.gettingHungry} ${name}! so can you just order something before I explode`);
      console.log(this);
    }
  };
  hungryGirlfriend.sayHello('Jordan');

// Principle 3

// code example for New Binding

function funnyPerson(person) {
    this.funnyThing = 'im a comedian ';
    this.person = person;
    this.speak = function() {
      console.log(this.funnyThing + this.person);
      console.log(this);
    };
  }
  
  const mom = new funnyPerson('mom');
  const dad = new funnyPerson('dad');
  
  mom.speak();
  dad.speak();

// Principle 4

// code example for Explicit Binding
mom.speak.call(dad);
dad.speak.apply(mom);
