"use client";

import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import { Box, Typography, List, ListItem } from "@mui/material";

interface Job {
  id: number;
  title: string;
  company_name: string;
  // Add more fields as needed
}

const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("https://remotive.com/api/remote-jobs");
        if (!res.ok) throw new Error("Failed to fetch jobs");
        const data = await res.json();
        setJobs(data.jobs);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return { jobs, loading, error };
};

export default function Home() {
  const { jobs, loading, error } = useJobs();

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Remote Jobs
      </Typography>

      {error && <Typography color="error">Error: {error}</Typography>}

      {loading ? (
        <List>
          {Array.from({ length: 5 }).map((_, index) => (
            <ListItem key={index}>
              <Box width="100%">
                <Skeleton variant="text" width="60%" height={30} />
                <Skeleton variant="text" width="40%" height={20} />
              </Box>
            </ListItem>
          ))}
        </List>
      ) : (
        <List>
          {jobs.map((job) => (
            <ListItem key={job.id}>
              <Box>
                <Typography variant="h6">{job.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {job.company_name}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}
