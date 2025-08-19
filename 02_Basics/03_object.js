// Singleton
// object.creat

   // object literals

const JsUser = {
      name: "Rakesh",
      age: 20,
      location: "Nagpur",
      email: "rakesh@gmail",
      isLogged: true,
      lastLoginDays: ["monday", "sunday"]
}


// console.log(JsUser);
// console.log(JsUser.age);
// console.log(JsUser["age"]);


JsUser.email = "hiwase@tgp.com"
// Object.freeze(JsUser)
JsUser.email= "rakesh@tgpcet.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())



const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "rakesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "rakesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]