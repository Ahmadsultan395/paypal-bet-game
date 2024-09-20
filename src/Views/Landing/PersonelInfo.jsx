import { Box, Button, Divider, Grid, TextField, Typography, useTheme, useMediaQuery, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import Page from '../../components/page/Page';
import { styled } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import { SendFormData } from '../../store/actions/dataAction';
import { useDispatch } from 'react-redux';
import { useSnackbar } from "notistack";


const CustomTextField = styled(TextField)(({ theme }) => ({
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
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'white',
  },
  '& .MuiOutlinedInput-input::placeholder': {
    fontSize: '0.9rem',
    color: 'white',
    opacity: 1,
  },
}));

const PersonelInfo = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const is1500 = useMediaQuery('(max-width:1500px)');
  const is1200 = useMediaQuery('(max-width:1200px)');

  const {enqueueSnackbar} = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log('namenamenmaenmae', id);

  const listData = [
    { img: '/cardimg.png', title: 'Golden Dragons', bgcolor: '#081a31cf', bordercolor: '#3461dd', textcolor: '#3664e9' },
    { img: '/cardimg2.png', title: 'River Sweeps', bgcolor: '#0f291ec8', bordercolor: '#408a13', textcolor: '#408a13' },
    { img: '/cardimg3.png', title: 'Phantom', bgcolor: '#d337af2b', bordercolor: '#8b2d7f', textcolor: '#8b2d7f' },
    { img: '/cardimg4.png', title: 'Juwa', bgcolor: '#9064d739', bordercolor: '#9064d7', textcolor: '#9064d7' },
    { img: '/cardimg5.png', title: 'Sin City', bgcolor: '#f1b41b30', bordercolor: '#f1b51b', textcolor: '#f1b51b' },
    { img: '/cardimg6.png', title: 'Casino Poker', bgcolor: '#ad44631f', bordercolor: '#ad4463', textcolor: '#ad4463' },
  ];

  const gameData = listData.find((item) => item.title === id);

  if (!gameData) {
    return <div>Data not Found</div>;
  }

  const initialvalue = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    amount: '',
    game: `${gameData.title}`,
  };

  const [formValue, setFormValue] = useState(initialvalue);
  const [loading , setLoading] = useState(false);
  console.log('form datata ', formValue);

  const handleFormValue = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await dispatch(SendFormData(formValue)); // Await the dispatch to get the response
      console.log('Response:', res);
      enqueueSnackbar(res.data.message, { variant: 'success' });
      setFormValue(initialvalue);
      window.location.replace(res.data.link);
      const id = res.data.data.id;
      localStorage.setItem('myid', id);
      // navigate(`/success/${id}`)
    } catch (error) {
      enqueueSnackbar(error.response?.data?.message || 'An error occurred', { variant: 'error' });
      console.error('API error:', error); // Log the error object
    } finally {
      setLoading(false); // Ensure loading is set to false in both success and error cases
    }
  };
  

  return (
    <>
      <Page title="Personel Info">
        <Box sx={{ backgroundColor: '#05151f', padding: '3rem 10%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
            <Box>
              <img src={gameData.img} alt="" style={{ width: '100%', height: 'auto' }} />
            </Box>
            <Typography sx={{ color: `${gameData.textcolor}`, fontSize: isSmallScreen ? "1.2rem" : isMediumScreen ? '1.5rem' : '1.8rem', fontWeight: '600', marginTop: '0.5rem' }}>
              {gameData.title}
            </Typography>
          </Box>

          <Box sx={{ width: '100%', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', textAlign: 'center' }}>
            {/* Personal Info Step */}
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: isSmallScreen ? '1.5rem' : '3rem', width: isSmallScreen ? '1.5rem' : '3rem', borderRadius: '100px', backgroundColor: 'white', border: '1px solid gray', zIndex: 2 }}>
                <Typography sx={{ color: '#3462dd', fontSize: isSmallScreen ? '1rem' : '1.5rem' }}>1</Typography>
              </Box>
              <Typography sx={{ color: 'white', marginTop: '0.5rem', fontSize: isSmallScreen ? '0.8rem' : '1rem' }}>
                Personal Info
              </Typography>
            </Box>

            {/* Divider */}
            <Box sx={{ width: 'auto', height: '1px', borderBottom: '1px dashed #3462dd', zIndex: 1, mx: isSmallScreen ? -4 : -4.5, flexGrow: 1 }}></Box>

            {/* Payment Method Step */}
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', zIndex: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: isSmallScreen ? '1.5rem' : '3rem', width: isSmallScreen ? '1.5rem' : '3rem', borderRadius: '100px', border: '1px solid gray' }}>
                <Typography sx={{ color: '#3462dd', fontSize: isSmallScreen ? "1rem" : '1.5rem' }}>2</Typography>
              </Box>
              <Typography sx={{ color: 'white', marginTop: '0.5rem', fontSize: isSmallScreen ? '0.8rem' : '1rem' }}>
                Payment Method
              </Typography>
            </Box>
          </Box>


          {loading ? ( 
      <Box sx={{
        display:'flex', justifyContent:'center', alignItems:'center', height:'50vh'
      }}>
        <CircularProgress/>
      </Box>
    ) : (
      <>
      <Box sx={{
            marginTop: '2rem',
            backgroundColor: '#3461dd39',
            width: '100%',
            padding: isSmallScreen ? '1rem' : '2rem',
            boxSizing: 'border-box',
            border: '1px solid #3461dd',
            borderRadius: '10px'
          }}>
            <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Grid container spacing={2} marginBottom={'1rem'}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <CustomTextField
                    onChange={handleFormValue}
                    value={formValue.firstName}
                    name="firstName"
                    placeholder="Full Name"
                    size="small"
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <CustomTextField
                    onChange={handleFormValue}
                    value={formValue.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    size="small"
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} marginBottom={'1rem'}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <CustomTextField
                    onChange={handleFormValue}
                    value={formValue.email}
                    name="email"
                    placeholder="Email Address"
                    size="small"
                    variant='outlined'
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <CustomTextField
                    onChange={handleFormValue}
                    value={formValue.phone}
                    name="phone" // Updated name to match initial state
                    placeholder="Phone No."
                    size="small"
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
              </Grid>
              <CustomTextField
                onChange={handleFormValue}
                value={formValue.amount}
                name="amount"
                placeholder="Amount"
                size="small"
                variant='outlined'
                fullWidth
              />
              <Button
               onClick={handleFormSubmit}
                variant='contained'
                sx={{ marginTop: '1rem', 
                  background:'linear-gradient(to right , #69da13  , #9ae01b )',
                 }}
              >
                Next
              </Button>
            </form>
          </Box>
      </>
    )}
          
        </Box>
      </Page>
    </>
  );
};

export default PersonelInfo;
