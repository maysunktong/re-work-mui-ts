import { Box, Pagination, Typography } from "@mui/material";
import { useState } from "react";
import JobCard from "./UI/JobCard";

const JobList = ({ jobs, JOBS_PER_PAGE = 15 }: JobListProps) => {
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
      <Typography
        sx={{
          gap: 2,
          width: "80%",
          mx: "auto",
          py: 4,
          color: "gray",
          fontSize: {
              xs: "1rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2rem",
            },
        }}
      >
        Showing{" "}
        <Box component="span" sx={{ color: "#06d6a0", fontWeight: "bold" }}>
          {jobs.length}
        </Box>{" "}
        available jobs
      </Typography>
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
            "& .MuiPaginationItem-root": {
              color: "white",
            },
          }}
        />
      </Box>
    </>
  );
};

export default JobList;
