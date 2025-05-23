import { List, ListItem } from "@mui/material";
import JobCard from "./UI/JobCard";

const JobList = ({ jobs }: { jobs: Job[] }) => {
  return (
    <List>
      {jobs.map((job) => (
        <ListItem key={job.id}>
          <JobCard job={job} />
        </ListItem>
      ))}
    </List>
  );
}
export default JobList;
