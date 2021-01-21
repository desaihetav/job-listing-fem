import React, { useEffect, useState } from "react";
import JobCard from "./components/jobCard";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    fetch("./data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  const filteredJobs = jobs.filter(({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }
    if (languages) {
      tags.push(...languages);
    }

    return filters.every((filter) => tags.includes(filter));
  });

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const handleFilterClick = (filterToRemove) => {
    setFilters(filters.filter((filter) => filter !== filterToRemove));
  };

  return (
    <div className="App w-full min-h-screen pb-2 bg-teal-50 m-0 select-none">
      <header className="bg-teal-400 mb-10">
        <img
          src="./images/bg-header-desktop.svg"
          className="w-full lg:h-auto h-36 object-cover"
          alt="desktop header"
        />
      </header>
      {filters.length > 0 && (
        <div className="flex flex-row bg-white items-center shadow-lg justify-between mx-4 lg:mx-8 -mt-20 z-10 relative py-6 lg:px-12 px-6 rounded-lg">
          <div className="flex flex-wrap">
            {filters.map((filter) => (
              <div className="mr-4 my-2">
                <span className="bg-teal-50 text-teal-500 font-bold my-2 ml-0 px-2 py-1 rounded-l-md cursor-default">
                  {filter}
                </span>
                <span
                  className="bg-teal-500 px-2 py-1 rounded-r-md font-bold text-white hover:bg-gray-800 cursor-pointer"
                  onClick={() => handleFilterClick(filter)}
                >
                  X
                </span>
              </div>
            ))}
          </div>
          <span
            onClick={() => setFilters([])}
            className="px-2 font-bold text-gray-500 hover:text-teal-500 hover:underline duration-200 cursor-pointer"
          >
            Clear
          </span>
        </div>
      )}
      {filteredJobs &&
        filteredJobs.map((job) => {
          return (
            <JobCard job={job} key={job.id} handleTagClick={handleTagClick} />
          );
        })}
      <JobCard />
    </div>
  );
}

export default App;
