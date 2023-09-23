import { useState } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import { requestToApi } from "./serveces/requestToApi";

export const IMG_PER_PAGE = 12;
const LOADINGDEFAULTPAGE = 1;
let searchValue;

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const setDefaultAppState = () => {
    setPictures([]);
    setPage(LOADINGDEFAULTPAGE);
  };

  const submit = async (ev) => {
    ev.preventDefault();
    setDefaultAppState();
    if (searchValue) {
      setLoading(true);
      await load(LOADINGDEFAULTPAGE);
    }
    return;
  };

  const load = async (page) => {
    setPage(page);
    const responce = await requestToApi(page, searchValue, isLoaded);
    setPictures((prevState) => {
      const aditedPicturesArray = [...prevState, ...responce.data.hits];
      return aditedPicturesArray;
    });
  };

  const isLoaded = () => {
    setLoading(false);
  };

  const getSearchValue = (ev) => {
    return (searchValue = ev.target.value);
  };

  return (
    <div className="App">
      {isLoading ? (
        <>
          {" "}
          <Searchbar />
          <Loader />
        </>
      ) : (
        <>
          {" "}
          <Searchbar onSubmit={submit} onChange={getSearchValue} />
          <ImageGallery pictures={pictures} />
          {pictures.length > 0 && <Button onClick={() => load(page + 1)} />}
        </>
      )}
    </div>
  );
};

export default App;
