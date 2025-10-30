import axios from "axios";

const mediumProfileURL =
  "https://mediumpostsapi.vercel.app/api/@leonardo.bernardo2658";

export const scrapMedium = async () => {
  try {
    const { data } = await axios.get(mediumProfileURL);
    const value = data.dataMedium;
    console.log(value);
    return value;
  } catch (error) {
    throw new Error(error);
  }
};
