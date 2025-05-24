import { Grid } from "@mui/material";
import JobCard from "./UI/JobCard";

const JobList = ({ jobs }: { jobs: Job[] }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ width: "80%", mx: "auto", py: 2 }}
    >
      {jobs.map((job) => (
        <Grid
          item
          key={job.id}
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex" }}
          flexGrow={1}
        >
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  );
}
export default JobList;
