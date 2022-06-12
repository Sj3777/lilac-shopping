import React from "react"
import Categories from "./Categories"
import "./home-style.css"
import SliderHome from "./Slider"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container'>
          <Categories />
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home
