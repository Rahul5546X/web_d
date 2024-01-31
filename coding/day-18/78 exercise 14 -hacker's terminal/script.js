// let prom1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let div = document.createElement("div")
//         div.innerHTML = "<p>Initializing Hacking<span> ....</span</p>"
//         div.setAttribute("class", ".text1")
//         document.querySelector(".text").append(div)
//         resolve("1st file done")
//         reject("not completed")
//     }, 1000);
// })
// prom1
//     .then(function (val) {
//         console.log(val);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })


// let prom2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let div = document.createElement("div")
//         div.innerHTML = "<p>Reading your files <span> ....</span</p>"
//         div.setAttribute("class", ".text1")
//         document.querySelector(".text").append(div)
//         resolve("2nd file done")
//         reject("not completed")
//     }, 2000);
// })
// prom2
//     .then(function (val) {
//         console.log(val);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })



// let prom3 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let div = document.createElement("div")
//         div.innerHTML = "<p>Password Files Detected <span> ....</span</p>"
//         div.setAttribute("class", ".text1")
//         document.querySelector(".text").append(div)
//         resolve("3rd file done")
//         reject("not completed")
//     }, 3000);
// })
// prom3
//     .then(function (val) {
//         console.log(val);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })


// let prom4 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let div = document.createElement("div")
//         div.innerHTML = "<p>Uploading all personal and password files to server <span> ....</span</p>"
//         div.setAttribute("class", ".text1")
//         document.querySelector(".text").append(div)
//         resolve("4th file done")
//         reject("not completed")
//     }, 4000);
// })
// prom4
//     .then(function (val) {
//         console.log(val);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })



// let prom5 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let div = document.createElement("div")
//         div.innerHTML = " <p>cleaning up <span> ....</span</p> "
//         div.setAttribute("class", ".text1")
//         document.querySelector(".text").append(div)
//         resolve("5th file done")
//         reject("not completed")
//     }, 5000);
// })
// prom5
//     .then(function (val) {
//         console.log(val);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })


function createPromise(text, timeout) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            let div = document.createElement("div");
            div.innerHTML = `<p>${text} <span> ....</span</p>`;
            div.setAttribute("class", ".text1");
            document.querySelector(".text").append(div);
            resolve(`${text} done`);
        }, timeout);
    });
}

createPromise("Initializing Hacking", 1000)
    .then(function (val) {
        console.log(val);
        return createPromise("Reading your files", 2000);
    })
    .then(function (val) {
        console.log(val);
        return createPromise("Password Files Detected", 3000);
    })
    .then(function (val) {
        console.log(val);
        return createPromise("Uploading all personal and password files to server", 4000);
    })
    .then(function (val) {
        console.log(val);
        return createPromise("Cleaning up", 5000);
    })
    .then(function (val) {
        console.log(val);
    })
    .catch(function (err) {
        console.error(err);
    });


// function createPromiseWithBlinkingDots(text, timeout, dotCount) {
//     return new Promise(function (resolve) {
//         const interval = 500; // Interval for blinking dots
//         let dotIndex = 0;

//         const updateDots = () => {
//             let dots = '';
//             for (let i = 0; i < dotIndex; i++) {
//                 dots += '.';
//             }
//             return dots;
//         };

//         const blinkDots = () => {
//             setInterval(() => {
//                 dotIndex = (dotIndex + 1) % (dotCount + 1);
//                 document.querySelector(".dots").textContent = updateDots();
//             }, interval);
//         };

//         setTimeout(() => {
//             let div = document.createElement("div");
//             div.innerHTML = `<p>${text} <span class="dots"></span></p>`;
//             div.setAttribute("class", ".text1");
//             document.querySelector(".text").append(div);

//             blinkDots();
//             resolve(`${text} done`);
//         }, timeout);
//     });
// }

// createPromiseWithBlinkingDots("Initializing Hacking", 1000, 3)
//     .then(function (val) {
//         console.log(val);
//         return createPromiseWithBlinkingDots("Reading your files", 2000, 3);
//     })
//     .then(function (val) {
//         console.log(val);
//         return createPromiseWithBlinkingDots("Password Files Detected", 3000, 3);
//     })
//     .then(function (val) {
//         console.log(val);
//         return createPromiseWithBlinkingDots("Uploading all personal and password files to server", 4000, 3);
//     })
//     .then(function (val) {
//         console.log(val);
//         return createPromiseWithBlinkingDots("Cleaning up", 5000, 3);
//     })
//     .then(function (val) {
//         console.log(val);
//     })
//     .catch(function (err) {
//         console.error(err);
//     });
