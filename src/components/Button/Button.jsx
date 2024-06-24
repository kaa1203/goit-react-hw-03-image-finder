import { Component } from "react";
import css from "./Button.module.css";
import PropTypes from "prop-types";

class Button extends Component {
   static = {
      loadMore: PropTypes.func.isRequired
   }

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