const fetchJobs = async (): Promise<Job[]> => {
  const API_URL = `https://remotive.com/api/remote-jobs`;
  const res: Response = await fetch(API_URL);
  if (!res.ok) throw new Error(`Failed to fetch. Status: ${res.status}`);
  const jobData = await res.json();
  return jobData.jobs;
};

export default fetchJobs;
