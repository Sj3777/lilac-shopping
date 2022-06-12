import React from "react"
import Categories from "./Categories"
import "./home-style.css"
import SliderHome from "./Slider"

const Home = () => {
  return (
    <>
      <section className='home_section'>
        <div className='home_container'>
          <SliderHome />
          <Categories />
        </div>
      </section>
    </>
  )
}

export default Home
