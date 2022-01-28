import axios from "axios";

const useEditUser = async (user) => {
  const message = await axios({
    method: "PATCH",
    url: `https://gorest.co.in/public/v1/users/${user.id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 033e089737cf3fff11add7a6bd6516a75f919bd5bc3c5ea1839799564f633360",
    },
    data: user,
  });

  return message;
};

export default useEditUser;
