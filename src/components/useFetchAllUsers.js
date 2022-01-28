import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetchAllUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://gorest.co.in/public/v1/users",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 033e089737cf3fff11add7a6bd6516a75f919bd5bc3c5ea1839799564f633360",
      },
      params: { page: 1 },
    })
      .then((res) => {
        setUsers(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return { loading, users };
};

export default useFetchAllUser;
