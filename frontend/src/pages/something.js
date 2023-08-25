// RETRIEVE the entire list of jobs
const loadJobs = async () => {
    const response = await fetch('/jobs');
    const jobsData = await response.json();
    
    // Format the dates before setting the state
    const formattedJobs = jobsData.map(job => ({
        ...job,
        startDate: job.startDate.slice(0, 10),
        endDate: job.endDate.slice(0, 10)
    }));