import React from 'react'
import "./Home.css"
import "../../components/Categories/Categories"
import Categories from '../../components/Categories/Categories'
const Home = () => {
  return (
    <>
    <div className='lander'>
        <span><img className='lander-img' src="./images/lander2.png"></img></span>
        <div className='lander-text-wrapper'><h4 className='lander-text'>"India is a treasure trove of herbal plants, it is, in a way our Green Gold".</h4>
        <div style={{textAlign:"right"}}><p style={{color:"rgba(0, 136, 169, 1)",paddingLeft: "40px",
    paddingRight: "40px",fontFamily: "'Montserrat', sans-serif"}}>....Narendra Modi</p></div></div>
        <span><img className='lander-img' src="./images/lander1.png"></img></span>
    </div>
    <div> <Categories/></div>
  
    

    </>
  )
}

export default Home
