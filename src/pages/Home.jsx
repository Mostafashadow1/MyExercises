import React, { useEffect, useRef, useState } from "react";
import {
  Banner,
  ImageGallery,
  TitleSection,
  SearchInput,
  Spinner,
  Exercises,
} from "components";
import { Box } from "@mui/material";
import Masonry from "react-masonry-css";
import ImageG1 from "images/image_g_1.jpg";
import ImageG2 from "images/image_g_2.jpg";
import ImageG3 from "images/image_g_3.jpg";
import ImageG4 from "images/image_g_4.jpg";
import ImageG5 from "images/image_g_5.jpg";
import ImageG6 from "images/image_g_6.jpg";
import ImageG7 from "images/image_g_7.jpg";
import ImageG8 from "images/image_g_8.jpg";
import ImageG9 from "images/image_g_9.jpg";
import ImageG10 from "images/image_g_10.jpg";
import ImageG11 from "images/image_g_11.jpg";
import ImageG12 from "images/image_g_12.jpg";
import ImageG13 from "images/image_g_13.jpg";
import ImageG14 from "images/image_g_14.jpg";
import ImageG15 from "images/image_g_15.jpg";
import ImageG16 from "images/image_g_16.jpg";
import ImageG17 from "images/image_g_17.jpg";
import ImageG18 from "images/image_g_18.jpg";
import ImageG19 from "images/image_g_19.jpg";
import ImageG20 from "images/image_g_20.jpg";
import ImageG21 from "images/image_g_21.jpg";
import { getData } from "utils/fetchData";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const exercisesScrollRef = useRef();

  // get exercises data  reload page
  useEffect(() => {
    async function fetchData() {
      const exercises = await getData("/exercises");
      setExercises(exercises);
    }
    fetchData();
  }, []);

  // on change
  const handleShangeSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  // handle Search term
  const handleSearchTerm = async () => {
    setLoading(true);
    // get all data
    const allExercisesData = await getData("/exercises");
    const searchExercises = allExercisesData.filter(
      (exercises) =>
        exercises.target.toLowerCase().includes(searchTerm) ||
        exercises.name.toLowerCase().includes(searchTerm) ||
        exercises.bodyPart.toLowerCase().includes(searchTerm) ||
        exercises.equipment.toLowerCase().includes(searchTerm)
    );
    setSearchTerm("");
    setLoading(false);
    setExercises(searchExercises);
  };

  // images gallery
  const imagesGallery = [
    { id: "1", src: ImageG1, alt: "image1" },
    { id: "2", src: ImageG2, alt: "image2" },
    { id: "3", src: ImageG3, alt: "image3" },
    { id: "4", src: ImageG4, alt: "image4" },
    { id: "5", src: ImageG5, alt: "image5" },
    { id: "6", src: ImageG6, alt: "image6" },
    { id: "7", src: ImageG7, alt: "image7" },
    { id: "8", src: ImageG8, alt: "image8" },
    { id: "9", src: ImageG9, alt: "image9" },
    { id: "10", src: ImageG10, alt: "image10" },
    { id: "11", src: ImageG11, alt: "image11" },
    { id: "12", src: ImageG12, alt: "image12" },
    { id: "13", src: ImageG13, alt: "image13" },
    { id: "14", src: ImageG14, alt: "image14" },
    { id: "15", src: ImageG15, alt: "image15" },
    { id: "16", src: ImageG16, alt: "image16" },
    { id: "17", src: ImageG17, alt: "image17" },
    { id: "18", src: ImageG18, alt: "image18" },
    { id: "19", src: ImageG19, alt: "image19" },
    { id: "20", src: ImageG20, alt: "image20" },
    { id: "21", src: ImageG21, alt: "image21" },
  ];
  // default gallery screen
  const defaultGallery = () => {
    // breakpoint responsive
    const breakpointColumnsObj = {
      default: 3,
      1100: 2,
      700: 2,
      500: 1,
    };
    return (
      <Masonry
        style={{ maxWidth: "100%" }}
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {imagesGallery.map((imageGallery) => (
          <div key={imageGallery.id}>
            <ImageGallery image={imageGallery} />
          </div>
        ))}
      </Masonry>
    );
  };
  // mobile gallery screen
  const mobileGallery = () => {
    return (
      <>
        {imagesGallery.map((imageGallery) => (
          <div key={imageGallery.id}>
            <ImageGallery image={imageGallery} mobile />
          </div>
        ))}
      </>
    );
  };

  // scroll into section exercises when click the button banner
  const scrollToExercisesSection = () => {
    exercisesScrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Banner scrollToExercisesSection={scrollToExercisesSection} />
      <Box py="10px">
        <Box className="container" borderTop="1px solid var(--lineColor)">
          <Box paddingBottom="30px">
            <TitleSection titleOne="make your body" titleTwo="like those" />
            {!imagesGallery.length && <Spinner />}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {defaultGallery()}
            </Box>
            <Box
              sx={{ overflowX: "scroll", display: { xs: "flex", sm: "none" } }}
            >
              {mobileGallery()}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box py="10px" backgroundColor="var(--black)">
        <Box className="container">
          <TitleSection titleOne="awesome exercises" titleTwo="shoud know" />
          <SearchInput
            searchTerm={searchTerm}
            onChange={handleShangeSearch}
            handleSearchTerm={handleSearchTerm}
          />
          <Box margin="100px 0px" minHeight="200px" ref={exercisesScrollRef}>
            {loading ? <Spinner /> : <Exercises exercises={exercises} />}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
