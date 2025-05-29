const fetchJobs = async (category: string = ""): Promise<Job[]> => {
  const API_URL = `https://remotive.com/api/remote-jobs${category ? `?category=${encodeURIComponent(category)}` : ""}`;
  const res: Response = await fetch(API_URL);
  if (!res.ok) throw new Error(`Failed to fetch. Status: ${res.status}`);
  const jobData = await res.json();
  return jobData.jobs;
};

export default fetchJobs;
