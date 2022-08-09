import { Box } from "@mui/material";
import { Navbar } from "components";
import Home from "pages/Home";
import ExerciesDetails from "pages/ExerciesDetails";
import NotFound from "pages/NotFound";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Box>
      <Navbar />
      <hr />
      <Box marginTop="90px" overflow="hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:exerciseId" element={<ExerciesDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
