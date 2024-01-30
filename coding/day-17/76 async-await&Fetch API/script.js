console.log("Async Await and Fetch Script Initializing.....");

async function getdata() // async hone se e background mn chlta rhega
{
    return new Promise(function(resolve,reject)
    {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}


// 1st way
// console.log("Loading Module");
// console.log("Do something else");

// jitna hmn pta h js async h to e sbkuch chlayegi bari bari agr mn chahun ki data process hone se phle load ho jaye (jo ki jruri chiz h qnki load nhi hoga data to process kaise hoga sara data)


// to iske lie mn esa krunga mn bolunga jbtk data load nahi ho jata tbtk ap wait kro 

// let data = getdata()  //it'll return a promise object from which we can fetch the data
// console.log(data) //ismn promise hoga
// simple way to wait --not much efficient--it is a callback based approach
// data.then((v)=> {
//     console.log("Load data");
//     console.log("process data");
//     console.log("task 2");
// })

// ab jbtk promise chlega ni pura tbtk age vala data ni hoga load


// better approach 
// isse esa hoga jbtk getdata pura execute nhhi hoga tbtk e aage ni chlega


async function main()
{
    console.log("Loading Modules");
    console.log("Do something else");
    console.log("Load data");
    let data = await getdata()  // agr await nihota to e isko background mn dal kr niche vale chizn process krta
    console.log(data)
    console.log("process data");
    console.log("task 2");
}

main()