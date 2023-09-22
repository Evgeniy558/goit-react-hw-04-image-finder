import { useEffect, useState } from "react";
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
  const [isLoarding, setLoding] = useState(false);
  // const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log("render");
  }, [pictures]);

  const setDefaultAppState = () => {
    setPictures([]);
    setPage(1);
  };

  const submit = async (ev) => {
    ev.preventDefault();
    setDefaultAppState();
    if (searchValue) {
      setLoding(true);
      await loard(LOADINGDEFAULTPAGE);
    }
    return;
  };

  const loard = async (page) => {
    setPage(page);
    const responce = await requestToApi(page, searchValue, isLoaded);
    setPictures((prevState) => {
      const addedPicturesArray = [...prevState, ...responce.data.hits];
      return addedPicturesArray;
    });
  };

  const isLoaded = () => {
    setLoding(false);
  };

  const getSearchValue = (ev) => {
    return (searchValue = ev.target.value);
  };

  return (
    <div className="App">
      {isLoarding ? (
        <>
          {" "}
          <Searchbar />
          <Loader />
        </>
      ) : (
        <>
          {" "}
          <Searchbar onSubmit={submit} onChange={getSearchValue} />
          <ImageGallery
            pictures={pictures}
            setDefaultAppState={setDefaultAppState}
          />
          {pictures.length > 0 && <Button onClick={() => loard(page + 1)} />}
        </>
      )}
    </div>
  );
};

export default App;
