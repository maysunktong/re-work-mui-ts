import { Typography, Box, Button, Chip, Stack} from "@mui/material";
import fetchJobs from "../../services/api";

export default async function JobPage({ params }: JobPageProps) {
  const jobs: Job[] = await fetchJobs();
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
      <Typography fontWeight={500} color="primary.dark" variant="h4" pt={3}>
        {job.title}
      </Typography>
      <Typography fontWeight={400} color="primary.light" variant="h6" py={2}>
        {job.company_name}
      </Typography>
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
}
