import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./Banner.module.css";
import ImageOne from "../../images/image_slide_one.jpg";
import ImageTwo from "../../images/image_slide_two.jpg";
import ImageThree from "../../images/image_slide_three.jpg";
import ImageFour from "../../images/image_slide_four.jpg";
// default banner
const defaultBanner = (
  scrollToExercisesSection,
  imageOne,
  imageTwo,
  imageThree,
  imageFour
) => {
  const slideItems = [
    {
      id: "1",
      title: " Act Like It's Impossible Fail",
      desc: "Check out the mst effectice exercise",
      buttonText: "Expolre Exercise",
      image: imageOne,
    },
    {
      id: "2",
      title: "Hard work is what successful people do!",
      desc: "Check out the mst effectice exercise",
      buttonText: "Expolre Exercise",
      image: imageTwo,
    },
    {
      id: "3",
      title: " Summer bodies are made in winter",
      desc: "Check out the mst effectice exercise",
      buttonText: "Expolre Exercise",
      image: imageThree,
    },
    {
      id: "4",
      title: "Never give up , Great things",
      desc: "Check out the mst effectice exercise",
      buttonText: "Expolre Exercise",
      image: imageFour,
    },
  ];
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={styles.swiper}
    >
      {slideItems.map((item) => (
        <SwiperSlide className={styles.swiper_slide} key={item.id}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={7}
              md={4}
              display="flex"
              flexDirection="column"
              alignItems="start"
              justifyContent="center"
              gap="5px"
            >
              <Typography
                sx={{
                  fontSize: { sm: "24px", lg: "30px", xl: "40px" },
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { sm: "16px", lg: "20px", xl: "30px" },
                }}
              >
                {item.desc}
              </Typography>
              <Box marginTop="10px">
                <Button
                  className="mainButton"
                  size="large"
                  color="error"
                  variant="contained"
                  onClick={scrollToExercisesSection}
                >
                  {item.buttonText}
                </Button>
              </Box>
            </Grid>
            <Grid display="flex" item sm={5} md={8} lg={8} justifyContent="end">
              <img className={styles.image} src={item.image} alt="imaged" />
            </Grid>
          </Grid>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
// small screen
const smallScreenBanner = (scrollToExercisesSection) => {
  return (
    <Box gap="5px" display="flex" flexDirection="column">
      <Typography
        sx={{
          fontSize: "18px",
          color: "var(--whiteColor)",
        }}
      >
        Act Like It's Impossible Fail
      </Typography>

      <Typography
        sx={{
          fontSize: "16px",
          opacity: ".6",
          color: "var(--whiteColor)",
        }}
      >
        Check out the mst effectice exercise
      </Typography>
      <Box marginTop="10px">
        <Button
          className="mainButton"
          size="small"
          color="error"
          variant="contained"
          onClick={scrollToExercisesSection}
        >
          Expolre Exercise
        </Button>
      </Box>
    </Box>
  );
};
const Banner = ({ scrollToExercisesSection }) => {
  return (
    <>
      <Box>
        <Box className="container">
          <Box sx={{ display: { xs: "none", sm: "block" } }} padding="10px 0">
            {defaultBanner(
              scrollToExercisesSection,
              ImageOne,
              ImageTwo,
              ImageThree,
              ImageFour
            )}
          </Box>
          <Box
            sx={{ display: { xs: "flex", sm: "none" } }}
            alignItems="center"
            height="200px"
            padding="10px"
          >
            {smallScreenBanner(scrollToExercisesSection)}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
