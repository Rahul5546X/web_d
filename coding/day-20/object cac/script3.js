// destructuring(important in react)

const course = {name:"Js in Hindi",
                price:999,
            teacher:"harry"}


console.log(course.teacher);
// now if i want to use it 5-10 times, so if I have to write it again and again it'll not be efficient
// so we can just extract the value once



// *destructuring
const{teacher} = course // save time and make it easy to use a value multiple times
console.log(teacher);
const{teacher:t} = course // save time and make it easy to use a value multiple times
console.log(t);


// arrays can also be destructured


// apna kam kisi aur ko de dena-->api(restaurant menu card)

