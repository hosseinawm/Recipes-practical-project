import { Box, FormControl, Select, InputLabel, MenuItem } from "@mui/material";
const RecipesNumber = ({ recipesPerPage, handleChange }) => {
  return (
    <Box sx={{ width: 100, marginBottom: 3 }}>
      <FormControl fullWidth>
        <InputLabel id="number-select">Sort</InputLabel>
        <Select
          labelId="number-select"
          id="demo-simple-select"
          value={recipesPerPage}
          label="recipesNumber"
          onChange={handleChange}
        >
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default RecipesNumber;
