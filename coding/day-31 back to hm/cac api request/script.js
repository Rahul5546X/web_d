// formatting api and json formatter

        let url = 'https://api.github.com/users/hiteshchoudhary'


// step 1- creating an object
        let xhr = new XMLHttpRequest()  
// open is used to send request
        xhr.open('GET',url) // method means request(get,post,put bgera) and link of api 

// status codes are changed constantly(to check the change in state continuosly we can use this)
        xhr.onreadystatechange = function(){
            console.log(xhr.readyState);
            if(xhr.readyState == 4){
                let data =  JSON.parse(this.responseText)// we havae to parse it to convert it into object(can not use Object(this.response) directly )
                console.log(data); // we are using it from api
                console.log(typeof data); // string is default so we have to conver it into object
                console.log(data.followers)
                console.log(data.updated_at)
            }
        }
    
// open has not been called yet so to call open we do this
        xhr.send()  // open is called