
/* Variable and Function Demo
let name = "Md Sabbir hossain";
let age = 25;
let hasHobbie = true;
//Arraw Function in JavaScript
const readData = (userName,UserAge,UserHobby) => {
    return("Your name is "+userName+". Your age is "+UserAge+". Your Have Hobby "+ UserHobby);
}

const add = (a,b) => a + b;


console.log(readData(name,age,hasHobbie));
console.log(add(5,6));

// Object Creation
const person = {
    name : 'sabbir',
    age : 25,
    greet(){
        console.log("Hi. I am "+this.name)
    },
    myAge(){
        console.log("I am "+ this.age + " Year Old");
    }
};

//console.log(person);
person.greet();
person.myAge();

*/

const Hobbys = ['Sports','Gardening'];

// for(let hobby of Hobbys){
//     console.log(hobby);
// }
//Hobbys.push('Programming');

//console.log(Hobbys.map(hobby => 'Hobby: '+hobby));
// const newsArray = [...Hobbys];
// console.log(newsArray);

// const toArray = (...arg) => {
//     return arg;
// }
// console.log(toArray(5,4,6,2,5));
