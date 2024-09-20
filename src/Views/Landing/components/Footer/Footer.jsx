import { Box, Divider, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBox from "../../../../components/FlexBox/FlexBox";
import Image from "../../../../components/Image/Image";
import Heading from "../../../../components/Text/Heading";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const StyledFooter = styled(Box)(({ theme }) => ({
  background: "#272727",
  color: "white",
  padding: "2rem 5%",
}));

const Footer = () => {
  const navigate = useNavigate();
const location = useLocation()


const currentPath = location.pathname;

const isHidden =
currentPath === "/order-confirm" ||
currentPath === "/login" ||
currentPath === "/sign-up" ||
currentPath === "/email-confirmation-otp";

if (isHidden) {
  return null;
}
  const pages = [
    { label: "Home", route: "/" },
    { label: "Find Products", route: "/find-products" },
    { label: "Deck", route: "/deck" },
    { label: "Rims", route: "/rims" },
    { label: "Trailer", route: "/trailer" },
    { label: "Moped Car", route: "/moped-car" },
    { label: "Outlet", route: "/outlet" },
  ];

  const services = [
    { label: "Contact Us", route: "/contact" },
    { label: "Questions & Answers", route: "/faq" },
    { label: "Blog", route: "/blog" },
    { label: "Terms of Purchases", route: "/terms" },
    { label: "Assembly Workshops", route: "/workshops" },
    { label: "EU Labeling of tires", route: "/labeling" },
  ];

  return (
    <StyledFooter>
      <Grid container spacing={5}>
        <Grid item lg={3} sm={6} xs={12}>
          <FlexBox sx={{ gap: "1rem" }}>
            <Image src="/Vector.png" />
            <Heading sx={{ fontSize: "1.3rem" }}>Your Logo</Heading>
          </FlexBox>
          <Typography sx={{ fontSize: "0.9rem", mt: 3 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </Typography>
          <FlexBox sx={{ gap: "1rem", mt: 3 }}>
            <FaFacebook /> <FaTwitter /> <FaLinkedin />
          </FlexBox>
        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
          <Heading sx={{ fontSize: "1.2rem" }}>Pages</Heading>
          {pages.map((page, idx) => (
            <Typography
              key={idx}
              sx={{
                mt: idx === 0 ? 3 : 2,
                cursor: "pointer",
                fontSize: "0.9rem",
              }}
              onClick={() => navigate(page.route)}
            >
              {page.label}
            </Typography>
          ))}
        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
          <Heading sx={{ fontSize: "1.2rem" }}>Customer Services</Heading>
          {services.map((service, idx) => (
            <Typography
              key={idx}
              sx={{
                mt: idx === 0 ? 3 : 2,
                cursor: "pointer",
                fontSize: "0.9rem",
              }}
              onClick={() => navigate(service.route)}
            >
              {service.label}
            </Typography>
          ))}
        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
          <Heading sx={{ fontSize: "1.2rem" }}>Contact Us</Heading>
          <Typography sx={{ mt: 3, fontSize: "0.9rem", mb: 2 }}>
            +92-300-0000000
          </Typography>
          <Typography sx={{ fontSize: "0.9rem", mb: 2 }}>
            info@saeedantechpvt.com
          </Typography>
          <Typography sx={{ fontSize: "0.9rem", mb: 2 }}>
            92, Expertsystems, Lahore
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Divider sx={{ backgroundColor: "white" }} />
      <br />

      <FlexBox sx={{ justifyContent: "center" }}>
        <Typography sx={{ fontSize: "0.7rem" }}>
          Copyright Dibdaa 2023 All rights reserved.
        </Typography>
      </FlexBox>
    </StyledFooter>
  );
};

export default Footer;
