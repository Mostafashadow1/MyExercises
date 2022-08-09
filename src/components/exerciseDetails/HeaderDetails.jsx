import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
const HeaderDetails = ({ exerciseDetails }) => {
  return (
    <Box backgroundColor="#000">
      <Grid
        container
        spacing={2}
        sx={{ marginTop: { xs: "0px", md: "50px" } }}
        padding="20px"
        borderRadius="10px"
      >
        <Grid item xs={12} md={6}>
          <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
            <Typography
              sx={{ fontSize: { lg: "64px", xs: "30px" } }}
              fontWeight={700}
              textTransform="capitalize"
            >
              {exerciseDetails?.name}
            </Typography>
            <Typography
              sx={{ fontSize: { lg: "24px", xs: "18px" } }}
              color="#ccc"
            >
              Exercises keep you strong.{" "}
              <span style={{ textTransform: "capitalize" }}>
                {exerciseDetails?.name}
              </span>{" "}
              bup is one of the best <br /> exercises to target your{" "}
              {exerciseDetails?.target}. It will help you improve your <br />{" "}
              mood and gain energy.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box backgroundColor="#000" display="flex" justifyContent="center">
            <img
              src={exerciseDetails?.gifUrl}
              alt={exerciseDetails?.name}
              style={{ objectFit: "contain", filter: "invert(1)" }}
              loading="lazy"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeaderDetails;
