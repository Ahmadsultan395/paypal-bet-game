import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Image from "../../../../components/Image/Image";
import { useLocation } from "react-router-dom";

const TopHeader = () => {
  const location = useLocation();
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  
  const currentPath = location.pathname;

  const isHidden =
  currentPath === "/order-confirm" ||
  currentPath === "/login" ||
  currentPath === "/sign-up" ||
  currentPath === "/email-confirmation-otp";
  if (isHidden) {
    return null;
  }

  return (
    <>
      <Box sx={{ backgroundColor: "white", padding: "0.5rem 5%", display:isSmall ? 'none':'block' }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }} gap={3}>
            <Box>
              <Image src="/countryFlag.png" />
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }} gap={3}>
            <Typography sx={{ fontSize: "0.8rem", color: "grey" }}>
              Questions & Answers
            </Typography>

            <Typography sx={{ fontSize: "0.8rem", color: "grey" }}>
              Contact Us
            </Typography>
            <Typography sx={{ fontSize: "0.8rem", color: "grey" }}>
              Contract Customer
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default TopHeader;
