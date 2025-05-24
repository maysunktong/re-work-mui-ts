import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Chip,
  Avatar,
  Divider,
  Stack,
  Box,
} from "@mui/material";

const JobCard = ({ job }: { job: Job }) => {
  return (
    <Card
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        width: 300,
        transition: "0.3s",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
      }}
    >
      <Box>
        <CardHeader
          avatar={
            <Avatar
              variant="square"
              alt="company-logo"
              src={job.company_logo}
              sx={{ height: 50, width: 50 }}
            />
          }
          title={<Typography variant="body1">{job.title}</Typography>}
          subheader={
            <Typography variant="subtitle2" color="text.secondary">
              {job.company_name}
            </Typography>
          }
          sx={{ pb: 1 }}
        />
        <CardContent sx={{ pt: 0 }}>
          <Stack direction="row" spacing={1} flexWrap="wrap" mb={1}>
            <Chip label={job.category} variant="outlined" />
            <Chip
              color="primary"
              label={job.job_type === "full_time" ? "Full time" : job.job_type}
              variant="outlined"
            />
          </Stack>
          <Typography
            variant="body2"
            color="text.secondary"
            noWrap
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            📍 {job.candidate_required_location}
          </Typography>
        </CardContent>
      </Box>
      <Box>
        <Divider sx={{ my: 1 }} />
        <Typography variant="caption" fontWeight={500}>
          💰 {job.salary !== "" ? job.salary : "No salary stated"}
        </Typography>
      </Box>
    </Card>
  );
};

export default JobCard;
