import { Box, FormControl, Select, InputLabel, MenuItem } from "@mui/material";
const RecipesNumber = ({ recipesPerPage, handleChange }) => {
  return (
    <Box sx={{ width: 100, marginBottom: 3 }}>
      <FormControl fullWidth>
        <InputLabel id="sort">sort</InputLabel>
        <Select
          labelId="number"
          id="demo-simple-select"
          value={recipesPerPage}
          label="sort"
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
