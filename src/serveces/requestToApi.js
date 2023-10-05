import axios from "axios";

const IMG_PER_PAGE = 12;
export const requestToApi = async (page, searchValue, isLoaded) => {
  try {
    const responce = await axios.get("https://pixabay.com/api/", {
      params: {
        key: "36234067-70acfbfc80ca70cd9e73eaaab",
        q: searchValue,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: IMG_PER_PAGE,
      },
    });
    return responce.data;
  } catch (error) {
    throw new Error(`Error ${error}`);
  }
};
