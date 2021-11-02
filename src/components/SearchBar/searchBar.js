import React from 'react';
import './searchBar.css';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term : '',
            location: '',
            sortBy : 'best_match',
        };
        this.sortByOptions = {
            "Best Match" : "best_match",
            "Highest Rated" : "rating",
            "Most Reviewed" : "review_count"
        }
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li 
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                className={this.getSortByClass(sortByOptionValue)}
                key={sortByOptionValue}>{sortByOption}
            </li>
        })
    }
    getSortByClass(sortByOption) {
        if(this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    }
    handleSortByChange(sortByOption) {
        this.setState({
            sortBy : sortByOption
        })
    }
    handleTermChange(event) {
        this.setState({
            term: event.target.value
        })
    }
    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        })
    }
    handleSearch(event) {
        if(this.state.term !== '' && this.state.location !== '') {
            this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        }
        event.preventDefault();
    }
    handleKeyPress(event) {
        if(event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            if(this.state.term !== '' && this.state.location !== '') {
                this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
            }
        }
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }
    
    componentWillUnmount() {
       document.removeEventListener("keydown", this.handleKeyPress);
    }
    render () {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div className="SearchBar-submit" onClick={this.handleSearch} tabIndex="0" onKeyDown={this.handleKeyPress} >
                    <button >Let's Go</button>
                </div>
            </div>
        )
    }
}
export default SearchBar;