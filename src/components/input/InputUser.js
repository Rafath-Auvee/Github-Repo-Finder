import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./../user/User";
import Loading from "./../Loading/Loading";

const InputUser = () => {
  const [avater, setAvater] = useState("");
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorSignal, setErrorSignal] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("https://api.github.com/users/Rafath-Bin-Zafar-Auvee/repos")
  //     .then(function (res) {
  //       setRepos(res.data);
  //       console.log(res.data);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .then(function () {
  //       console.log("Complete");
  //     });
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://api.github.com/users/rafath-bin-zafar-auvee")
  //     .then(function (res) {
  //       // handle success
  //       setAvater(res.data);
  //       // console.log(res.data);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .then(function () {
  //       // console.log("Complete");
  //     });
  // }, []);

  const result = (e) => {
    setUser(e.target.value);
    console.log(e.target.value);
  };

  const handleData = () => {
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${user}`)
      .then(function (res) {
        // console.log("user");
        setErrorMessage(null)
        setErrorSignal(false)
        setAvater(res.data);
        // console.log(res.data);
        axios
          .get(`https://api.github.com/users/${user}/repos`)
          .then(function (res) {
            setRepos(res.data);
            setErrorMessage(null)
            setErrorSignal(false)
            // console.log("Repos");
            // console.log(res.data);
            setIsLoading(false);
          })
          .catch(function (error) {
            // handle error
            // console.log(error);
            setErrorSignal(true)
            setErrorMessage("Unable to fetch repos");
            setIsLoading(false);
          })
          // .then(function () {
            
          //   setIsLoading(false);
          // });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setErrorSignal(true)
        
        setErrorMessage("Unable to fetch user");
        setIsLoading(false);
      })
      .then(function () {
        // console.log("Complete");
      });
  };

  return (
    <div className="">
      <div className="flex items-centers justify-center mt-[30px]">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Input Github Username</span>
          </label>
          <div className="input-group">
            <input
              type="text"
              value={user}
              name="gituser"
              placeholder="Github Username"
              className="input input-bordered"
              onChange={result}
            />
            <button onClick={handleData} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <User
            avater={avater}
            setAvater={setAvater}
            user={user}
            setUser={setUser}
            repos={repos}
            setRepos={setRepos}
            errorMessage={errorMessage} 
            setErrorMessage={setErrorMessage}
            errorSignal={errorSignal} 
            setErrorSignal={setErrorSignal}
          />
        )}
      </div>
    </div>
  );
};

export default InputUser;
