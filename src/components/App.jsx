import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";
import fetchQuery from "../pixabay-api";

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
    isLoading: false,
    isEnd: false,
    isError: false,
  }

  async componentDidUpdate(_prevProps, prevState) {
    const { searchQuery, currentPage } = this.state;
    
    if (prevState.searchQuery !== searchQuery || 
        prevState.currentPage !== currentPage) {
        await this.fetchImages();
        this.setState({ isLoading: true });
    }
  }
  
  fetchImages = async () => {
    const { searchQuery, currentPage } = this.state;
    
    try {
      setTimeout(() => {
        fetchQuery(searchQuery, currentPage).then( val => {
  
          const { hits, totalHits } = val;
  
          if (hits.length === 0) {
            return console.log("No results found!")
          }
          
          this.setState(prevState => ({
            images: currentPage === 1 ? hits : [...prevState.images, ...hits],
            isLoading: false,
            isEnd: prevState.images.length + hits.length >= totalHits,
          }));
        });
      }, 500);
    } catch (error) {
      this.setState({ isError: true});
      console.error(error);
    } finally {
      this.setState({isLoading: false});
    }
  }

  setQuery = query => {
    if (query !== this.state.searchQuery) {
      this.setState({
        searchQuery: query,
        currentPage: 1,
        isEnd: false
      });
    }
  }

  loadMore = () => {
    if (!this.state.isEnd) {
      this.setState(prevState => ({
        currentPage: prevState.currentPage + 1
      })); 
    } else {
      console.log("You've reached the end!");
    }
  }

  render() {
    let { isError, isLoading, isEnd, images, currentPage } = this.state;
    console.log(isLoading);
    return (
      <>
        <Searchbar setQuery={this.setQuery}/>
        {isLoading && currentPage === 1 && (<Loader/>)}
        <ImageGallery images={images}/>
        {!isLoading && !isEnd && !isError && images.length > 0 &&(
          <Button loadMore={this.loadMore}/>
        )}
        {isLoading && currentPage > 1 && (<Loader/>)}
      </>
    );
  }
}

export default App;