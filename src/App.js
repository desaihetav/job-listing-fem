import React, { useState, useEffect } from "react";
import JobCard from "./components/jobCard";
// import data from "./data/data.json";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("./data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  console.log(jobs);

  return (
    <div className="App">
      <h1>Hello World</h1>
      {jobs.length === 0 ? (
        <p>Fetching Jobs...</p>
      ) : (
        jobs.map((job) => <JobCard job={job} key={job.id} />)
      )}
      <JobCard />
    </div>
  );
}

export default App;
