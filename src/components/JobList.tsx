import { Box, Pagination } from "@mui/material";
import { useState } from "react";
import JobCard from "./UI/JobCard";

const JOBS_PER_PAGE = 15;

const JobList = ({ jobs }: { jobs: Job[] }) => {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(jobs.length / JOBS_PER_PAGE);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedJobs = jobs.slice(
    (page - 1) * JOBS_PER_PAGE,
    page * JOBS_PER_PAGE
  );

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: 2,
          width: "80%",
          mx: "auto",
          py: 2,
        }}
      >
        {paginatedJobs.map((job) => (
          <Box key={job.id} sx={{ display: "flex" }}>
            <JobCard job={job} />
          </Box>
        ))}
      </Box>
      <Box display="flex" justifyContent="center" py={2}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          color="primary"
          sx={{
            '& .MuiPaginationItem-root': {
              color: 'white',
            },
          }}
        />
      </Box>
    </>
  );
};

export default JobList;
