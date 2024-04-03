import api from "./api";

export const GetUserProfile = async (body) => {
  try {
    const response = await api.get("/user/profile", body);

    console.log("response signup** ", response)
    return response;
  } catch (error) {
    console.log(error,"<<")
    return;
  }
};

export const GetNearestUsers = async () => {
  try {
    const response = await api.get("/user/nearest-users");
    
      // console.log("response login** ", response)
      return response;
  } catch (error) {
    console.log(error,"<<")
    return;
  }
};



export const DeleteProfile = async (body) => {
    try {
      const response = await api.delete("/user/profile/image");
      
        // console.log("response login** ", response)
        return response;
    } catch (error) {
      console.log(error,"<<")
      return;
    }
  };
  

export const UpdateUserProfile = async (body,headers) => {
    try {
      const response = await api.put("/user/profile", body,headers);
  
      console.log("response signup** ", response)
      return response;
    } catch (error) {
      console.log(error,"<<")
      return;
    }
  };