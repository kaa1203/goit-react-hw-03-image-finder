import { Component } from "react";
import css from "./Searchbar.module.css"

class Searchbar extends Component {
   state = {
      query: ''
   }

   handleOnChange = e => {
      this.setState({
         query: e.target.value,
      });
   }

   handleOnSubmit = e => {
      let { query } = this.state;
      e.preventDefault();
      query = query.trim().toLowerCase();

      if (query === '') {
         return console.log("nuh uh")
      }

      this.props.setQuery(query);
      this.setState({ query: '' })
   }

   render() {

      return (
         <header className={css.searchbar}>
            <div className={css.container}>
               <form className={css.form} onSubmit={ this.handleOnSubmit}>
                  <button type="submit" className={css.button}>
                     <span className="button-label">Search</span>
                  </button>

                  <input
                     className={css.input}
                     type="text"
                     autoComplete="off"
                     autoFocus
                     placeholder="Search images and photos"
                     value={this.state.query}
                     onChange={this.handleOnChange}
                  />
               </form>
            </div>
         </header>
      );
   }
}

export default Searchbar;