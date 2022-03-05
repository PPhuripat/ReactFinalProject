import React from 'react'
import styled from 'styled-components'
import { MainLayout , InnerLayout } from '../styles/Layout'
import Title from '../Components/Title'
import ProgressBar from '@ramonak/react-progress-bar'

const ResumePage = () => {
 
  return (
    <>
    <MainLayout>
      <InnerLayout>
      <Title title={'My Skills'} span={'my skills'} />
      </InnerLayout>
      
      <div className='center'>
        HTML5
        <ProgressBar 
          className="Progressbar"
          completed={40}
          maxCompleted={100}
          animateOnRender
          width='80%'
          margin='20px'
          bgColor='grey'
          customLabel='BASIC'
          height='25px'
          borderRadius='5px'
          padding='3px'
          labelColor='black'
         
        
        />
        </div>
        <div className='center'>
          JAVA
        <ProgressBar 
          className="Progressbar"
          completed={40}
          maxCompleted={100}
          animateOnRender
          width='80%'
          margin='20px'
          bgColor='grey'
          customLabel='BASIC'
          height='25px'
          borderRadius='5px'
          padding='3px'
          labelColor='black'
        />
        </div>
        <div className='center'>
          REACT.JS
        <ProgressBar 
          className="Progressbar"
          completed={40}
          maxCompleted={100}
          animateOnRender
          width='80%'
          margin='20px'
          bgColor='grey'
          customLabel='BASIC'
          height='25px'
          borderRadius='5px'
          padding='3px'
          labelColor='black'
          />
        </div>
        <div className='center'>
          CSS
        <ProgressBar 
          className="Progressbar"
          completed={40}
          maxCompleted={100}
          animateOnRender
          width='80%'
          margin='20px'
          bgColor='grey'
          customLabel='BASIC'
          height='25px'
          borderRadius='5px'
          padding='3px'
          labelColor='black'
        />
        </div>
        <div className='center'>
         UNITY
        <ProgressBar 
          className="Progressbar"
          completed={40}
          maxCompleted={100}
          animateOnRender
          width='80%'
          margin='20px'
          bgColor='grey'
          customLabel='BASIC'
          height='25px'
          borderRadius='5px'
          padding='3px'
          labelColor='black'
        />
        </div>
         <div className='center'>
         ENGLISH
        <ProgressBar 
          className="Progressbar"
          completed={75}
          maxCompleted={100}
          animateOnRender
          width='80%'
          margin='20px'
          bgColor='grey'
          customLabel='TOEIC SCORE 730'
          height='25px'
          borderRadius='5px'
          padding='3px'
          labelColor='black'
        />
        </div>
        <div className='center'>
         JAPANESE
        <ProgressBar 
          className="Progressbar"
          completed={50}
          maxCompleted={100}
          animateOnRender
          width='80%'
          margin='20px'
          bgColor='grey'
          customLabel='JLPT LV4'
          height='25px'
          borderRadius='5px'
          padding='3px'
          labelColor='black'
        />
        </div>
        <div className='center'>
         CHINESE
        <ProgressBar 
          className="Progressbar"
          completed={40}
          maxCompleted={100}
          animateOnRender
          width='80%'
          margin='20px'
          bgColor='grey'
          customLabel='BASIC'
          height='25px'
          borderRadius='5px'
          padding='3px'
          labelColor='black'
        />
        </div>  
      
    </MainLayout>
   
  </>
    
   
    
  )
}


export default ResumePage