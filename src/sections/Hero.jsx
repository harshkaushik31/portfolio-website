import React from 'react'
import HeroText from '../components/HeroText'
import ParallexBackground from '../components/ParallexBackground'

const Hero = () => {
  return (
    <section className='flex items-start justify-center ms:items-start md:justify-start mih-h-screen overflow-hidden c-space'>
        <HeroText/>
        <ParallexBackground/>
        <figure className='absolute inset-0' style={{width: "100vw", height: "100vh"}}>

        </figure>
    </section>
  )
}

export default Hero