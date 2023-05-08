import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https:/api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID wMyHkYD9bTxtQbfh98sVT1CGJu_xTR7MRCngvnEFzlU",
    },
    params: {
      query: term,
    },
  });
  return response;
};

export default searchImages;
