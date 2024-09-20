import { Box, Grid } from "@mui/material";
import React from "react";
import Image from "../../../components/Image/Image";
import HeroSectionSearch from "./HeroSectionSearch";

const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(HeroSectionImage.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "none",
          minHeight: "60vh",
          padding: "0rem 5%",
        }}
      >
        <Grid container sx={{ alignItems: "center", minHeight: "60vh" }}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <HeroSectionSearch />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box sx={{ padding: "2rem" }}>
              <Image src="/tyreImage.png" width={"100%"} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeroSection;
