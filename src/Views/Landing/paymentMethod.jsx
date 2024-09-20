import { Box, Button, Divider, Grid, TextField, Typography, useTheme, useMediaQuery, } from '@mui/material'
import React from 'react'
import Page from '../../components/page/Page'
import {styled} from "@mui/material"



const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
      backgroundColor: 'transparent',
      color: 'white',
     
    },
    '& .MuiInputBase-input': {
      color: 'white',
    //    fontFamily:'Montserrat'
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-input::placeholder': {
      fontSize:  '0.9rem',
      color: 'white',
      opacity: 1, // Ensure the placeholder is fully opaque
    },
  });


const PaymentMethod = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const is1500 = useMediaQuery('(max-width:1500px)');
  const is1200 = useMediaQuery('(max-width:1200px)');
  return (
    <>
      <Page title="Payment Method">
     
    <Box  sx={{backgroundColor:'#05151f', padding:'3rem 10%', 
        display: 'flex',
        justifyContent:'center',
         flexDirection:'column', alignItems:'center'
    }}>
        <Box sx={{
            display: 'flex',
            justifyContent:'center',
            flexDirection:'column', alignItems:'center'
        }}> 
            <Box>
                <img src="/cardimg.png" alt="" style={{width:'100%'}} />
            </Box>
            <Typography sx={{
            color:`#3664e9`,
            fontSize:isSmallScreen ?  "1.2rem" : isMediumScreen ? '1.5rem' : is1500 ? "1.7rem" :  '1.8rem', 
            fontWeight:'600', 
            marginTop:'0.5rem'
            // backgroundImage:'linear-gradient(to right , #69da13 80% , #92e01b 30%)'
          }}>
         Golden Dragons
          </Typography>
        </Box>

        <Box sx={{
  width: '100%',
  display: 'flex',
  alignItems: 'baseline', // Align items vertically center
  justifyContent: 'space-between', // Create space between the steps
  textAlign: 'center',
}}>
  {/* ===========================PERSONAL INFO======================== */}
  <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: isSmallScreen ? '1.5rem':  '3rem',
      width:isSmallScreen ? '1.5rem': '3rem',
      borderRadius: '100px',
      backgroundColor: 'transparent',
      border: '1px solid gray',
      zIndex:2,
    }}>
      <Typography sx={{ color: '#3462dd', fontSize: isSmallScreen ? '1rem': '1.5rem' }}>
        1
      </Typography>
    </Box>
    <Typography sx={{
      color: 'white',
      marginTop: '0.5rem',
      fontSize:isSmallScreen ? '0.7rem': '1rem', 
    }}>
      Personal Info
    </Typography>
  </Box>

  {/* ======================================DIVIDER===================== */}
  <Box sx={{
    width: 'auto', // Full width to fill the space between the two circles
    height: '1px',
    borderBottom: '1px dashed #3462dd',
    zIndex:1,
    mx:isSmallScreen ? -3 : -3, // Add horizontal margin for spacing
    flexGrow: 1 // Allow the divider to grow and fill available space
  }}>
  </Box>

  {/* ===========================PAYMENT METHOD======================== */}
  <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex:2,
  }}>
    <Box sx={{
      backgroundColor:'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: isSmallScreen ? '1.5rem':  '3rem',
      width:isSmallScreen ? '1.5rem': '3rem',
      borderRadius: '100px',
      border: '1px solid gray'
    }}>
      <Typography sx={{ color: '#3462dd', fontSize:isSmallScreen ? "1rem": '1.5rem' }}>
        2
      </Typography>
    </Box>
    <Typography sx={{
      color: 'white',
      marginTop: '0.5rem', 
      fontSize:isSmallScreen ? '0.7rem': '1rem', 
      // width:'8rem'
    }}>
      Payment Method
    </Typography>
  </Box>
