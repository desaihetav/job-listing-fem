import React, { useState, useEffect } from "react";
import JobCard from "./components/jobCard";
import data from "./data/data.json";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // fetch("./data/data.json")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJobs(data);
    //   });
    setJobs(data);
  }, []);

  console.log(jobs);

  return (
    <div className="App bg-teal-50 m-0">
      <header className="bg-teal-400 mb-10">
        <img src="./images/bg-header-desktop.svg" className="w-full" />
      </header>
      {jobs &&
        jobs.map((job) => {
          console.log("Job Card Called");
          return <JobCard job={job} key={job.id} />;
        })}
      <JobCard />
    </div>
  );
}

export default App;
