import { useState } from "react";
import Notiflix from "notiflix";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import { requestToApi } from "./serveces/requestToApi";

const LOADINGDEFAULTPAGE = 1;

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isHidden, setIsHidden] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const setDefaultAppState = () => {
    setPictures([]);
    setPage(LOADINGDEFAULTPAGE);
    setIsHidden(false);
  };

  const submit = async (ev) => {
    setSearchValue(ev.target.elements.searchValue.value);
    ev.preventDefault();
    setDefaultAppState();
    if (ev.target.elements.searchValue.value) {
      await renderPictures(
        LOADINGDEFAULTPAGE,
        ev.target.elements.searchValue.value
      );
    }
    ev.target.reset();
    return;
  };

  const renderPictures = async (page, searchValue) => {
    setLoading(true);
    try {
      const responce = await requestToApi(page, searchValue);
      setPictures((prevState) => {
        const pictures = [...prevState, ...responce.hits];
        if (responce.totalHits === pictures.length) {
          setIsHidden(true);
        }
        return pictures;
      });
      setPage((prevState) => {
        const page = prevState + 1;
        return page;
      });
    } catch (error) {
      Notiflix.Notify.failure(`Error ${error}`);
    } finally {
      isLoaded();
    }
  };

  const isLoaded = () => {
    setLoading(false);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={submit} />
      <ImageGallery pictures={pictures} />{" "}
      {pictures.length > 0 && (
        <Button
          isHidden={isHidden}
          onClick={() => renderPictures(page, searchValue)}
        />
      )}
      {isLoading ? <Loader /> : null}
    </div>
  );
};
export default App;
