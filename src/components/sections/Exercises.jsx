import { Button, Stack, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import Masonry from "react-masonry-css";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";
const Exercises = ({ exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const refScroll = useRef();
  // number exercises want show
  const numberExerciseShow = 12;
  // get index last element exercise in this page
  let indexLastElement = currentPage * numberExerciseShow;
  // get index firt element exercise in this page
  let indexFirstElement = indexLastElement - numberExerciseShow;
  // current Exercises Show
  const currentExercisesShow =
    exercises && exercises.slice(indexFirstElement, indexLastElement);

  const changePaginate = (e, value) => {
    setCurrentPage(value);
    refScroll.current.scrollIntoView({ behavior: "smooth" });
  };
  // breakpoint responsive
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1,
  };

  return (
    <Box ref={refScroll}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {currentExercisesShow &&
          currentExercisesShow.map((exercise, idx) => (
            <Link key={idx} to={`/exercise/${exercise.id}`}>
              <Tooltip title="Show More About This Exercise" arrow>
                <Box
                  key={idx}
                  border="1px dashed var(--lineColor)"
                  borderRadius="4px"
                >
                  <Box>
                    <img
                      src={exercise?.gifUrl}
                      alt={exercise?.name}
                      style={{
                        width: "100%",
                        display: "block",
                        filter: "invert(1)",
                      }}
                    />
                  </Box>
                  <Box padding="10px">
                    <Typography
                      variant="h5"
                      sx={{ fontSize: { xs: "18px", md: "25px" } }}
                      textTransform="capitalize"
                      m="10px 0px"
                    >
                      {exercise?.name}
                    </Typography>
                    <Button
                      size="large"
                      variant="outlined"
                      sx={{
                        backgroundColor: "var(--black)",
                        color: "#fff",
                        textTransform: "capitalize !important",
                        fontSize: "20px",
                        padding: "10px 20px",
                      }}
                    >
                      target : {exercise?.target}
                    </Button>
                  </Box>
                </Box>
              </Tooltip>
            </Link>
          ))}
      </Masonry>
      {exercises.length > numberExerciseShow && (
        <Stack
          spacing={2}
          flexDirection="row"
          justifyContent="center"
          mt="60px"
        >
          <Pagination
            color="secondary"
            sx={{
              width: "fit-content",
              button: {
                backgroundColor: "#4a4a4a",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#9c27b0",
                  color: "#fff",
                },
              },
            }}
            shape="rounded"
            size="large"
            count={Math.ceil(exercises.length / numberExerciseShow)}
            defaultPage={1}
            page={currentPage}
            onChange={changePaginate}
          />
        </Stack>
      )}
    </Box>
  );
};

export default Exercises;
