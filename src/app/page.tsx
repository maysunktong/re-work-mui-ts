"use client";

import { useState } from "react";
import HeroSection from "../components/HeroSection";
import JobList from "../components/JobList";
import JobSkeleton from "../components/UI/JobSkeleton";
import useJobs from "../hooks/useJobs";
import CategoryButtons from "../components/CategoryButtons";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { jobs, loading } = useJobs(selectedCategory);
  const JOBS_PER_PAGE = 15;
  return (
    <>
      <HeroSection />
      <CategoryButtons
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      {loading ? <JobSkeleton length={JOBS_PER_PAGE} /> : <JobList jobs={jobs} JOBS_PER_PAGE={JOBS_PER_PAGE} />}
    </>
  );
};
export default Home;
