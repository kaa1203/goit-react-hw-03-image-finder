import { Component } from "react";
import css from "./Button.module.css"

class Button extends Component {
   handleOnClick = () => {
      this.props.loadMore();
   }

   render() {
      return (
         <button onClick={this.handleOnClick} className={css.loadButton}>Load More</button>
      );
   }
}

export default Button;