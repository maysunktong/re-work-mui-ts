"use client";

import { useEffect, useState } from "react";
import fetchJobs from "../services/api";

const useJobs = (category:string) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchJobs(category);
        setJobs(data);
      } catch (error) {
        console.log("❌ Error occured", error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [category]);

  return { jobs, loading };
};

export default useJobs;
