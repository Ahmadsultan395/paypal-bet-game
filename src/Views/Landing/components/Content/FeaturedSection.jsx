import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Btn from "../../../../components/Btn/Btn";

const cardStyles = {
  position: "relative",
  backgroundImage: "url(/tyreImage.png)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderRadius: "25px",
  height: "auto",
  width: "100%",
  overflow: "hidden",
};

const overlayStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  borderRadius: "25px",
  zIndex: 1,
};

const contentStyles = {
  position: "relative",
  zIndex: 2,
  color: "white",
  padding: "1rem",
};

const FeaturedCard = ({ title, description }) => (
  <Grid item lg={4} md={4} sm={12} xs={12}>
    <Box sx={cardStyles}>
      <Box sx={overlayStyles} />
      <Box sx={contentStyles}>
        <Typography sx={{ fontSize: "1.5rem", fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography>{description}</Typography>
        <br />
        <Btn sx={{ textTransform: 'none', color: 'white' }}>Shop Now</Btn>
      </Box>
    </Box>
  </Grid>
);

const FeaturedSection = () => {
  const title = "Soker du dack eller falg till dill slap?";
  const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse
    mollitia iure sapiente inventore quaerat sed dolor, excepturi aut
    fugiat a atque autem! Cumque blanditiis in asperiores aliquam
    quasi omnis.`;


    

  return (
    <Box
      sx={{
        backgroundColor: "#d5eacc",
        padding: "2rem 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Grid container spacing={3}>
        <FeaturedCard title={title} description={description} />
        <FeaturedCard title={title} description={description} />
        <FeaturedCard title={title} description={description} />
      </Grid>
    </Box>
  );
};

export default FeaturedSection;
