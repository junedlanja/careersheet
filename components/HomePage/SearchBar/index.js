import React, { Component } from 'react'
import Search from '@material-ui/icons/Search';
import style from './SearchBar.css'

class SearchBar extends Component {
  render() {
    const {searchClick} = this.props
    const iconSize = "lg"
    return (
      <div className={style.searchForm}>
        <input className={style.searchBar} placeholder="Account Executive"></input>
        <button onClick={searchClick} className={style.searchButton}>
          <Search className={style.searchIcon}></Search>
        </button>
      </div>
    )
  }
}
export default SearchBar