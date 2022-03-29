import React, { useState, useEffect, useRef} from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'
import ScrollTrigger from 'react-scroll-trigger'

import video from './assets/video.mp4'
import './App.scss'
import { entries } from 'lodash'

const App = () => {
  const [animation, setAnimation] = useState({})
  // const [visible, setVisible] = useState(false)
  // const myRef = useRef()
  const { ref : myRef, inView: visible} = useInView();


  // useEffect(() => {
  //   // console.log(ref.current)
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0]
  //     setVisible(entry.isIntersecting)
  //     console.log(visible)
  //   })
  //   observer.observe(myRef.current)
  // }, [])

  function handleScroll() {
    setAnimation([{scale: [0, 1300]}])
    // window.removeEventListener(event);

    // setTimeout(() => {
    //   setAnimation([{opacity: [1,0]}])
      
    // }, 1000)
  }

  return (
    <>
    <div className = 'app__container' >
        <div className = 'video__container' id = 'container'>
            <video src = {video} autoPlay muted loop>
        
            </video>

            <motion.div 
              className = 'circle' 
              animate ={visible ? {scale: [0, 1300], opacity : [1, 0]} : {scale: [1,1]}} 
              transition = {{duration: 1}}
              initial = 'hidden'
              // style = { visible && {display: 'none'}}
              >
            </motion.div>
            <motion.div className = 'logo' animate = {visible ? {opacity: [1, 0]} : {opacity: [0, 1]}} transition = {{duration: 0.5}}>
              <h1>enjoy</h1>
            </motion.div>
        </div>
    </div>
    <ScrollTrigger >
      <div ref = {myRef} className = 'scroll'>
          {/* <p>{visible ? 'yes' : 'no'}</p> */}
      </div>
    </ScrollTrigger>
  </>
  )
}

export default App
