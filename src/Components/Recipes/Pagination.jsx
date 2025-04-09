import { Pagination } from "@mui/material";

const PaginationSelector = ({ onChange, totalPage, page }) => {
  return (
    <Pagination
      color="success"
      onChange={onChange}
      count={totalPage}
      page={page}
      sx={{ justifyContent: "center", display: "flex", marginTop: 3 }}
    />
  );
};

export default PaginationSelector;
