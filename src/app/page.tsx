"use client";

import HeroSection from "../components/HeroSection";
import JobList from "../components/JobList";
import JobSkeleton from "../components/UI/JobSkeleton";
import useJobs from "../hooks/useJobs";

const Home = () => {
  const { jobs, loading } = useJobs();
  const JOBS_PER_PAGE = 15;
  return (
    <>
      <HeroSection />
      {loading ? <JobSkeleton length={JOBS_PER_PAGE}  /> : <JobList jobs={jobs} JOBS_PER_PAGE={JOBS_PER_PAGE} />}
    </>
  );
};
export default Home;
