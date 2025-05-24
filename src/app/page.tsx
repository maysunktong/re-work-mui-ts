"use client";

import HeroSection from "../components/HeroSection";
import JobList from "../components/JobList";
import JobSkeleton from "../components/UI/JobSkeleton";
import useJobs from "../hooks/useJobs";

const Home = () => {
  const { jobs, loading } = useJobs();
  return (
    <>
      <HeroSection />
      {loading ? <JobSkeleton /> : <JobList jobs={jobs} />}
    </>
  );
};
export default Home;
