// 1) let and  const keywords
// let 
function eslet() {
    let name = 'Ayush';

    if(true) {
        let name = 'Bhargav';
        console.log(`Name is ${name}`); // Name is Bhargav
    }
    console.log(`Name is ${name}`); // Name is Bhargav
}

// eslet();
// let
function esLet() {
    let name = 'Ayush';

    if(true) {
        let name = 'Bhargav';
        console.log(`Name is ${name}`); // Name is Bhargav
    }
    console.log(`Name is ${name}`);  // Name is Ayush
}

// esLet();

// //const
function esConst() {
    const name = 'Ayush';

    if(true) {
        const name = 'Bhargav';
        console.log(`Name is ${name}`); // Name is Bhargav
    }
    console.log(`Name is ${name}`); // Uncaught TypeError: Assignment to constant letiable.
}
// esConst();

// 2) Arrow function

// let calc = (height=100, width=50)=>{
//     console.log('height vale',height);
//     console.log('width vale',width);
// }

// calc();
// calc(200);

// 3) multiline String

let str = `Hey there!!! 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!
&
Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio! .`
console.log(str);

// 4) Templete String

let myName ="Ayush";
let Greet= `Hello ${myName}, Good Morning!`;
console.log(Greet);

// 5) Parameter Handling

// 5.1) Default Parameter

let calc = (height=100, width=50)=>{
    console.log('height vale',height);
    console.log('width vale',width);
}

calc();
calc(200);

// 5.2) Rset Parameter and distructing

let num = ["one", "two", "three", "four", "five", "six", "secven"];    
        
let [a,b,...args] = num;    
console.log(a);     
console.log(b);     
console.log(args);  

// 5.3) Named Parameter and distructing

function hello({x='Ayush',y,z=true}){
    console.log(x,y,z);
}
hello({x:'Bhargav',y:10,z:true});

// 5.4) Spread Operator

// let colors = ['Red', 'Yellow'];  
// let newColors = [...colors, 'black', 'Orange', 'Green'];  
// console.log(newColors); 

// 6) distructing assignment  
let colors = ["black", "white", "Blue", "Green", "Yellow", "Orange", "Red"];  

let[color1, ,color3, ...color5] = colors;   //leave space between color1 and color3
console.log(color1);  
console.log(color3);   
console.log(color5);  

console.log("hello ");

// 7) string's method


//startWith
let satrt = 'Welcome';   
console.log(satrt.startsWith('Wel',0));  //true
console.log(satrt.startsWith('wel',0));  //false

//endWith

let end = "Welcome to 1Rivet.";  
console.log(end.endsWith("to", 10)); //true
console.log(end.endsWith("To", 10)); //false

//icludes

let inc = "Welcome to 1Rivet.";  
console.log(inc.includes("to")); //true
console.log(inc.includes("To")); //false

//repeat

var rep = "hello Ayush";  
console.log(rep.repeat(5));  