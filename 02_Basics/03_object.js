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