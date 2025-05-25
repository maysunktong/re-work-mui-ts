const fetchJobs = async (category: string = ""): Promise<Job[]> => {
  const API_URL = `https://remotive.com/api/remote-jobs${category ? `?category=${encodeURIComponent(category)}` : ""}`;
  try {
    const res: Response = await fetch(API_URL);
    if (!res.ok) {
      throw new Error(`Failed to fetch jobs. Status: ${res.status}`);
    }
    const jobData = await res.json();
    return jobData.jobs || [];
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};

export default fetchJobs;
