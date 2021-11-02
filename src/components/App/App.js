import logo from './logo.svg';
import './App.css';
import React from 'react';
import BusinessList from '../BusinessList/businessList';
import SearchBar from '../SearchBar/searchBar';
import yelp from '../../util/Yelp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({
        businesses: businesses
      })
    })
  }
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList business={this.state.businesses} />
      </div>
    );
  }
}

export default App;
