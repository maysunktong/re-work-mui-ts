interface Job {
  id?: string,
  title: string,
  company_name: string,
  company_logo: string,
  category: string,
  candidate_required_location: string[],
  salary: string,
  job_type: string,
  description: string
}

interface JobSkeletonProps {
  length?: number;
}

interface JobListProps {
  jobs: Job[];
  JOBS_PER_PAGE?: number;
}

interface Category {
  label: string,
  value: string
}

interface CategoryButtonsProps {
  selectedCategory: string,
  onSelectCategory: (value: string) => void;
}
