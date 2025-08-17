// Primitive

// 7 Types = String, Boolean, Number,null, undefine, Symbol,BigInt

const nam = "rakesh"

const isStudent = true

const score = 100

const outsideTemp = null

let userEmail ;

// let id = symbol('1233')

const bigNumber = 125468988n




// Reference(non primitive)

//3 types =Array, Object, Function

let student = ["rakesh ", "prajwal", "Sarang"];

let myInfo = {
    name : "rakesh",
    age :1,
}

const myFunction = function(){
    console.log ("hello rakesh");
}

console.log(typeof nam );
console.log(typeof isStudent);
console.log(typeof score );
console.log(typeof outsideTemp);
console.log(typeof bigNumber);







//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive)  ,  Heap (Non-Primitive)


let myYoutubename = "rakeshhiwasedotcom"

let anothername = myYoutubename
anothername = "rakeshcode"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi : "user@ybl",
}


let userTwo = userOne

userTwo.email = "rakesh@googl.com"


console.log(userOne.email);
console.log(userTwo.email);