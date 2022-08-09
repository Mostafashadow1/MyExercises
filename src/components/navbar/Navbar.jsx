import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "images/logo.png";
const Navbar = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box className={styles.navbar_container}>
      <Box p="10px" className=" container" onClick={scrollTop}>
        <Link to="/">
          <Box display="flex" alignItems="center" gap="4px">
            <Typography variant="h4" className="logo_text">
              MyExercises
            </Typography>
            <img src={logo} alt="logo" style={{ width: "50px" }} />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
