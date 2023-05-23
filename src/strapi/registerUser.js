import axios from "axios";
import url from "../strapi/URL";
import setupUser from "./setupUser";

async function registerUser({ email, password, username }) {
  const response = await axios
    .post(`${url}/api/auth/local/register`, {
      username,
      email,
      password,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((error) => console.log(error));

  if (response) {
    setupUser(response);
  }

  return response;
}

export default registerUser;
