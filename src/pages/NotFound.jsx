import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <Box sx={{ display: "grid", placeItems: "center", height: "30vh" }}>
      <Box>
        <Typography variant="h4" sx={{ color: "#fff" }}>
          This page not found go to the home page :
        </Typography>
        <Link to="/">
          <Typography
            variant="h4"
            className="logo_text"
            textAlign="center"
            mt="10px"
          >
            Home Page
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;
