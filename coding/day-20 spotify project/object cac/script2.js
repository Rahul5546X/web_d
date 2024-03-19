// singleton

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "alisha"
tinderUser.age = 21
tinderUser.isLoggedIn = false
console.log(tinderUser); 


console.log(Object.keys(tinderUser)); // array datatype so we can use array properties on it by storing it in a variable or arrays
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  // every key value ko array mn bna dia jata h
console.log(tinderUser.hasOwnProperty("name")); //true or false
console.log("singleton ends");



// declaring objects inside a object
const regularUser = {
    email:"xyz@gmail.com",
    fullName:{
        userFullName:{
            firstName:"alisha",
            lastName:"Thakur"
        },
        userAge:21
    },
    linkedin:"axy@linkedin.com"
}


// console.log(regularUser.email);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName?.firstName); // suppose if fullname does not exist so just use ? to make secure
// console.log(regularUser.fullName.userAge);
// console.log(regularUser.linkedin);


// merging objects

const  obj1 = {1:"a",2:"b"}
const  obj2 = {3:"c",4:"d"}

// 1st way 
// const obj3 = {obj1,obj2} // object ke andr object bn jayega



// 2nd way
// const obj3 = Object.assign({},obj1,obj2)  //{} these are optional,it guarantees that what we want, will be returned,  agr e ni lgayenge to obj2 ki value obj1 mn jayegi na ki nye object mn(in short jo obj1 h vo bhi change ho jayega)
// {} it'll act as a target
// console.log(obj3);
// console.log(obj1); //{} age e ni lgaya hoga assign krte time to obj1 mn chli jayegi obj2 ki value



// best way
const obj3 = {...obj1, ...obj2}
console.log(obj3);



// if value come from database it'll be array of objects
const user = [
    {

    },
    {

    },
    {

    }
]



// console.log(user[1].email);  //can be accessed using this way
/*
1. singleton
2. Object.keys
3. Object.values
4. Object.entries
5. Object.hasOwnProperty
6. declaring object  inside objects
7. merging objects
*/

