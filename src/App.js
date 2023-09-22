import { Component } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import { requestToApi } from "./serveces/requestToApi";

export const IMG_PER_PAGE = 12;
const LOADINGDEFAULTPAGE = 1;
// test
class App extends Component {
  state = {
    pictures: [],
    isLoarding: false,
    searchValue: "",
    page: "",
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (
      JSON.stringify(nextState.pictures) !== JSON.stringify(this.state.pictures)
    ) {
      this.setState((prevState) => ({ page: prevState.page + 1 }));
      console.log("updateApp");
      return true;
    }
    return false;
  }
  //set default state after submit and unmount component ImageGalleryItem
  setDefaultAppState = () => {
    this.setState({ pictures: [] });
    this.setState({ page: 1 });
  };

  submit = async (ev) => {
    ev.preventDefault();
    this.setDefaultAppState();
    if (this.state.searchValue) {
      this.setState({ isLoarding: true });
      await this.loard(LOADINGDEFAULTPAGE);
    }
    return;
  };

  loard = async (page) => {
    const responce = await requestToApi(
      page,
      this.state.searchValue,
      this.isLoaded
    );

    this.setState((prevState) => ({
      pictures: [...prevState.pictures, ...responce.data.hits],
    }));
  };

  //hide loager
  isLoaded = () => {
    this.setState({ isLoarding: false });
  };

  getSearchValue = (ev) => {
    this.setState({ searchValue: ev.target.value });
  };

  render() {
    const { pictures, isLoarding, page } = this.state;
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
            <Searchbar onSubmit={this.submit} onChange={this.getSearchValue} />
            <ImageGallery
              pictures={pictures}
              setDefaultAppState={this.setDefaultAppState}
            />
            {pictures.length > 0 && (
              <Button
                onClick={() => {
                  this.loard(page + 1);
                }}
              />
            )}
          </>
        )}
      </div>
    );
  }
}

export default App;
