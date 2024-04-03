import api from "./api";

export const SignUp = async (body) => {
  try {
    const response = await api.post("/auth/register", body);

    console.log("response signup** ", response)
    return response;
  } catch (error) {
    console.log(error,"<<")
    return;
  }
};

export const SignIn = async (body) => {
  try {
    const response = await api.post("/auth/login", body);
    if (!response?.data.success) {
      return response;
    } else {
      // console.log("response login** ", response)
      return response;
    }
  } catch (error) {
    console.log(error,"<<")
    return;
  }
};
