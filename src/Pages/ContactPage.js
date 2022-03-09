import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { MainLayout , InnerLayout } from '../styles/Layout'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const ContactPage = () => {
  return (
    <Iconstyled>
    <MainLayout>
      <InnerLayout>
       <Title title={'Contact'} span={'Contact'} />
      </InnerLayout>  
      <div className='typography'>
      <div className='icons'>
                <a href='https://www.facebook.com/'  style={{padding:10 , marginTop:20}}  >
                <div className="icon i-facebook" ><FacebookIcon sx={{fontSize:200, }}/></div>  
                </a>
                <a href='https://github.com/PPhuripat' style={{padding:10 ,  marginTop:20}}>
                <div className="icon i-github"><GitHubIcon  sx={{fontSize:200 , }}/></div>  
                </a>
                <a href='https://www.instagram.com/' style={{padding:10 ,  marginTop:20}}>
                <div className="icon i-youtube"><InstagramIcon  sx={{fontSize:200 ,  }}/></div>
                </a>
      </div>
      </div>
    </MainLayout>

   
    </Iconstyled>
  )
}
const Iconstyled = styled.header`

width: 100%;
height: 100vh;
position: relative;


.typography{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    
    .icons{
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        

        .icon{
            
            border: 10px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all .4s ease-in-out;
            cursor: pointer;
            
            &:hover{
                border: 10px solid var(--primary-color);
                color: var(--primary-color);
            }
            &:not(:last-child){
                margin-right: 1rem;
            }
            svg{
                margin: .5rem;
            }
        }

        .i-youtube{
            &:hover{
                border: 10px solid red;
                color: red;
              
            }
        }
        .i-github{
            &:hover{
                border: 10px solid #5F4687;
                color: #5F4687;
            }
        }
    }
}

`  


export default ContactPage