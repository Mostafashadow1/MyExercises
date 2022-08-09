import { Box, Button, TextField } from "@mui/material";
import React from "react";

const SearchInput = ({ searchTerm, onChange, handleSearchTerm }) => {
  return (
    <Box maxWidth="900px" margin="auto">
      <Box display="flex" gap="4px">
        <TextField
          fullWidth
          placeholder="Search Exercises"
          sx={{
            input: {
              border: "1px solid #fff",
              borderRadius: "5px",
              color: "#fff",
              fontWeight: "700",
              fontSize: "20px",
            },
          }}
          onChange={onChange}
          value={searchTerm}
        />
        <Button
          className="mainButton"
          size="large"
          sx={{
            padding: "0px 50px",
            fontWeight: "600",
            fontSize: "20px",
          }}
          variant="contained"
          onClick={handleSearchTerm}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default SearchInput;
