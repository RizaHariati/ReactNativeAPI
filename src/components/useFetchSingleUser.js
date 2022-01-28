import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetchSingleUser = (id) => {
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: `https://gorest.co.in/public/v1/users/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setUserData(res.data.data);
        setLoading(false);
        console.log(userData);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return { loading, userData };
};

export default useFetchSingleUser;
