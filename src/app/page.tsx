"use client";

import HeroSection from "../components/HeroSection";
import JobList from "../components/JobList";
import useJobs from "../hooks/useJobs";

const Home = () => {
  const { jobs, loading } = useJobs();
  return (
    <>
      <HeroSection />
      {loading ? "loading..." : <JobList jobs={jobs} />}
    </>
  );
};
export default Home;
