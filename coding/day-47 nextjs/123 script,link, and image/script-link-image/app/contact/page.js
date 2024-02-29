import React from 'react'
import Script from 'next/script' 
// used to inject js in components
// there are different props 
// https://nextjs.org/docs/app/building-your-application/optimizing/scripts

const contact = () => {
  return (
    <div className='bg-gray-400'>
      i'm the contact sectinon

      <Script>
        {` alert("welcome to the contact page"); `}
      </Script>
    </div>
  )
}

export default contact
export const metadata = {
    title: "contact section",
    description: "this is the contact section of the page",
  };