import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdLocationOn } from "react-icons/md";
import Pagination from "./../pagination/pagination";
import InputUser from "./../input/InputUser";

const User = ({
  avater,
  setAvater,
  repos,
  setRepos,
  errorMessage,
  setErrorMessage,
  errorSignal,
  setErrorSignal,
}) => {
  const [tools, setTools] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = repos.slice(firstPostIndex, lastPostIndex);

  const SampleData = errorSignal ? (
    <h1 className="text-red-500 text-5xl text-center mt-6">{errorMessage}</h1>
  ) : (
    <>
      <div className="hero min-h-[350px] ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={avater.avatar_url}
            className="max-h-[250px] max-w-[250px] border-4 border-sky-500 rounded-lg shadow-2xl rounded-full"
            alt=""
          />
          <div>
            <h1 className="text-3xl font-bold">{avater.name}</h1>

            <p className="pt-6  text-sm">{avater.bio}</p>
            {avater.location? <div className="flex flex-row mt-[5px]">
              <p className="mr-[5px] font-bold text-2xl">
                <MdLocationOn />
              </p>
              <p className=" text-sm">{avater.location}</p>
            </div>: ""}
            
          </div>
        </div>
      </div>
      {/* <h1>Length={repos.length}</h1>/ */}
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[50px]">
        {currentPosts.map((repo, index, arr) => (
          <div
            key={index}
            className="card w-[550px] h-[260px] rounded-none  border-4 border-black"
          >
            <div className="card-body">
              <h2 className="card-title text-2xl text-sky-500">{repo.name}</h2>
              <h3>{repo.description}</h3>
              <div className="card-actions ">
                {repo.language ? (
                  <button className="btn btn-outline bg-sky-500 text-white btn-md">
                    {repo.language}
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid justify-items-center mt-[100px]">
        <Pagination
          totalPosts={repos.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );

  return <div>{SampleData}</div>;
};

export default User;
