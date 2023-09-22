import { Component } from "react";
import css from "./Loader.module.css";
import { ThreeCircles } from "react-loader-spinner";
class Loader extends Component {
  render() {
    return (
      <div className={css.centered_container}>
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    );
  }
}
export default Loader;