</Box>

        <Box sx={{
          marginTop:'2rem',
            backgroundColor:'#3461dd39',
            width:'100%',
            padding:isSmallScreen ? '1rem': '2rem', 
            boxSizing:'border-box',
             border:'1px solid #3461dd',
             borderRadius:'10px'
        }}>
        <form action="" style={{
            display:'flex',
             flexDirection:'column',
              justifyContent:'center', 
              alignItems:'center'
        }} >
            <Box sx={{
                width:'100%',
                display:'flex', 
                flexWrap:'wrap',
                justifyContent:'space-between',
                 gap:2 
                          }}>
                <Box sx={{display :'flex',}}>
                <Typography sx={{
            color:`white`,
            fontSize: isSmallScreen ? '0.9rem':'1rem', 
            fontWeight:'500', 
           marginRight:'3rem'
            // backgroundImage:'linear-gradient(to right , #69da13 80% , #92e01b 30%)'
          }}>
         Name:
          </Typography>
          <Typography sx={{
            color:`white`,
            fontSize: isSmallScreen ? '0.9rem':'1rem',
            fontWeight:'400', 
            // backgroundImage:'linear-gradient(to right , #69da13 80% , #92e01b 30%)'
          }}>
         Shyamal Patel
          </Typography>
                </Box>

                <Box sx={{display :'flex',}}>
                <Typography sx={{
            color:`white`,
            fontSize: isSmallScreen ? '0.9rem':'1rem', 
            fontWeight:'500', 
           marginRight:'3rem'
            // backgroundImage:'linear-gradient(to right , #69da13 80% , #92e01b 30%)'
          }}>
         Number:
          </Typography>
          <Typography sx={{
            color:`white`,
            fontSize: isSmallScreen ? '0.9rem':'1rem', 
            fontWeight:'500', 
            // backgroundImage:'linear-gradient(to right , #69da13 80% , #92e01b 30%)'
          }}>
         18773419007
          </Typography>
                </Box>

                <Box sx={{display :'flex',}}>
                <Typography sx={{
            color:`white`,
            fontSize: isSmallScreen ? '0.9rem':'1rem',
            fontWeight:'400', 
            marginRight:'3rem'
            // backgroundImage:'linear-gradient(to right , #69da13 80% , #92e01b 30%)'
          }}>
         You are paying:
          </Typography>
          <Typography sx={{
            color:`white`,
            fontSize: isSmallScreen ? '0.9rem':'1rem',
            fontWeight:'500', 
            // backgroundImage:'linear-gradient(to right , #69da13 80% , #92e01b 30%)'
          }}>
         $100
          </Typography>
                </Box>
            </Box>
            <Divider sx={{
                color:'gray', backgroundColor:'gray', width:'100%', height:'0.1px', margin:'1rem 0rem'
            }} />

            <Box sx={{display:'flex' , alignItems:'start' , }}>
                <input type="checkbox" />
                <Typography sx={{
            color:`white`,
            fontSize: isSmallScreen ? '0.9rem':'1rem', 
            fontWeight:'400',
            marginLeft:'1rem' 
            // backgroundImage:'linear-gradient(to right , #69da13 80% , #92e01b 30%)'
          }}>
          I authorize Coconut Online services to charge my debit/credit card for the amount entered above. Online services received and no physical goods or merchandise to be shipped involved in this transaction. Once services are paid for, it’s not refundable.
          </Typography>
            </Box>
            <Divider sx={{
                color:'gray', backgroundColor:'gray', width:'100%', height:'0.1px', margin:'1rem 0rem'
            }} />
             
            <Box sx={{width:'100%'}}>
            <Typography sx={{
            color:`white`,
            fontSize: isSmallScreen ? '0.9rem':'1rem', 
            fontWeight:'500',
            marginBottom:'0.5rem'
          }}>
         Select Payment Method
          </Typography>
            </Box>
            <Grid container spacing={2} marginBottom={'1rem'} >
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <Button sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    width:'100%',
                    border:'1px solid gray', 
                    color:'white', textTransform:'none'
                }}>
                   Paypal
                    <img src="/paypal.png" alt="" width={'30rem'} />
                </Button>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <Button sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    width:'100%',
                    border:'1px solid gray', 
                    color:'white', textTransform:'none'
                }}>
                    Debit or Credit Card
                    <img src="/creditcard.png" alt="" width={'30rem'} />
                </Button>
                </Grid>
            </Grid>
            <Button 
          
             sx={{marginTop:'2rem', color:'white', textTransform:'none',
            //   backgroundColor:theme.palette.primary.main,
            //   padding: isSmall ? '0.5rem 1rem' : '0.8rem 2rem',
            //    fontSize:isSmall ? '0.9rem': '1rem' ,
            background:'linear-gradient(to right , #69da13  , #9ae01b )',
               fontWeight:500,
               border:'1px solid #98c447',
               transition:'0.3s',
               width:'8rem',
               justifySelf:'center',
               '&:hover':{
                color:'white',
                backgroundColor:"transparent",
                border:'1px solid white'
               }
            }}
            // onClick={handleFormSubmit}
            >
                Next
            </Button>

          </form>
        </Box>
    </Box>
    </Page>
    </>
  )
}

export default PaymentMethod