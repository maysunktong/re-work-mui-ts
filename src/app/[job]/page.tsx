import { Typography, Box, Button, Chip, Stack, Avatar } from "@mui/material";
import fetchJobs from "../../services/api";
import { use } from "react";

const JobPage = ({ params }: { params: { job: string } }) => {
  const jobs = use(fetchJobs());
  const job = jobs.find((item) => item.id.toString() === params.job);

  if (!job) {
    return <Typography>Job not found</Typography>;
  }

  return (
    <Box
      sx={{
        gap: 2,
        width: "80%",
        mx: "auto",
        py: "6rem",
        color: "gray",
      }}
    >
      <Button type="button" href="/" variant="contained">
        Back
      </Button>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography fontWeight={500} color="primary.dark" variant="h4" pt={3}>
            {job.title}
          </Typography>
          <Typography fontWeight={400} color="primary.light" variant="h6" py={2}>
            {job.company_name}
          </Typography>
        </Box>
        <Avatar
          variant="square"
          alt="company-logo"
          src={job.company_logo}
          sx={{ height: 100, width: 100 }}
        />
      </Box>

      <Stack direction="row" spacing={1} flexWrap="wrap" mb={1}>
        <Chip label={job.category} variant="outlined" />
        <Chip
          color="primary"
          label={job.job_type === "full_time" ? "Full time" : job.job_type}
          variant="outlined"
        />
      </Stack>
      <Typography
        dangerouslySetInnerHTML={{
          __html: job.description,
        }}
      />
    </Box>
  );
});
}

export default JobPage;
