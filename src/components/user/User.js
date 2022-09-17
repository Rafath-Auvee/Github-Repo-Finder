import React, { useState } from "react";
import axios from "axios";
const User = () => {
  axios
    .get("https://api.github.com/users/rafath-bin-zafar-auvee")
    .then(function (res) {
      // handle success
      setAvater(res.data.avatar_url)
      console.log(res);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  const [avater, setAvater] = useState();

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={avater}
          className="max-h-[350px] max-w-[350px] rounded-lg shadow-2xl rounded-full"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default User;
