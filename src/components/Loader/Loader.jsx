import { Component } from "react";
import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

class Loader extends Component {
   render(){
      return (
         <div className={css.loaderContainer}>
            <InfinitySpin
               visible={true}
               width="200"
               color="#4fa94d"
               ariaLabel="infinity-spin-loading"
            />
         </div>
      );
   }
}

export default Loader;