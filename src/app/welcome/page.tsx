import { Avatar, Box, Grid } from "@mui/material";
import React from "react";
import Text from "../components/Text/Text";
import LoginForm from "./LoginForm";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const BackgroundVideo = () => (
  <div className="video-container">
    <video className="video" autoPlay loop muted>
      <source
        src="/videos/login_background.mp4"
        // src="/videos/Rostislav Uzunov - Pexels.com 1.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <div className="overlay" />
  </div>
);

const SocialIcon = ({ children }: any) => {
  return <Box>{children}</Box>;
};

const Welcome = () => {
  return (
    <Grid container>
      <Grid item md={7}>
        <div style={{ position: "relative", height: "100vh", width: "100%" }}>
          <BackgroundVideo />
          <div
            style={{
              position: "relative",
              zIndex: 2,
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            {" "}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box>
                <img src="/artifyAi-logo-white.png" />
                <Text color="secondary">
                  Devleped By{" "}
                  <span style={{ fontWeight: "bold" }}>Bilal Arif</span>
                </Text>
              </Box>
              <Box
                sx={{
                  // border: "1px solid green",
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  justifyContent: "flex-start",
                }}
              >
                <SocialIcon>
                  <GitHubIcon />
                </SocialIcon>
                <SocialIcon>
                  <FacebookIcon />
                </SocialIcon>
                <SocialIcon>
                  <WhatsAppIcon />
                </SocialIcon>
                <SocialIcon>
                  <LinkedInIcon />
                </SocialIcon>
                <SocialIcon>
                  <InstagramIcon />
                </SocialIcon>
              </Box>
            </Box>
          </div>
        </div>
      </Grid>
      <Grid item md={5}>
        <Box
          sx={{
            display: "flex",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <Box sx={{ width: "100%", padding: "45px" }}>
            <Box>
              <Text centerAlign bold textType="title">
                Welcome
              </Text>
            </Box>
            <LoginForm />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Welcome;
