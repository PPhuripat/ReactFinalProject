import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { MainLayout , InnerLayout } from '../styles/Layout'
import Image  from '../img/me.jpg'


const AboutPage = () => {
  return (
    <>
    <MainLayout>
      <InnerLayout>
       <Title title={'About me'} span={'About me'} />
      </InnerLayout>
    
      <div className='image' >
        <img src={Image} alt=''></img>
        
      </div>
  
      
       
      
    </MainLayout>
    </>
  )
}



export default AboutPage