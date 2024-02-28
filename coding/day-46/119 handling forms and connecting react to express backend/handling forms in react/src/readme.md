### Library for handling forms in react ###


```
While making a basic form there are so many things we have to handle so code can be very long and hectic to do changes 
React hook library makes it very easy comparing to the traditinal method

form handling and validation becomes very simple and easy
```


```
npm install react-hook-form
import { useForm } from "react-hook-form"

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)


  <form action="" onSubmit={handleSubmit(onSubmit)} > // we do not have to define handlesubmit
<input type='text' {...register("username", {required:true})} />
 // if we use this we do not have to write name value id in the input tag

```

 ###
 Using validations and handling errors without custom messages
 ###
 ```
  {/* <input type='text' placeholder='username' {...register("username", {required:true , minLength:3} ) } /> */}
  {/* {errors.username && <span>there is error in username</span>} */}

   {/* <input type='password' placeholder='password' {...register("password", {required:true , maxLength:8, minLength:5} ) } /> */}
   {/* {errors.password && <span>there is error in password</span> } */}
```

### Handling errors with custom messages ###
```
<input type='text' placeholder='username' {...register("username", { required: true, minLength: { value: 3, message: "Min lenght is 3" } })} />

<input type='password' placeholder='password' {...register("password", { required: true, maxLength: { value: 8, message: "Max lenght is 8" }, minLength: { value: 5, message: "Min lenght is 5" } })} />

 {errors.username && <span>{errors.username.message}</span>}

{errors.password && <span>{errors.password.message}</span>}

```

### simulating delay ###
```
function App() {
  const [count, setCount] = useState(0)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting},
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    await delay(2) // network delay
    console.log(data)
  }

  {isSubmitting&& <div className="loading">
          Loading...
        </div> }

<input type="submit" disabled={isSubmitting} value="Submit" />
```
### Checking username and password and handling errors from server ###
```
  const onSubmit = async (data) => {
    await delay(2) // network delay
    console.log(data)
    if(data.username !=="rahul" )
    {
      setError("serverError", {message:"Username is wrong"})
    }
    if(data.username === "rohan")
    {
      setError('blocked',{message:"this user is blockeed"})
    }
  }

   {errors.serverError && <span className='error'>{errors.serverError.message}</span>}
          <br />
          {errors.blocked && <span className='error'>{errors.blocked.message}</span>}
```

### connecting react to backend###
```

the data object we get we can use fetchApi to post it to a express app
Front end function which sends the data to backend

    ```
    const onSubmit = async (data) => {
        // await delay(2) // network delay
        let r = await fetch("http://localhost:3000/",{method:"POST",  headers: {
        "Content-Type": "application/json" 
        },
        body:JSON.stringify(data)})

        let res = await r.text()

        console.log(data,res)
    }

    ```

Backend code
    ```
    import  express  from "express"
    import cors from "cors"
    import bodyParser from "body-parser"
    const app = express()
    const port = 3000

    app.use(cors());
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
    res.send('Hello World!')
    })

    app.post('/',(req, res) =>{
        // console.log(req.headers);
        console.log(req.body)

        res.send('Data received successfully')
    })
    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
    ```
```