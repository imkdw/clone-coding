import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const FreeBoardPagination = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} color="primary" />
    </Stack>
  );
};

export default FreeBoardPagination;
