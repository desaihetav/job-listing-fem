import React from "react";

const JobCard = ({ job, handleTagClick }) => {
  if (job) {
    const {
      id,
      company,
      logo,
      isNew,
      isFeatured,
      position,
      role,
      level,
      postedAt,
      contract,
      location,
      languages,
      tools,
    } = job;

    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }
    if (languages) {
      tags.push(...languages);
    }

    return (
      <div
        className={`lg:flex-row flex flex-col lg:items-center bg-white shadow-lg lg:m-8 mx-4 mt-14 mb-10 p-6 rounded-lg ${
          isFeatured && "border-teal-500 border-l-4 border-solid"
        }`}
      >
        <div>
          <img
            className="w-16 h-16 -mt-14 lg:w-full lg:h-full lg:m-0"
            src={logo}
          />
        </div>
        <div className="lg:ml-4 my-4 lg:my-0 pb-4 lg:pb-0 flex justify-around flex-col mr-auto border-b lg:border-none w-full lg:w-auto">
          <h2 className="font-bold my-2 text-teal-500">
            {company}
            {isNew && (
              <span className="ml-2 text-xs bg-teal-500 text-white px-2 py-1 rounded-2xl uppercase">
                New!
              </span>
            )}
            {isFeatured && (
              <span className="ml-2 text-xs bg-gray-700 text-white px-2 py-1 rounded-2xl uppercase">
                Featured
              </span>
            )}
          </h2>
          <h1 className="font-bold text-lg hover:text-teal-500 transition-colors duration-300">
            {position}
          </h1>
          <p className="text-gray-500">
            {postedAt} • {contract} • {location}
          </p>
        </div>
        <div className="flex flex-wrap lg:justify-center items-center">
          {tags.map((tag) => (
            <>
              <span
                onClick={() => handleTagClick(tag)}
                className="bg-teal-50 text-teal-500 font-bold m-2 ml-0 px-2 py-1 rounded-md cursor-pointer hover:bg-teal-500 hover:text-white transition-colors duration-300"
              >
                {tag}
              </span>
            </>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default JobCard;
