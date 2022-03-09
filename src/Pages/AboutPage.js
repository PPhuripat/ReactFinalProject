import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { MainLayout , InnerLayout } from '../styles/Layout'
import Image  from '../img/me.jpg'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
const AboutPage = () => {
  return (
    <>
    <MainLayout>
      
      <InnerLayout>
       <Title title={'About me'} span={'About me'} />
      </InnerLayout>
    
      <div className='image' >
        <img  src={Image} alt=''></img >
        <RightSide>
        <p>Name : Phuripat Bungwai</p>
        <p>NickName : Copter</p>
        <p>University : Thai-Nichi Institute of Technology</p>
        <p>Faculty : Information Technology</p>
        <p>Interesting in : Game Industry Career , Cooking And Translating</p>
        <br></br>
        <br></br>
        <br></br>
       <p>" I'm may not good as others people but I'm ready to learn and developing myself to achive my goal " </p>
      </RightSide>
      </div>
      <InnerLayout>
       <Title title={'History'} span={'Education'} />
      </InnerLayout>
    
     
      <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
         
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector  sx={{ bgcolor: 'text.main' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            2015
          </Typography>
          <Typography>Matthayom Taksin Rayong School(JP-ENG)</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          
        </TimelineOppositeContent>
        <TimelineSeparator>
         
          <TimelineDot >
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector  sx={{ bgcolor:  'text.main' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            2016
          </Typography>
          <Typography>Matthayom Taksin Rayong School(JP-ENG)</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
         
          <TimelineDot >
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor:  'text.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           2017
          </Typography>
          <Typography>Matthayom Taksin Rayong School(JP-ENG)</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
        
          <TimelineDot >
            < SchoolIcon/>
          </TimelineDot>
          <TimelineConnector  sx={{ bgcolor:  'text.main' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            2018
          </Typography>
          <Typography>Thai-Nichi Institute of Technology(IT)</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
        
          <TimelineDot >
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor:  'text.main'}} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           2019
          </Typography>
          <Typography>Thai-Nichi Institute of Technology(IT)</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor:  'text.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           2020
          </Typography>
          <Typography>Thai-Nichi Institute of Technology(IT)</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
         
          <TimelineDot >
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor:  'text.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           2021
          </Typography>
          <Typography>Thai-Nichi Institute of Technology(IT)</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector  sx={{ bgcolor:  'text.main' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           2022
          </Typography>
          <Typography>Thai-Nichi Institute of Technology(IT)</Typography>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
    
      
      
       
      
    </MainLayout>
    </>
  )
}

const RightSide = styled.div`
  width: 50%;
  padding: 40px;
  float:right;
  justify-content: space-between;
`



export default AboutPage