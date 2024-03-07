### Dynamic routes
```
url ke andr user kuch bhi likhega to hr chiz ke lie alg alg routes bnane se acha hm ek parameter le lenge slug name ka and usmn values aati jayegi
```



```
inside app folder do all this
create a folder named blog/page.js write your content

create another folder named blogpost\[slug]  and page.js in it
```
export default function Page({ params }) {
    // throw new Error("dikkat h kch na kch")
    return <div>My Post: {params.slug}</div>
  }
```

```

we can also create our own custom page not found file--> not-found.js
and error.js

```
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found gum ho chuka h jo dhund rhe ho</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
```


we can also create our custom errror page error.js

```
'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong! error aya error bhagooooooo</h2>
      <h4>dekh lo agr chle re render hoke</h4>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >  
        Try again
      </button>
    </div>
  )
}

```
```