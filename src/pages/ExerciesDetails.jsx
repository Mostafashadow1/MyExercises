import { Box } from "@mui/material";
import { HeaderDetails, Spinner } from "components";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "utils/fetchData";
const ExerciesDetails = () => {
  const [exerciseDetails, setExerciseDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const { exerciseId } = useParams();
  // get exercise Details by id
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const details = await getData(`/exercises/exercise/${exerciseId}`);
      setExerciseDetails(details);
      setLoading(false);
    }
    fetchData();
  }, [exerciseId]);
  // set loading when data loading
  if (loading) return <Spinner />;

  return (
    <Box className="container">
      <HeaderDetails exerciseDetails={exerciseDetails && exerciseDetails} />
      
    </Box>
  );
};

export default ExerciesDetails;
