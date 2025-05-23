import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Chip,
  Avatar,
  Divider,
} from "@mui/material";

const JobCard = ({ job }: { job: Job }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar alt="company-logo" src={job.company_logo} />}
        title={job.title}
        subheader={job.company_name}
      />
      <CardContent>
        <Chip label={job.category} variant="outlined" />
        <Chip label={job.contract_type} variant="outlined" />

        <Typography
          noWrap
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            height: "100px",
          }}
        >
          {job.description}
        </Typography>
        <Divider />
        <Typography>{job.salary}</Typography>
      </CardContent>
    </Card>
  );
};
export default JobCard;
