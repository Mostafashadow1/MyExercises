import { Box, Typography } from "@mui/material";
import React from "react";
const TitleSection = ({ titleOne, titleTwo }) => {
  return (
    <Box
      margin="5vh 0px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        textTransform="capitalize"
        textAlign="center"
        variant="h4"
        sx={{
          fontSize: { xs: "24px", lg: "30px", xl: "40px" },
          color: "var(--secondColor)",
        }}
      >
        {titleOne && titleOne}
      </Typography>
      <Typography
        textTransform="capitalize"
        textAlign="center"
        variant="h4"
        sx={{
          fontSize: { xs: "24px", lg: "30px", xl: "40px" },
          color: "var(--secondColor)",
        }}
      >
        {titleTwo && titleTwo}
      </Typography>
    </Box>
  );
};

export default TitleSection;
