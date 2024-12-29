import React from 'react'

export const Card1 = () => { // jab hum componenet ko is trah se export krty hain to import hum kurly brackets{} main krty hain.
  return (
    <div>
      <h1 className='font-bold text-indigo-500 text-2xl'>"My 1st Component with arrow function."</h1>
    </div>
  )
}

// - Component main javascript/typescript k under html or css bhi likh sakty hain.
export const Card2 = () => {
    let a = `"My 2nd Component with arrow function."`
    return (
      <div>
        <h1 className='font-bold text-blue-500 text-2xl'>{a}</h1>
      </div>
    )
  }

export  function Card3 () {
    return (
        <div>
            <h1 className='font-bold text-sky-500 text-2xl'>"My 3rd Component with name function."</h1>
        </div>
    )
  }