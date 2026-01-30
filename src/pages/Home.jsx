import React from 'react'
import Hero from './Hero.jsx'
import HeroDetails from './HeroDetails.jsx'
import Why from './WhyChoose.jsx'
import Services from './Services.jsx'
import Pricing from './Pricing.jsx'
import Blog from './Blog.jsx'
import Form from './Form.jsx'
import Faq from './Faq.jsx'


function Home() {
  return (
    <div>
      <Hero />
        <HeroDetails />
        <Why />
        <Services />
        <Pricing />
        <Blog />
        <Form />
        <Faq />
    </div>
  )
}

export default Home