import React, { useSyncExternalStore } from "react";
import Page from "../../components/page";
import HeroSection from "./components/HeroSection";
import { Box, Grid, IconButton, Typography, useTheme, useMediaQuery, } from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const is1500 = useMediaQuery('(max-width:1500px)');
  const is1200 = useMediaQuery('(max-width:1200px)');

  const listData = [
    { img:'/cardimg.png', title:'Golden Dragons' , bgcolor:'#081a31cf' , bordercolor:'#3461dd', textcolor:'#3664e9'},
    { img:'/cardimg2.png', title:'River Sweeps', bgcolor:'#0f291ec8' , bordercolor:'#408a13', textcolor:'#408a13'},
    { img:'/cardimg3.png', title:'Phantom', bgcolor:'#d337af2b' , bordercolor:'#8b2d7f', textcolor:'#8b2d7f'},
    { img:'/cardimg4.png', title:'Juwa', bgcolor:'#9064d739' , bordercolor:'#9064d7', textcolor:'#9064d7'},
    { img:'/cardimg5.png', title:'Sin City', bgcolor:'#f1b41b30' , bordercolor:'#f1b51b', textcolor:'#f1b51b'},
    { img:'/cardimg6.png', title:'Casino Poker', bgcolor:'#ad44631f' , bordercolor:'#ad4463', textcolor:'#ad4463'},
  ]

  const navigate = useNavigate();
  // const [name , setName ] =useState('')

 

  return (
    <Page title="Welcome">
      <Box sx={{backgroundColor:'#05151f', padding:'3rem 7%', position:'relative', zIndex:'1'}}>
        <img src="/herov.png" alt="" style={{
          display:isMediumScreen ? 'none': 'block',
          width:'70%',
          position:'absolute', 
          top:0, right:0,
          zIndex:-2
        }} />
        
      <Grid container zIndex={'2'}>
      <Grid item lg={6} md={6} sm={12} xs={12} zIndex={'99'}>
      <Typography sx={{
        color:'#6adb12',
        fontSize:isSmallScreen ?  "3rem" : isMediumScreen ? '5rem' : is1500 ? "5.2rem" :  '7rem', 
          fontWeight:'600', 
          background:'linear-gradient(to right , #69da13  , #9ae01b )',
          WebkitBackgroundClip:'text',
          WebkitTextFillColor:'transparent',
          marginBottom:isSmallScreen ?  "3rem" : isMediumScreen ? '5rem' : is1500 ? "6rem": '7rem',
          zIndex:'99'
        }}>
        WELCOME
        </Typography>
        <Typography sx={{
          color:'white',
          fontSize:isSmallScreen ?  "1.2rem" : isMediumScreen ? '2rem' : is1500 ?  "2rem": '2.5rem', 
          fontWeight:'500', 
          // backgroundImage:'linear-gradient(to right , #69da13 80% , #92e01b 30%)'
        }}>
       Please select a platform you want to make payment for.
        </Typography>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12} >
        <Box sx={{
          display:'flex', justifyContent:'end'
        }}>
          <img src="/girl2.png" alt="" style={{width:'80%', display:isMediumScreen ? 'none': 'block'}}/>
          <img src="/girl3.png" alt="" style={{width:'100%', display:isMediumScreen ? 'block': 'none'}}/>
        </Box>
      </Grid>
      </Grid>
      
        

          {/* ================================CARDS=============================================== */}
      <Box
      sx={{
        marginTop: isSmallScreen ? "-7rem": isMediumScreen ? "-10rem ": is1200 ? "0rem ":'-6rem'
      }} >
        <Grid container spacing={2}>
          {listData.map((row, index)=>(
            <Grid key={index} item lg={4} md={4} sm={6} xs={12}>
            <Box onClick={()=>navigate(`/info/${row.title}` , row)}
             sx={{
              cursor:'pointer',
              backgroundColor:`${row.bgcolor}`, width:'100%',
              border:`1px solid ${row.bordercolor}`,
              //  height:'20rem',
               padding:'1rem',
                boxSizing:'border-box', 
              display:'flex',
               justifyContent:'center',
              flexDirection:'column',
              alignItems:'center', borderRadius:'10px'
            }}>
              <Box>
                <img src={row.img} alt="" style={{width:'100%',
                   height:isSmallScreen ?  "13rem": '15rem',
                    borderRadius:'5px'}} />
              </Box>
              <Box sx={{
                width:'100%',
                 display:'flex',
                justifyContent:'space-between', alignItems:'center'
              }}>
              <Typography sx={{
            color:`${row.textcolor}`,
            fontSize:isSmallScreen ?  "1.2rem" : isMediumScreen ? '1.5rem' : is1500 ? "1.7rem" :  '1.8rem',  
            fontWeight:'600', 
            marginTop:'0.5rem'
            // backgroundImage:'linear-gradient(to right , #69da13 80% , #92e01b 30%)'
          }}>
         {row.title}
          </Typography>
         <IconButton sx={{
         color:`${row.textcolor}`,
         fontSize:isSmallScreen ?  "1.2rem" : isMediumScreen ? '1.5rem' : is1500 ? "1.7rem" :  '1.8rem', 
            fontWeight:'600', 
         }}>
          <FiArrowUpRight/>
         </IconButton>
              </Box>
            </Box>
          </Grid>
          ))}
        
        </Grid>
      </Box>

      </Box>

    

    </Page>
  );
};

export default Landing;
