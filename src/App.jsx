import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

const App = () => {
  return (
    <div>
      <h1 className="container mx-auto max-w-7xl">
        <Navbar/>
        <Hero/>
        <section className='min-h-screen'/>
        <section className='min-h-screen'/>
        <section className='min-h-screen'/>
        {/* about */}
        {/* projects */}
        {/* experience */}
        {/* testimonials */}
        {/* contact  */}
        {/* footer */}
      </h1>
    </div>
  )
} 

export default App