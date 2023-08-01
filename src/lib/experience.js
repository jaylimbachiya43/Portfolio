import instance from "./axiosInstance";

const fetchExperience = async () => {
  try {
    const response = await instance.get("/company-experiences");
    return response.data.data;
  } catch (err) {
    console.log("experience api error");
  }
};
export default fetchExperience;
