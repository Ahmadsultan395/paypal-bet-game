import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SendOrderId } from '../../store/actions/dataAction';

const Success = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(null); // Track success or failure
  const id = localStorage.getItem("myid");

  useEffect(() => {
    setLoading(true);
    dispatch(SendOrderId(id))
      .then((res) => {
        setLoading(false);
        setIsSuccess(true); // API hit was successful
      })
      .catch((err) => {
        setLoading(false);
        setIsSuccess(false); // API hit failed
      });
  }, [dispatch, id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', flexDirection: 'column' }}>
        <CircularProgress />
        <Typography sx={{ marginTop: '1rem', textAlign: 'center' }}>Please Wait.....</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', height: '90vh', flexDirection: 'column' }}>
      <Box sx={{ width: '20%' }}>
        {isSuccess ? (
          <img src='/Green_tick.svg' alt='Success' width={'100%'} />
        ) : (
          <img src='/cross.png' alt='Failure' width={'80%'} />
        )}
      </Box>
      <Typography sx={{ fontSize: '2rem', fontWeight: '800' }}>
        {isSuccess ? 'Payment Successful' : 'Payment Not Successful'}
      </Typography>

      <br />
      <Button variant='contained' sx={{ textTransform: 'none', borderRadius: '0px', padding: '0.7rem 3rem' }} onClick={() => navigate('/')}>
        Go back to Website
      </Button>
    </Box>
  );
};

export default Success;
