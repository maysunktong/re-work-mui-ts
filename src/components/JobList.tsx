import { Box } from "@mui/material";
import JobCard from "./UI/JobCard";

const JobList = ({ jobs }: { jobs: Job[] }) => {
  return (
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
      {jobs.map((job) => (
        <Box
          key={job.id}
          sx={{
            display: "flex",
          }}
        >
          <JobCard job={job} />
        </Box>
      ))}
    </Box>

  );
}
export default JobList;
