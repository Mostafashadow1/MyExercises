import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import notfound from "images/notfound.png";
const NotFound = () => {
  return (
    <Box maxWidth="1000px" margin="10px auto">
      <Box>
        <Box>
          <img
            src={notfound}
            style={{ width: "100%", height: "240px" }}
            alt="Not Found"
          />
        </Box>
        <Typography
          variant="h4"
          className="logo_text"
          textAlign="center"
          color="#fff"
          mt="20px"
        >
          This page not found go to the home page :
        </Typography>
        <Link to="/">
          <Typography
            variant="h4"
            className="logo_text"
            textAlign="center"
            mt="10px"
          >
            MyExercises
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;
