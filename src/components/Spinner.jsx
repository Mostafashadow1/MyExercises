import React from "react";
import { Box } from "@mui/material";
import { Circles } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = ({ width, height }) => {
  return (
    <Box width="fit-content" margin="auto">
      <Circles
        height={height ? height : "50px"}
        width={width ? width : "50px"}
        color="#ff496e"
        ariaLabel="circles-loading"
        visible={true}
      />
    </Box>
  );
};

export default Spinner;
