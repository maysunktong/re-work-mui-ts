import { Typography, Box, Button, Chip, Stack, Avatar } from "@mui/material";
import fetchJobs from "../../services/api";
import { slugify } from "../../utils/utils";

const JobPage = async ({ params }: {
  params: Promise<{ job: string }>;
}) => {
  const { job } = await params;
  const jobs: Job[] = await fetchJobs();

  const jobUrl = slugify(job);
  const selectedJob = jobs.find((item) => slugify(item.title) === jobUrl);

  if (!selectedJob) {
    return <Typography>Job not found</Typography>;
  }

  return (
    <Box
      sx={{
        gap: 2,
        width: "80%",
        minHeight: "100dvh",
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
            {selectedJob.title}
          </Typography>
          <Typography
            fontWeight={400}
            color="primary.light"
            variant="h6"
            py={2}
          >
            {selectedJob.company_name}
          </Typography>
        </Box>
        <Avatar
          variant="square"
          alt="company-logo"
          src={selectedJob.company_logo}
          sx={{ height: 100, width: 100 }}
        />
      </Box>

      <Stack direction="row" spacing={1} flexWrap="wrap" mb={1}>
        <Chip label={selectedJob.category} variant="outlined" />
        <Chip
          color="primary"
          label={selectedJob.job_type === "full_time" ? "Full time" : selectedJob.job_type}
          variant="outlined"
        />
      </Stack>
      <Typography
        dangerouslySetInnerHTML={{
          __html: selectedJob.description,
        }}
      />
    </Box>
  );
};

export default JobPage;
