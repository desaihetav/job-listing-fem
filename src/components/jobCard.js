import React from "react";

const JobCard = ({ job }) => {
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
        className={`flex bg-white shadow-lg m-4 p-6 rounded-lg ${
          isFeatured && "border-teal-500 border-l-4 border-solid"
        }`}
      >
        <div>
          <img src={logo} />
        </div>
        <div className="ml-4 flex justify-around flex-col mr-auto">
          <h2 className="font-bold text-teal-500">
            {company}
            {isNew && (
              <span className="ml-2 bg-teal-500 text-white px-2 py-1 rounded-2xl uppercase">
                New!
              </span>
            )}
            {isFeatured && (
              <span className="ml-2 bg-gray-700 text-white px-2 py-1 rounded-2xl uppercase">
                Featured
              </span>
            )}
          </h2>
          <h1 className="font-bold text-lg">{position}</h1>
          <p className="text-gray-500">
            {postedAt} • {contract} • {location}
          </p>
        </div>
        <div className="flex justify-center items-center">
          {tags.map((tag) => (
            <>
              <span className="bg-teal-50 text-teal-500 font-bold m-2 px-2 py-1 rounded-md">
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
