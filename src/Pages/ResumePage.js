import React from 'react'
import styled from 'styled-components'
import { MainLayout , InnerLayout } from '../styles/Layout'
import Title from '../Components/Title'
import ProgressBar from '@ramonak/react-progress-bar'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { margin, width } from '@mui/system'
import CodeIcon from '@mui/icons-material/Code';
import GamesIcon from '@mui/icons-material/Games';
import LanguageIcon from '@mui/icons-material/Language';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import Modal from '@mui/material/Modal';
import work1 from '../img/w1.png'
import work2 from '../img/w2.png' 


const ResumePage = () => {
  const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
 
const [open1 , setOpen1] = React.useState(false);
const handleOpen1 = () => setOpen1(true);
const handleClose1 = () => setOpen1(false);
  return (
    <>
    <MainLayout>
      <InnerLayout>
      <Title title={'My Skills'} span={'my skills'} />
      </InnerLayout>

      
     
      <div className='center'>
       <p>HTML5</p>
        <ProgressBar 
          className="Progressbar"
          completed={50}
          maxCompleted={100}
          animateOnRender
          width='95%'
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
        <p> JAVA </p>
        <ProgressBar 
          className="Progressbar"
          completed={50}
          maxCompleted={100}
          animateOnRender
          width='95%'
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
        <p>  REACT.JS </p>
        <ProgressBar 
          className="Progressbar"
          completed={50}
          maxCompleted={100}
          animateOnRender
          width='95%'
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
        
        <p> CSS </p>
       
        <ProgressBar 
          className="Progressbar"
          completed={50}
          maxCompleted={100}
          animateOnRender
          width='95%'
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
        <p>UNITY</p>
        <ProgressBar 
          className="Progressbar"
          completed={50}
          maxCompleted={100}
          animateOnRender
          width='95%'
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
       <p> ENGLISH</p> 
        <ProgressBar 
          className="Progressbar"
          completed={75}
          maxCompleted={100}
          animateOnRender
          width='95%'
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
         <p>JAPANESE</p>
        <ProgressBar 
          className="Progressbar"
          completed={60}
          maxCompleted={100}
          animateOnRender
          width='95%'
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
       <p> CHINESE</p>
        <ProgressBar 
          className="Progressbar"
          completed={50}
          maxCompleted={100}
          animateOnRender
          width='95%'
          margin='20px'
          bgColor='grey'
          customLabel='BASIC'
          height='25px'
          borderRadius='5px'
          padding='3px'
          labelColor='black'
        />
        </div>  
        
        <InnerLayout>
      <Title title={'Software Skill'} span={'Software Skill'} />
      </InnerLayout>

      
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2 ,md: 3}}  >
      <Grid item xs={3} sx={{}}>
      <Card sx={{width: '90%', marginBottom:5 ,  height:'90%'  , boxShadow: 24  ,  border: '2px solid #C2C2C2'}}  >
      <CardContent  sx={{textAlign:'center'}}>
        <Typography variant="h5" component="div">
           Visual Studio Code
        </Typography>
        <Typography sx={{textAlign:'center' , marginTop:'20px', }} color="text.secondary">
         <CodeIcon  sx={{fontSize:100 , }}/>
        </Typography>
        <Typography variant="body2">
         Basic use of VSCode
        </Typography>
      </CardContent>
      
      <CardActions sx={{textAlign:'center'}}>
        <a href='https://code.visualstudio.com/'>
        <Button size="small" >Learn More</Button>
        </a>
      </CardActions>
      </Card>
      </Grid>

      <Grid item xs={3}>
      <Card sx={{width: '90%', marginBottom:5 , height:'90%' ,boxShadow: 24  ,  border: '2px solid #C2C2C2' }}>

      <CardContent sx={{textAlign:'center'}}>
      <Typography variant="h5" component="div" sx={{textAlign:'center'}}>
          Unity
        </Typography>
        <Typography sx={{textAlign:'center' , marginTop:'20px', }} color="text.secondary">
          <GamesIcon  sx={{fontSize:100 , }} />
        </Typography>
        <Typography variant="body2">
         2D GameDevelopment 
        </Typography>
      </CardContent>
      <CardActions>
        <a href='https://unity.com/'>
        <Button size="small">Learn More</Button>
        </a>
      </CardActions>
      </Card>
      </Grid>
      <Grid item xs={3}>
      <Card sx={{width: '90%', marginBottom:5 ,  height:'90%' ,boxShadow: 24  ,  border: '2px solid #C2C2C2'}}>

      <CardContent sx={{textAlign:'center'}}>  
      <Typography variant="h5" component="div" sx={{textAlign:'center'}}>
          Wordpress
        </Typography>
        <Typography sx={{textAlign:'center' , marginTop:'20px', }} color="text.secondary">
         <LanguageIcon  sx={{fontSize:100 , }}/>
        </Typography>
        <Typography variant="body2">
        WebSite Devlopment
        </Typography>
      </CardContent>
      <CardActions>
        <a href='https://wordpress.com/'>
        <Button size="small">Learn More</Button>
        </a>
      </CardActions>
      </Card>
      </Grid>
      <Grid item xs={3}>
      <Card sx={{width: '90%', marginBottom:5 ,  height:'90%' ,boxShadow: 24  ,  border: '2px solid #C2C2C2'}}>

      <CardContent sx={{textAlign:'center'}}>
      <Typography variant="h5" component="div" sx={{textAlign:'center' }}>
          Photoshop
        </Typography>
        <Typography sx={{ }} color="text.secondary">
          <InsertPhotoIcon sx={{fontSize:120  }}/>
        </Typography>
        <Typography variant="body2">
         Basic Use of Photoshop
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://www.adobe.com/th_th/products/photoshop.html?sdid=KVGRV1PJ&mv=search&ef_id=Cj0KCQiA95aRBhCsARIsAC2xvfzbpacETDQT83gB-tcbVAeHxSbLKLq5LKwnuTctLxKspZinRXIMAxsaAoz6EALw_wcB:G:s&s_kwcid=AL!3085!3!585747114149!e!!g!!photoshop!11255868602!109251042654&gclid=Cj0KCQiA95aRBhCsARIsAC2xvfzbpacETDQT83gB-tcbVAeHxSbLKLq5LKwnuTctLxKspZinRXIMAxsaAoz6EALw_wcB">
        <Button size="small">Learn More</Button>
        </a>
      </CardActions>
      </Card>
      </Grid>
      </Grid>
      <InnerLayout>
      <Title title={'Work'} span={'Experienced'} />
      </InnerLayout>
     
        
   
      <div>
      <Button onClick={handleOpen} sx={{marginLeft: '15%' , backgroundColor:'#C2C2C2' , color:'black' , width:'30%' ,}} >Part-Time</Button>
      <Modal className="modal1"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" color='black'>
            Part-time Translator for Webcomics Application
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <img src={work1} alt=''  ></img>
          </Typography>
        </Box>
      </Modal>

      <Button onClick={handleOpen1} sx={{ marginLeft:'5%' , backgroundColor:'#C2C2C2' , color:'black' , width:'30%' ,}} >Internship</Button>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" color='black'>
           Frontend Devloper And IT Support at SK RealtyPlus
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <img src={work2} alt=''  ></img>
          </Typography>
        </Box>
      </Modal>
     
     
    </div>
    
     
    
        
       




    </MainLayout>
   
  </>   
  )
}

const ResumeStyled = styled.div`  

`
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign:'center'
};


export default ResumePage