// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

async function getdata()
{
    // let x = fetch('https://jsonplaceholder.typicode.com/todos/1')// it'll return an promise
    //   .then(response => response.json())//it'll also return an promise
    //   .then(json => console.log(json)) //it'll parse the data inside the promise
    // converting it to async await
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json() //it'll take some time to parse the data in json , we get data in the form of js object, we can also parse in text(await x.text)
    // console.log(data)  // we get the data which is available on the url
    return data
} 


async function main()
{
    console.log("Loading Modules");
    console.log("Do something else");
    console.log("Load data");
    let data = await getdata()  // agr await ni hota to e isko background mn dal kr niche vale chizn process krta aur sath hi sath e promise return krta
    // await likhne se e promise ke settle hone ka wait kreaga
    console.log(data)
    console.log("process data");
    console.log("task 2");
}
main()

async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), 
    });
    return response.json();
  }
  
  postData("https://example.com/answer", { answer: 42 }).then((data) => {
    console.log(data); 
  });